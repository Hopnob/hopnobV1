import pandas as pd
import ximilar_women_westernwear_matching_data as women_west
import ximilar_men_westernwear_matching_data as men_west
from ximilar_virtual_wardrobe import wardrobe
import ximilar_skin_color_match as ximilar_skin
import asyncio
import nats
import json


async def find(options, parameters, df, color_df: dict[str:dict[int:int]], N, M) -> list[list[str]]:
    if parameters[3] == "western_wear":
        if parameters[9] == "women":
            BOTTOM_WEAR = women_west.BOTTOM_WEAR
            TOP_WEAR = women_west.TOP_WEAR
            skin_colors = ximilar_skin.women_western

        if parameters[9] == "men":
            BOTTOM_WEAR = men_west.BOTTOM_WEAR
            TOP_WEAR = men_west.TOP_WEAR
            skin_colors = ximilar_skin.men_western

    matched_options = {}
    for top_index in options["TOP_WEAR"]:
        bottom_indexes = list(df[(df['Topwear Shape'] == top_index) & (
                df[parameters[4]] == 1)]['Bottomwear Shape'])
        for bottom_index in bottom_indexes:
            if bottom_index in options["BOTTOM_WEAR"]:
                matched_options[
                    round(options["TOP_WEAR"][top_index] / N + options["BOTTOM_WEAR"][bottom_index] / M, 6)] = [
                    top_index, bottom_index]

    sorted(matched_options, reverse=True)

    ans = []

    color_preference = []
    for i in matched_options:
        if ((parameters[5] == 'Bottom' and parameters[7] == BOTTOM_WEAR[matched_options[i][1]]) or (
                parameters[5] == 'Top' and parameters[7] == TOP_WEAR[matched_options[i][0]])):
            ans.append([TOP_WEAR[matched_options[i][0]],
                        BOTTOM_WEAR[matched_options[i][1]]])

    if parameters[5] == 'Bottom':
        for i in color_df[color_df['bottom wear color'] == parameters[6]]:
            if len(list(color_df[color_df['bottom wear color'] == parameters[6]][i])) != 0 and \
                    list(color_df[color_df['bottom wear color'] == parameters[6]][i])[0] == 1:
                color_preference.append(i)
    else:
        try:
            for ind, i in enumerate(color_df[:][parameters[6]]):
                if i == 1:
                    color_preference.append(color_df['bottom wear color'][ind])
        except:
            parameters[6] = 'white'
            for ind, i in enumerate(color_df[:][parameters[6]]):
                if i == 1:
                    color_preference.append(color_df['bottom wear color'][ind])

    ANS = []

    # filtering color based on skin tone
    for color in color_preference:
        if not skin_colors[color][parameters[1]]:
            color_preference.remove(color)

    # # Sorting on bases of user preference
    # if parameters[3] == "western_wear":
    #     pref = WOMEN_ETHNIC_PREFERENCS[parameters[0]]["Combination"]
    # else:
    #     pref = WOMEN_WEST_PREFERENCS[parameters[0]]["Combination"]
    # for i in ans:
    #     if i in pref:
    #         ANS.append(i)
    #         ans.remove(i)
    #
    # ANS.extend(ans)
    # return [ANS, color_preference]

    # filtering based on wardrobe availabilty
    for choice in ans:
        if parameters[5] == "Top":
            for color in color_preference:
                try:
                    for url in wardrobe[parameters[0]]["Bottom"][choice[1]][color]:
                        ANS.append([choice[1], color, url])
                except:
                    pass
        elif parameters[5] == "Bottom":
            for color in color_preference:
                try:
                    for url in wardrobe[parameters[0]]["Top"][choice[0]][color]:
                        ANS.append([choice[0], color, url])
                except:
                    pass
    return ANS


async def main():
    # CODE json string subscribing to NATS
    nc = await nats.connect(servers=["nats://216.48.179.152:4222"])
    js = nc.jetstream()
    await js.add_stream(name='my_new_stream', subjects=['user.id.apparel.new_recommendation'])

    async def cb(msg):
        try:
            ximilars_single_response = json.loads(msg.data.decode())
            print(ximilars_single_response)
            await msg.ack()
            # user_id, skin_tone, body_shape, genere, occasion, category, color, sub category, image url, gender
            parameters = ["AA000", 0, "TRIANGLE", "western_wear",
                          "Everyday Casual", "Top", "green", "Cape", "url", "women"]
            try:
                parameters[0] = ximilars_single_response['user_id']
                parameters[1] = ximilars_single_response['skin_tone']
                parameters[2] = ximilars_single_response['body_shape'].upper()
                parameters[3] = ximilars_single_response['genere']
                parameters[4] = ximilars_single_response['occasions']
                print(parameters[4])
                if len(ximilars_single_response['apparels'][0]['category']) != 0:
                    for ind, category in enumerate(ximilars_single_response['apparels'][0]['category']):
                        if category != "Clothing/Dresses":
                            parameters[5] = ximilars_single_response['apparels'][0]['category'][ind]
                            break
                if len(ximilars_single_response['apparels'][0]['color']) != 0:
                    parameters[6] = ximilars_single_response['apparels'][0]['color'][0]
                parameters[7] = ximilars_single_response['apparels'][0]['subcategory'][0]
                parameters[8] = ximilars_single_response['url']
                parameters[9] = ximilars_single_response['gender']
            except Exception as e:
                print(e)

            # if parameters[5] == "Clothing/Upper":
            #     parameters[5] = "Top"
            # else:
            #     parameters[5] = "Bottom"

            predictions = []

            if parameters[9] == "women":
                if parameters[3] == "ethnic_wear":
                    N = women_east.ethnic_N
                    M = women_east.ethnic_M
                    df = pd.read_csv("./ximilar_women_ethnic_outfit_data.csv")
                    color_df = pd.read_csv("./ximilar_women_ethnicwear_color.csv")
                else:
                    if parameters[7] == "jeans":
                        parameters[7] = f"jeans:{ximilars_single_response['apparels'][0]['fit'][0]}"
                    N = women_west.western_N
                    M = women_west.western_M
                    df = pd.read_csv("./ximilar_women_westernwear_outfit_data.csv")
                    color_df = pd.read_csv("./ximilar_women_westernwear_color.csv")

                if parameters[2] == "TRIANGLE":
                    predictions = await find(women_west.TRIANGLE, parameters, df, color_df, N, M)
                elif parameters[2] == "INVERTED_TRIANGLE":
                    predictions = await find(women_west.INVERTED_TRIANGLE, parameters, df, color_df, N, M)
                elif parameters[2] == "ROUNDED":
                    predictions = await find(women_west.ROUNDED, parameters, df, color_df, N, M)
                elif parameters[2] == "HOURGLASS":
                    predictions = await find(women_west.HOURGLASS, parameters, df, color_df, N, M)
                elif parameters[2] == "RECTANGLE":
                    predictions = await find(women_west.RECTANGLE, parameters, df, color_df, N, M)
            else:
                if parameters[3] == "ethnic_wear":
                    N = men_east.N
                    M = men_east.M
                    df = pd.read_csv("./ximilar_men_ethnicwear_outfit_data.csv")
                    color_df = pd.read_csv("./ximilar_men_ethnicwear_color.csv")
                else:
                    if parameters[7] == "jeans" or parameters[7] == 'formal trousers':
                        parameters[7] = f"{parameters[7]}:{ximilars_single_response['apparels'][0]['fit'][0]}"

                    N = men_west.N
                    M = men_west.M
                    df = pd.read_csv("./ximilar_men_westernwear_outfit_data.csv")
                    color_df = pd.read_csv("./ximilar_men_westernwear_color.csv")

                if parameters[2] == "TRIANGLE":
                    predictions = await find(men_west.TRIANGLE, parameters, df, color_df, N, M)
                elif parameters[2] == "INVERTED_TRIANGLE":
                    predictions = await find(men_west.INVERTED_TRIANGLE, parameters, df, color_df, N, M)
                elif parameters[2] == "TRAPEZOID":
                    predictions = await find(men_west.TRAPEZOID, parameters, df, color_df, N, M)
                elif parameters[2] == "OVAL":
                    predictions = await find(men_west.OVAL, parameters, df, color_df, N, M)
                elif parameters[2] == "RECTANGLE":
                    predictions = await find(men_west.RECTANGLE, parameters, df, color_df, N, M)

            # logging empty recommendation
            if not predictions:
                with open("empty_response.txt", "a") as f:
                    f.write(str(parameters))
                    f.write("\n")

            # logging recommendation in csv format to easily upload in excel
            with open("output_ximilar.csv", "a") as f:
                for i in predictions:
                    f.write("\n")
                    for j in parameters:
                        f.write(str(j))
                        f.write(", ")
                    if parameters[5] == "Top":
                        f.write("Bottom, ")
                    else:
                        f.write("Top, ")
                    f.write(str(i[1]))
                    f.write(", ")
                    f.write(str(i[0]))
                    f.write(", ")
                    f.write(str(i[2]))
                    f.write(", ")
                    f.write("=IMAGE(\"{}\")".format(str(i[2])))
            print(predictions)

            # publishing results to subject in json format with utf-8 encoding
            output = bytes(str(json.dumps(predictions)), 'utf-8')
            ack = await js.publish("user.id.apparel.new_recommendation", output)
            print(ack)

        except Exception as e:
            print("ERROR")
            print(e)

    # subscribing to receive data
    await js.subscribe("user.id.apparel.feature_women", cb=cb)
    return


if __name__ == "__main__":
    loop = asyncio.get_event_loop()
    loop.run_until_complete(main())
    loop.run_forever()
