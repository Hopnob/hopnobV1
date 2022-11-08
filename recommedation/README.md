## Intial Steps
- Downloading the necessary python packages
```shell
pip install -r requirements.txt
```

## Overview
- Currently, the recommendation system works only for western wear of men and women.
- It makes prediction based on the .py file containing the ranking of top wear and bottom wear. Then this is filtered on the basis of occasion.
- Then based on top wear and bottom wear selected colors are ranked which are further filtered based on skin color.
- In skin tone:
  - 0 = #f7ead0
  - 1 = #d7bd96
  - 2 = #a07e56
  - 3 =  #604134


## Input Format
- Input to recommedation script comes from the publisher in the format:
```[user_id, skin_tone, body_shape, genre, occasion, category, color, sub category, image url, gender]```
- gender can be either ```men``` or ```women```.
- range of other table go as per the respective *matching_data.py

| Attribute    | Data Type |
|--------------|-----------|
| user_id      | str       |
| skin_tone    | int       |
| body_shape   | str       |
| genre        | str       |
| occasion     | str       |
| category     | str       |
| color        | str       |
| sub category | str       |
| image url    | str       |
| gender       | str       | 

## Wardrobe Scheme
```py
wardrobe = {
    <user_id>:{
        <category>:{
            <sub category>:{
                <color>:[url'S' of images in wardrobe os corresponding user having the mentioned category, sub category, and color],
            }
        },
    },
}
```

- For testing purpose ```user_456``` stands for a female user, ```user_men``` stands for a male user.

## General
- ```match.py``` is for all-purpose recommendation. 
  - ```user.id.apparel.feature_new``` is subscriber for men's images in general
  - ```user.id.apparel.feature_women``` is subscriber for women's images in general
- ```whatsapp.py``` is for whatsapp recommendation thus has different subscriber and publisher.