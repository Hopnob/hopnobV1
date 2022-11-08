TOP_WEAR = ["denim shirt",
            "hoodies",
            "polo-shirts",
            "shirts",
            "sweaters",
            "sweatshirts",
            "t-shirts",
            "tank tops"]


BOTTOM_WEAR = ["beach pants",
               "cargo",
               "casual shorts",
               "casual trousers",
               "leather trousers",
               "sportswear leggings",
               "sportswear shorts",
               "suit trousers",
               "sweat pants",
               "jeans:flared",
               "jeans:harem",
               "jeans:skinny",
               "jeans:slim",
               "jeans:straight",
               "jeans:wide leg",
               "culottes",
               "denim shorts",
               "formal trousers:slim",
               "formal trousers:straight", ]

N = len(TOP_WEAR)
M = len(BOTTOM_WEAR)

TRIANGLE = {
    "TOP_WEAR": {3: 8, 4: 7, 6: 6, 0: 5, 1: 4, 5: 3, 7: 2, 2: 1},
    "BOTTOM_WEAR": {14: 19,
                    3: 18,
                    13: 17,
                    9: 16,
                    8: 15,
                    1: 14,
                    0: 13,
                    7: 12,
                    18: 11,
                    2: 10,
                    5: 9,
                    6: 8,
                    15: 7,
                    16: 6,
                    4: 5,
                    10: 4},
}

INVERTED_TRIANGLE = {
    "TOP_WEAR": {0: 8, 1: 7, 5: 6, 3: 5, 4: 4, 6: 3, 2: 2, 7: 1},
    "BOTTOM_WEAR": {13: 19,
                    12: 18,
                    9: 17,
                    14: 16,
                    3: 15,
                    17: 14,
                    7: 13,
                    8: 12,
                    0: 11,
                    4: 10,
                    18: 9,
                    1: 8,
                    2: 7,
                    16: 6,
                    5: 5,
                    6: 4,
                    11: 3,
                    10: 2},
}


TRAPEZOID = {
    "TOP_WEAR": {6: 8, 7: 7, 1: 6, 5: 5, 3: 4, 4: 3, 2: 2, 0: 1},
    "BOTTOM_WEAR": {13: 19,
                    14: 18,
                    12: 17,
                    3: 16,
                    1: 15,
                    7: 14,
                    17: 13,
                    2: 12,
                    0: 11,
                    16: 10,
                    18: 9,
                    4: 8,
                    8: 7,
                    5: 6,
                    6: 5,
                    11: 4,
                    9: 3,
                    10: 2},
}

OVAL = {
    "TOP_WEAR": {3: 8, 6: 7, 1: 6, 5: 5, 4: 4, 2: 3},
    "BOTTOM_WEAR": {13: 19,
                    14: 18,
                    8: 17,
                    0: 16,
                    3: 15,
                    9: 14,
                    1: 13,
                    2: 9,
                    7: 11,
                    18: 10,
                    5: 8,
                    6: 7},
}

RECTANGLE = {
    "TOP_WEAR": {1: 8, 5: 7, 6: 6, 4: 5, 0: 4, 3: 3, 7: 2, 2: 1},
    "BOTTOM_WEAR": {13: 19,
                    12: 18,
                    3: 17,
                    1: 16,
                    14: 15,
                    7: 14,
                    17: 13,
                    2: 12,
                    0: 11,
                    16: 10,
                    18: 9,
                    4: 8,
                    8: 7,
                    5: 6,
                    6: 5,
                    11: 4,
                    9: 3}
}


occasions = ["Keep It Casual", "Just Brunchin\'", "Work", "Date Night", "Party"]

PREFERENCS = {
    "AA000": {
        "Color": ["Black", "White", "Red", "Blue", "Green", "Yellow"],
        "Top": [2, 3, 1, 6],
        "Bottom": [7, 6, 3, 18],
        "Combination": [[0, 3], [1, 2], [2, 1], [3, 0]],
    },
    "VA109": {
        "Color": ["Black", "White", "Red", "Blue", "Green", "Yellow", "Pink"],
        "Top": [21, 3, 7, 9],
        "Bottom": [27, 6, 3, 18],
        "Combination": [[0, 3], [1, 2], [2, 1], [3, 0]],
    },
}
