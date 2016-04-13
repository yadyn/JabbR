var Emoji = {};
var EmojiIcons;

(function () {
    "use strict";
    
    var validEmoji = { "+1": true, "-1": true, "0": true, "1": true, "100": true, "109": true, "1234": true, "2": true, "3": true, "4": true, "5": true, "6": true, "7": true, "8": true, "8ball": true, "9": true, "a": true, "ab": true, "abc": true, "abcd": true, "accept": true, "aerial_tramway": true, "airplane": true, "alarm_clock": true, "alien": true, "ambulance": true, "anchor": true, "angel": true, "anger": true, "angry": true, "anguished": true, "ant": true, "apple": true, "aquarius": true, "aries": true, "arrows_clockwise": true, "arrows_counterclockwise": true, "arrow_backward": true, "arrow_double_down": true, "arrow_double_up": true, "arrow_down": true, "arrow_down_small": true, "arrow_forward": true, "arrow_heading_down": true, "arrow_heading_up": true, "arrow_left": true, "arrow_lower_left": true, "arrow_lower_right": true, "arrow_right": true, "arrow_right_hook": true, "arrow_up": true, "arrow_upper_left": true, "arrow_upper_right": true, "arrow_up_down": true, "arrow_up_small": true, "art": true, "articulated_lorry": true, "astonished": true, "atm": true, "b": true, "baby": true, "baby_bottle": true, "baby_chick": true, "baby_symbol": true, "back": true, "baggage_claim": true, "balloon": true, "ballot_box_with_check": true, "bamboo": true, "banana": true, "bangbang": true, "bank": true, "barber": true, "bar_chart": true, "baseball": true, "basketball": true, "bath": true, "bathtub": true, "battery": true, "bear": true, "bee": true, "beer": true, "beers": true, "beetle": true, "beginner": true, "bell": true, "bento": true, "bicyclist": true, "bike": true, "bikini": true, "bird": true, "birthday": true, "black_circle": true, "black_joker": true, "black_medium_small_square": true, "black_medium_square": true, "black_nib": true, "black_small_square": true, "black_square": true, "black_square_button": true, "blossom": true, "blowfish": true, "blue_book": true, "blue_car": true, "blue_heart": true, "blush": true, "boar": true, "boat": true, "bomb": true, "book": true, "bookmark": true, "bookmark_tabs": true, "books": true, "boom": true, "boot": true, "bouquet": true, "bow": true, "bowling": true, "bowtie": true, "boy": true, "bread": true, "bride_with_veil": true, "bridge_at_night": true, "briefcase": true, "broken_heart": true, "bug": true, "bulb": true, "bullettrain_front": true, "bullettrain_side": true, "bus": true, "busstop": true, "busts_in_silhouette": true, "bust_in_silhouette": true, "cactus": true, "cake": true, "calendar": true, "calling": true, "camel": true, "camera": true, "cancer": true, "candy": true, "capital_abcd": true, "capricorn": true, "car": true, "card_index": true, "carousel_horse": true, "cat": true, "cat2": true, "cd": true, "chart": true, "chart_with_downwards_trend": true, "chart_with_upwards_trend": true, "checkered_flag": true, "cherries": true, "cherry_blossom": true, "chestnut": true, "chicken": true, "children_crossing": true, "chocolate_bar": true, "christmas_tree": true, "church": true, "cinema": true, "circus_tent": true, "city_sunrise": true, "city_sunset": true, "cl": true, "clap": true, "clapper": true, "clipboard": true, "clock1": true, "clock10": true, "clock1030": true, "clock11": true, "clock1130": true, "clock12": true, "clock1230": true, "clock130": true, "clock2": true, "clock230": true, "clock3": true, "clock330": true, "clock4": true, "clock430": true, "clock5": true, "clock530": true, "clock6": true, "clock630": true, "clock7": true, "clock730": true, "clock8": true, "clock830": true, "clock9": true, "clock930": true, "closed_book": true, "closed_lock_with_key": true, "closed_umbrella": true, "cloud": true, "clubs": true, "cn": true, "cocktail": true, "coffee": true, "cold_sweat": true, "collision": true, "computer": true, "confetti_ball": true, "confounded": true, "confused": true, "congratulations": true, "construction": true, "construction_worker": true, "convenience_store": true, "cookie": true, "cool": true, "cop": true, "copyright": true, "corn": true, "couple": true, "couplekiss": true, "couple_with_heart": true, "cow": true, "cow2": true, "credit_card": true, "crocodile": true, "crossed_flags": true, "crown": true, "cry": true, "crying_cat_face": true, "crystal_ball": true, "cupid": true, "curly_loop": true, "currency_exchange": true, "curry": true, "custard": true, "customs": true, "cyclone": true, "dancer": true, "dancers": true, "dango": true, "dart": true, "dash": true, "date": true, "de": true, "deciduous_tree": true, "department_store": true, "diamonds": true, "diamond_shape_with_a_dot_inside": true, "disappointed": true, "disappointed_relieved": true, "dizzy": true, "dizzy_face": true, "dog": true, "dog2": true, "dollar": true, "dolls": true, "dolphin": true, "donut": true, "door": true, "doughnut": true, "do_not_litter": true, "dragon": true, "dragon_face": true, "dress": true, "dromedary_camel": true, "droplet": true, "dvd": true, "e-mail": true, "ear": true, "earth_africa": true, "earth_americas": true, "earth_asia": true, "ear_of_rice": true, "egg": true, "eggplant": true, "egplant": true, "eight": true, "eight_pointed_black_star": true, "eight_spoked_asterisk": true, "electric_plug": true, "elephant": true, "email": true, "end": true, "envelope": true, "es": true, "euro": true, "european_castle": true, "european_post_office": true, "evergreen_tree": true, "exclamation": true, "expressionless": true, "eyeglasses": true, "eyes": true, "facepunch": true, "factory": true, "fallen_leaf": true, "family": true, "fast_forward": true, "fax": true, "fearful": true, "feelsgood": true, "feet": true, "ferris_wheel": true, "file_folder": true, "finnadie": true, "fire": true, "fireworks": true, "fire_engine": true, "first_quarter_moon": true, "first_quarter_moon_with_face": true, "fish": true, "fishing_pole_and_fish": true, "fish_cake": true, "fist": true, "five": true, "flags": true, "flashlight": true, "floppy_disk": true, "flower_playing_cards": true, "flushed": true, "foggy": true, "football": true, "fork_and_knife": true, "fountain": true, "four": true, "four_leaf_clover": true, "fr": true, "free": true, "fried_shrimp": true, "fries": true, "frog": true, "frowning": true, "fu": true, "fuelpump": true, "full_moon": true, "full_moon_with_face": true, "game_die": true, "gb": true, "gem": true, "gemini": true, "ghost": true, "gift": true, "gift_heart": true, "girl": true, "globe_with_meridians": true, "goat": true, "goberserk": true, "godmode": true, "golf": true, "grapes": true, "green_apple": true, "green_book": true, "green_heart": true, "grey_exclamation": true, "grey_question": true, "grimacing": true, "grin": true, "grinning": true, "guardsman": true, "guitar": true, "gun": true, "haircut": true, "hamburger": true, "hammer": true, "hamster": true, "hand": true, "handbag": true, "hankey": true, "hash": true, "hatched_chick": true, "hatching_chick": true, "headphones": true, "heart": true, "heartbeat": true, "heartpulse": true, "hearts": true, "heart_decoration": true, "heart_eyes": true, "heart_eyes_cat": true, "hear_no_evil": true, "heavy_check_mark": true, "heavy_division_sign": true, "heavy_dollar_sign": true, "heavy_exclamation_mark": true, "heavy_minus_sign": true, "heavy_multiplication_x": true, "heavy_plus_sign": true, "helicopter": true, "herb": true, "hibiscus": true, "high_brightness": true, "high_heel": true, "hocho": true, "honeybee": true, "honey_pot": true, "horse": true, "horse_racing": true, "hospital": true, "hotel": true, "hotsprings": true, "hourglass": true, "hourglass_flowing_sand": true, "house": true, "house_with_garden": true, "hurtrealbad": true, "hushed": true, "icecream": true, "ice_cream": true, "id": true, "ideograph_advantage": true, "imp": true, "inbox_tray": true, "incoming_envelope": true, "information_desk_person": true, "information_source": true, "innocent": true, "interrobang": true, "iphone": true, "it": true, "izakaya_lantern": true, "jack_o_lantern": true, "japan": true, "japanese_castle": true, "japanese_goblin": true, "japanese_ogre": true, "jeans": true, "joy": true, "joy_cat": true, "jp": true, "key": true, "keycap_ten": true, "kimono": true, "kiss": true, "kissing": true, "kissing_cat": true, "kissing_closed_eyes": true, "kissing_face": true, "kissing_heart": true, "kissing_smiling_eyes": true, "koala": true, "koko": true, "kr": true, "large_blue_circle": true, "large_blue_diamond": true, "large_orange_diamond": true, "last_quarter_moon": true, "last_quarter_moon_with_face": true, "laughing": true, "leaves": true, "ledger": true, "leftwards_arrow_with_hook": true, "left_luggage": true, "left_right_arrow": true, "lemon": true, "leo": true, "leopard": true, "libra": true, "light_rail": true, "link": true, "lips": true, "lipstick": true, "lock": true, "lock_with_ink_pen": true, "lollipop": true, "loop": true, "loudspeaker": true, "love_hotel": true, "love_letter": true, "low_brightness": true, "m": true, "mag": true, "mag_right": true, "mahjong": true, "mailbox": true, "mailbox_closed": true, "mailbox_with_mail": true, "mailbox_with_no_mail": true, "man": true, "mans_shoe": true, "man_with_gua_pi_mao": true, "man_with_turban": true, "maple_leaf": true, "mask": true, "massage": true, "meat_on_bone": true, "mega": true, "melon": true, "memo": true, "mens": true, "metal": true, "metro": true, "microphone": true, "microscope": true, "milky_way": true, "minibus": true, "minidisc": true, "mobile_phone_off": true, "moneybag": true, "money_with_wings": true, "monkey": true, "monkey_face": true, "monorail": true, "moon": true, "mortar_board": true, "mountain_bicyclist": true, "mountain_cableway": true, "mountain_railway": true, "mount_fuji": true, "mouse": true, "mouse2": true, "movie_camera": true, "moyai": true, "muscle": true, "mushroom": true, "musical_keyboard": true, "musical_note": true, "musical_score": true, "mute": true, "nail_care": true, "name_badge": true, "neckbeard": true, "necktie": true, "negative_squared_cross_mark": true, "neutral_face": true, "new": true, "newspaper": true, "new_moon": true, "new_moon_with_face": true, "ng": true, "nine": true, "non-potable_water": true, "nose": true, "notebook": true, "notebook_with_decorative_cover": true, "notes": true, "no_bell": true, "no_bicycles": true, "no_entry": true, "no_entry_sign": true, "no_good": true, "no_mobile_phones": true, "no_mouth": true, "no_pedestrians": true, "no_smoking": true, "nut_and_bolt": true, "o": true, "o2": true, "ocean": true, "octocat": true, "octopus": true, "oden": true, "office": true, "ok": true, "ok_hand": true, "ok_woman": true, "older_man": true, "older_woman": true, "on": true, "oncoming_automobile": true, "oncoming_bus": true, "oncoming_police_car": true, "oncoming_taxi": true, "one": true, "open_file_folder": true, "open_hands": true, "open_mouth": true, "ophiuchus": true, "orange_book": true, "outbox_tray": true, "ox": true, "package": true, "pager": true, "page_facing_up": true, "page_with_curl": true, "palm_tree": true, "panda_face": true, "paperclip": true, "parking": true, "partly_sunny": true, "part_alternation_mark": true, "passport_control": true, "paw_prints": true, "peach": true, "pear": true, "pencil": true, "pencil2": true, "penguin": true, "pensive": true, "performing_arts": true, "persevere": true, "person_frowning": true, "person_with_blond_hair": true, "person_with_pouting_face": true, "phone": true, "pig": true, "pig2": true, "pig_nose": true, "pill": true, "pineapple": true, "pisces": true, "pizza": true, "plus1": true, "point_down": true, "point_left": true, "point_right": true, "point_up": true, "point_up_2": true, "police_car": true, "poodle": true, "poop": true, "postal_horn": true, "postbox": true, "post_office": true, "potable_water": true, "pouch": true, "poultry_leg": true, "pound": true, "pouting_cat": true, "pray": true, "princess": true, "punch": true, "purple_heart": true, "purse": true, "pushpin": true, "put_litter_in_its_place": true, "question": true, "rabbit": true, "rabbit2": true, "racehorse": true, "radio": true, "radio_button": true, "rage": true, "rage1": true, "rage2": true, "rage3": true, "rage4": true, "railway_car": true, "rainbow": true, "raised_hand": true, "raised_hands": true, "raising_hand": true, "ram": true, "ramen": true, "rat": true, "recycle": true, "red_car": true, "red_circle": true, "registered": true, "relaxed": true, "relieved": true, "repeat": true, "repeat_one": true, "restroom": true, "revolving_hearts": true, "rewind": true, "ribbon": true, "rice": true, "rice_ball": true, "rice_cracker": true, "rice_scene": true, "ring": true, "rocket": true, "roller_coaster": true, "rooster": true, "rose": true, "rotating_light": true, "round_pushpin": true, "rowboat": true, "ru": true, "rugby_football": true, "runner": true, "running": true, "running_shirt_with_sash": true, "sa": true, "sagittarius": true, "sailboat": true, "sake": true, "sandal": true, "santa": true, "satellite": true, "satisfied": true, "saxophone": true, "school": true, "school_satchel": true, "scissors": true, "scorpius": true, "scream": true, "scream_cat": true, "scroll": true, "seat": true, "secret": true, "seedling": true, "see_no_evil": true, "seven": true, "shaved_ice": true, "sheep": true, "shell": true, "ship": true, "shipit": true, "shirt": true, "shit": true, "shoe": true, "shower": true, "signal_strength": true, "six": true, "six_pointed_star": true, "ski": true, "skull": true, "sleeping": true, "sleepy": true, "slot_machine": true, "small_blue_diamond": true, "small_orange_diamond": true, "small_red_triangle": true, "small_red_triangle_down": true, "smile": true, "smiley": true, "smiley_cat": true, "smile_cat": true, "smiling_imp": true, "smirk": true, "smirk_cat": true, "smoking": true, "snail": true, "snake": true, "snowboarder": true, "snowflake": true, "snowman": true, "sob": true, "soccer": true, "soon": true, "sos": true, "sound": true, "space_invader": true, "spades": true, "spaghetti": true, "sparkle": true, "sparkler": true, "sparkles": true, "sparkling_heart": true, "speaker": true, "speak_no_evil": true, "speech_balloon": true, "speedboat": true, "squirrel": true, "star": true, "star2": true, "stars": true, "station": true, "statue_of_liberty": true, "steam_locomotive": true, "stew": true, "straight_ruler": true, "strawberry": true, "stuck_out_tongue": true, "stuck_out_tongue_closed_eyes": true, "stuck_out_tongue_winking_eye": true, "sunflower": true, "sunglasses": true, "sunny": true, "sunrise": true, "sunrise_over_mountains": true, "sun_with_face": true, "surfer": true, "sushi": true, "suspect": true, "suspension_railway": true, "sweat": true, "sweat_drops": true, "sweat_smile": true, "sweet_potato": true, "swimmer": true, "symbols": true, "syringe": true, "tada": true, "tanabata_tree": true, "tangerine": true, "taurus": true, "taxi": true, "tea": true, "telephone": true, "telephone_receiver": true, "telescope": true, "tennis": true, "tent": true, "thought_balloon": true, "three": true, "thumbsdown": true, "thumbsup": true, "ticket": true, "tiger": true, "tiger2": true, "tired_face": true, "tm": true, "toilet": true, "tokyo_tower": true, "tomato": true, "tongue": true, "top": true, "tophat": true, "tractor": true, "traffic_light": true, "train": true, "train2": true, "tram": true, "triangular_flag_on_post": true, "triangular_ruler": true, "trident": true, "triumph": true, "trolleybus": true, "trollface": true, "trophy": true, "tropical_drink": true, "tropical_fish": true, "truck": true, "trumpet": true, "tshirt": true, "tulip": true, "turtle": true, "tv": true, "twisted_rightwards_arrows": true, "two": true, "two_hearts": true, "two_men_holding_hands": true, "two_women_holding_hands": true, "u5272": true, "u5408": true, "u55b6": true, "u6307": true, "u6708": true, "u6709": true, "u6e80": true, "u7121": true, "u7533": true, "u7981": true, "u7a7a": true, "uk": true, "umbrella": true, "unamused": true, "underage": true, "unlock": true, "up": true, "us": true, "v": true, "vertical_traffic_light": true, "vhs": true, "vibration_mode": true, "video_camera": true, "video_game": true, "violin": true, "virgo": true, "volcano": true, "vs": true, "walking": true, "waning_crescent_moon": true, "waning_gibbous_moon": true, "warning": true, "watch": true, "watermelon": true, "water_buffalo": true, "wave": true, "wavy_dash": true, "waxing_crescent_moon": true, "waxing_gibbous_moon": true, "wc": true, "weary": true, "wedding": true, "whale": true, "whale2": true, "wheelchair": true, "white_check_mark": true, "white_circle": true, "white_flower": true, "white_large_square": true, "white_medium_small_square": true, "white_medium_square": true, "white_small_square": true, "white_square": true, "white_square_button": true, "wind_chime": true, "wine_glass": true, "wink": true, "wink2": true, "wolf": true, "woman": true, "womans_clothes": true, "womans_hat": true, "womens": true, "worried": true, "wrench": true, "x": true, "yellow_heart": true, "yen": true, "yum": true, "zap": true, "zero": true, "zzz": true };
    var validv4c = { "ducktart": "dooktart.png", "ready": "ready.gif", "birry": "ztop.gif", "vdog": "cat.gif", "gaben": "zgabe.gif", "3s": "seal.png", "burd": "birdy.gif", "snoop": "snoop.gif", "jimmies": "jimmy.gif", "sanic": "sonicx.png", "burgirl": "ss.gif", "dilbert": "dilbert.gif", "deepdarkfantasy": "fantasy.gif", "bioware": "biogurl.gif", "shazbot": "33.png", "bestkorea": "kim.gif", "hitoame": "shower.gif", "duane": "duane.gif", "keke": "keke6.png", "uncle": "VffoS.jpg", "reshiram": "ee.gif", "push": "push.gif", "autism": "a.gif", "juggalo": "ll.gif", "stanza": "heh.png", "bestgames": "pstriple.png", "gamestop": "spekettle.gif", "teto": "oz.gif", "fothegrove": "grove.gif", "aliens": "aliens.gif", "go": "zgo.gif", "pomf": "pomf.png", "kreayshawn": "kray.png", "bodywash": "bodywash.png", "goblinu": "zgobz.jpg", "feel": "feel.png", "valien": "ssd.gif", "2spooky4me": "spooky.gif", "gooby": "o2XNE.jpg", "dosh": "dsdasd.png", "8bitdose": "wee2.gif", "costanza": "heh.png", "america": "america.gif", "babyface": "babyface.gif", "babyguitar": "babyguitar.gif", "bearfight": "bearfight.gif", "bogs": "bogs.png", "boom": "boom.png", "brobill": "brobill.gif", "chen": "chen.png", "dante": "dante.png", "data": "data.gif", "datass": "datass.gif", "dewbunker": "dewbunker.gif", "dewritos": "dewritos.jpg", "doingitwell": "doingitwell.png", "doot": "doot.gif", "dreck": "dreck.png", "el": "el.gif", "facepalm": "facepalm.png", "feelsgud": "feelsgud.png", "fichdich": "fichdich.png", "fresh": "fresh.gif", "gigaduane": "gigaduane.gif", "happening": "happening.gif", "haveaseat": "haveaseat.png", "heero": "heero.png", "idontwantthat": "idontwantthat.png", "jaffa": "jaffa.png", "jew": "jew.gif", "jii": "jii.png", "kek": "kek.png", "kfc": "kfc.gif", "kitty": "kitty.gif", "loading": "loading.gif", "manboss": "manboss.gif", "meeku": "meeku.png", "mfw": "mfw.png", "miku": "miku.gif", "miku2": "miku2.gif", "morefresh": "morefresh.gif", "mysides": "mysides.png", "nice": "nice.png", "nofun": "nofun.png", "nogaems": "nogaems.gif", "nope": "nope.gif", "obama": "obama.gif", "ohlawd": "ohlawd.png", "oo": "oo.gif", "osama": "osama.png", "otter": "otter.gif", "pekaface": "pekaface.png", "pikminu": "pikminu.png", "plzgo": "plzgo.png", "praise": "praise.png", "pumpkindance": "pumpkindance.gif", "raging": "raging.png", "rattle": "rattle.gif", "ravi": "ravi.gif", "raw": "raw.png", "remove": "remove.gif", "rip": "rip.png", "satan": "satan.gif", "science": "science.gif", "skeleton": "skeleton.gif", "slam": "slam.png", "slav": "slav.gif", "spherical": "spherical.png", "spurdance": "spurdance.gif", "spurdo": "spurdo.png", "stepfather": "stepfather.png", "stop": "stop.png", "swerve": "swerve.png", "tails": "tails.png", "thed": "thed.png", "turkey": "turkey.png", "twerk": "twerk.gif", "tyrone": "tyrone.png", "umirin": "umirin.jpg", "usa": "usa.gif", "wabbit": "wabbit.png", "whatastory": "whatastory.png", "why": "why.png", "wow": "wow.png", "yotsubano": "yotsubano.png" };
    var validPony = { "ajlie": "a", "priceless": "a", "flutterjerk": "a", "flutterroll": "a", "twipride": "a", "celestiamad": "a", "twicrazy": "a", "spikemeh": "a", "lunateehee": "a", "lunawait": "a", "paperbagderpy": "a", "abmeh": "a", "ajhappy": "a", "pinkiefear": "a", "twibeam": "a", "scootaderp": "a", "raritydaww": "a", "scootacheer": "a", "swagintosh": "a", "pinkieawe": "a", "ajsup": "a", "flutterwhoa": "a", "rdcry": "a", "silverspoon": "a", "ohcomeon": "a", "ppcute": "a", "abbored": "a", "rarityreally": "a", "raritypaper": "a", "sbbook": "a", "scootaplease": "a", "applegasp": "a", "twiright": "a", "celestiawut": "a", "grannysmith": "a", "rarishock": "a", "shiningarmor": "a", "chrysalis": "a", "cadence": "a", "applederp": "a", "flutterfear": "b", "ppboring": "b", "rarityyell": "b", "fluttershy": "b", "ajcower": "b", "ajsly": "b", "eeyup": "b", "rdsmile": "b", "fluttersrs": "b", "raritydress": "b", "takealetter": "b", "rdwut": "b", "ppshrug": "b", "spikenervous": "b", "noooo": "b", "dj": "b", "fluttershh": "b", "flutteryay": "b", "squintyjack": "b", "spikepushy": "b", "ajugh": "b", "raritywut": "b", "dumbfabric": "b", "raritywhy": "b", "trixiesmug": "b", "flutterwink": "b", "rarityannoyed": "b", "soawesome": "b", "ajwut": "b", "twisquint": "b", "raritywhine": "b", "rdcool": "b", "abwut": "b", "manspike": "b", "cockatrice": "b", "facehoof": "b", "rarityjudge": "b", "rarityprimp": "b", "twirage": "b", "ppseesyou": "b", "rdsitting": "c", "rdhappy": "c", "rdannoyed": "c", "trixiesad": "c", "twismug": "c", "twismile": "c", "twistare": "c", "changeling": "c", "ohhi": "c", "party": "c", "hahaha": "c", "rdscared": "c", "flutterblush": "c", "gross": "c", "derpyhappy": "c", "twidaww": "c", "ajfrown": "c", "hmmm": "c", "pinkiejoy": "c", "whattheflut": "c", "raritysad": "c", "fabulous": "c", "derp": "c", "cadencesmile": "c", "louder": "c", "lunasad": "c", "derpyshock": "c", "shiningpride": "c", "pinkamina": "c", "loveme": "c", "lunagasp": "c", "fluttercry": "c", "scootaloo": "c", "celestia": "c", "angelglare": "c", "sneakybelle": "c", "allmybits": "c", "zecora": "c", "photofinish": "c", "ppreally": "c", "stonie": "d", "pinkiehigh": "d", "rbtrippin": "d", "spikehigh": "d", "pervertedaj": "d", "twihigh": "d", "fluttersqueak": "d", "happyrarity": "d", "bakedrarity": "d", "rbhigh": "d", "ajhuh": "d", "flutterfree": "d", "celestreeia": "d", "awwshit": "d", "treepony": "d", "rbomg": "d", "mobboss": "d", "opalescence": "d", "sneakiepinkie": "d", "dirigible": "d", "trixiehigh": "d", "twiderp": "d", "whoovesing": "d", "twiheh": "d", "flutterhigh": "d", "derpyhigh": "d", "flutteryeah": "d", "spikegimmie": "d", "sirderp": "d", "twiblah": "d", "fluttersmoke": "d", "braeburnhuh": "d", "bakedspike": "d", "lunasly": "d", "derpinkie": "d", "lunasilly": "d", "rbreally": "d", "rarityhuh": "d", "bluebowl": "d", "fillytgap": "e", "rdhuh": "e", "snails": "e", "twisad": "e", "lyra": "e", "bonbon": "e", "spitfire": "e", "lunamad": "e", "cutealoo": "e", "happyluna": "e", "sotrue": "e", "discordsad": "e", "wahaha": "e", "sbstare": "e", "berry": "e", "maud": "e", "huhhuh": "e", "absmile": "e", "dealwithit": "e", "pinkiepout": "e", "nmm": "e", "whooves": "e", "rdsalute": "e", "twisecret": "e", "octavia": "e", "colgate": "e", "cheerilee": "e", "sunsetshimmer": "e", "ajbaffle": "e", "abhuh": "e", "lily": "e", "sunsetsneaky": "e", "twiponder": "e", "spikewtf": "e", "awwyeah": "e", "scootablue": "e", "gilda": "e", "discentia": "e", "macintears": "e", "spikehappy": "e", "ppsad": "f", "dt": "f", "sombra": "f", "sbshocked": "f", "guard": "f", "abstern": "f", "apathia": "f", "ajcry": "f", "rarityeww": "f", "flutterkay": "f", "starlightrage": "f", "bulkbiceps": "f", "scootaeww": "f", "discordgrump": "f", "troubleshoes": "f", "rdsnrk": "f", "thcalm": "f", "ooh": "f", "raritytired": "f", "notangry": "f", "ajdoubt": "f", "spikewhoa": "f", "wasntme": "f", "twipbbt": "f", "flimflam": "f", "cocosmile": "f", "skeptiloo": "f", "limestonegrin": "f", "raritygrump": "f", "goodjob": "f", "flutterhay": "f", "sbwtf": "f", "nightmaregrin": "f", "spikeapproves": "f", "flutternice": "f", "ppdont": "f" };

    var validHotglue = { "doge": "1", "fertilemeadors": "1", "game": "1", "henohenomoheji": "1", "lolwut": "1", "moar": "1", "pedobear": "1", "wat": "1", "yaranaika1": "1", "yaranaika2": "1", "derika": "1", "babz": "1", "bson": "1", "shanz": "1", "jamesy": "1", "kimjongwhere": "1", "doobie": "1" };
    var validYukkuri = {
        "marisa": true, "marisakiss": true, "marisalol": true, "marisablank": true, "marisablush": true, "marisasad": true, "marisacry": true, "marisamad": true, "marisaangry": true, "marisahappy": true, "marisacute": true, "marisawhat": true, "marisaannoy": true, "marisanervous": true, "marisashock": true, "marisasmile": true,
        "reimu": true, "reimukiss": true, "reimulol": true, "reimublank": true, "reimublush": true, "reimusad": true, "reimucry": true, "reimumad": true, "reimuangry": true, "reimuhappy": true, "reimucute": true, "reimuwhat": true, "reimuannoy": true, "reimunervous": true, "reimushock": true, "reimusmile": true
    };
    var validAnimu = {
        // r/anime
        "asuka-shouting": "5", "chiyo-uhh": "5", "she-ded": "5", "deko-cry": "5", "gendo-pls": "5", "haruhi-annoyed": "5", "k-on-hug": "5", "lewd": "5", "nanami-hug": "5", "pika-dead": "5", "super-happy": "5", "yui-crying": "5", "durr": "5", "mugi-fish": "5", "objection": "5", "chaika": "4", "chiho-wut": "4", "disapproval-cat": "4", "grrrr": "4", "im-listening": "4", "om-nom": "4", "stare": "4", "u-wat-m8": "4", "what": "4", "wide-face": "4", "ehehehe": "4", "mandom": "4", "pointandlaugh": "3", "smug": "3", "confused": "3", "yunocaine": "3", "konahappy": "3", "konacat": "3", "gununu": "3", "cat1": "3", "somad": "3", "mad": "3", "crying": "3", "cat2": "3", "um": "3", "facepalm2": "2", "wtfika": "2", "kanie-disgust": "2", "nerrr": "2", "nico-heart": "2", "sonico-wink": "2", "sparkle-ika": "2", "suave": "2", "super-blush": "2", "surprised-blush": "2", "shocked": "2", "thumbsup2": "2", "u-dont-say": "2", "ugh-peasants": "2", "uhhh": "2", "yay": "2", "you-bore-me": "2", "osaka": "2", "kukuku": "2", "toohappy": "2", "chitoge-smile": "1", "kininarimasu": "1", "kotori": "1", "kyon-facepalm": "1", "araragi-1": "1", "araragi-2": "1", "blank-stare": "1", "chaika-smile": "1", "chitoge-pissed": "1", "deadpan": "1", "exuberant-shu": "1", "dead-eyed-stare": "1", "gamagori-hnng": "1", "glasses-push": "1", "head-tilt": "1", "jiii": "1", "manly-tears": "1", "not-raining": "1", "ohmygod": "1", "shock": "1", "heart-thumbs-up": "1", "worried": "1", "wow-really": "1",
        "evenhappierdera": "6", "abashedbestia": "6", "akyuusqueel": "6", "amagamiplayfulbite": "6", "arakawascream": "6", "asunanotamused": "6", "bakaa": "6", "barakamonnotcool": "6", "bestiablehh": "6", "bestiacheckyourprivilage": "6", "charlming": "6", "charlpumped": "6", "charlstunned": "6", "chiyomad": "6", "comewithmeifyouwanttobebestgirl": "6", "containrage": "6", "crazyhatgirl": "6", "crazyhatgirlexcited": "6", "disbelief": "6", "dontdometh": "6", "duckhue": "6", "embarassedisla": "6", "eriribathblush": "6", "erirismile": "6", "eririwot": "6", "erunahuh": "6", "etotamadunno": "6", "eyebleed": "6", "flclcatface": "6", "ginkoehh": "6", "gintamacrushed": "6", "gintamadead": "6", "gintamaghost": "6", "gintamaphoneshock": "6", "gintamasunlight": "6", "gintamathispleasesme": "6", "happycharl": "6", "happypoi": "6", "insolentkek": "6", "islaforcedsmile": "6", "izananotthisshitagain": "6", "josephcrying": "6", "katoupout": "6", "katoutilt": "6", "nocomment": "6", "kumikouninterested": "6", "kurousagitears": "6", "kyonfacepalm": "6", "maidshock": "6", "mariawut": "6", "marikalewd": "6", "masaodidnothingwrong": "6", "mekakucitytaunt": "6", "michiruyeahk": "6", "mug2": "6", "nichijouqq": "6", "pissedinaba": "6", "pissedkaiji": "6", "psychoshock": "6", "racoonwot": "6", "reinastunned": "6", "rengehype": "6", "rickastatic": "6", "sayhwatagain": "6", "scaredmio": "6", "scarycharl": "6", "sheerdisgust": "6", "smugflowers": "6", "smugillya": "6", "smuglancer": "6", "smugshinoa": "6", "soumadisdain": "6", "stonedzack": "6", "surprisedandimpressed": "6", "surprisedwot": "6", "takeolightning": "6", "takeowut": "6", "thoughtful": "6", "tougouwotmagic": "6", "traumatiseddog": "6", "trollarcher": "6", "uglycry": "6", "umiface": "6", "utahagottrolled": "6", "vashheadscratch": "6", "wryyy": "6", "yuitriggered": "6", "yuyuyukek": "6", "yuruyuriapprove": "6", "happydera": "6", "holdme": "6", "misakaheh": "6", "ohnoudidnt": "6", "forcedsmile": "6", "startled": "6", "surprisedblush": "6", "teehee": "6", "tiredfate": "6", "chitogheh": "6",
        "badassmugi": "7", "banjoisahellofadrug": "7", "bearhug": "7", "bearwithme": "7", "biribiricat": "7", "bishoujo": "7", "bunnyisla": "7", "csikon": "7", "elsieqq": "7", "eririmad": "7", "haruhiisnotamused": "7", "hinakonom": "7", "hisokaclown": "7", "definitelynotamused": "7", "disgustedmichiru": "7", "hanasakueurgh": "7", "icanteven": "7", "jibrilaww": "7", "jibrilfetish": "7", "jojosafari": "7", "katoupls": "7", "manlyschoolgirls": "7", "massivecontempt": "7", "mechablush": "7", "miiahiss": "7", "miiaembarassed": "7", "miiatears": "7", "misakiteehee": "7", "misakiwink": "7", "nononkek": "7", "nozakishock": "7", "ohgodwhathaveidone": "7", "pissedmiia": "7", "pissedtoge": "7", "saltymichiru": "7", "shocklulushock": "7", "smugpoint": "7", "smugshinobu": "7", "sparklyisla": "7", "SPORTS": "7", "stunnedryou": "7", "takeoeyesparkle": "7", "takeofiredup": "7", "takeoniceubodi": "7", "takeostubtoe": "7", "typicalyuuko": "7", "vampirickirin": "7", "wankoface": "7", "whowouldathunkit": "7", "yamadashock": "7", "yandereyuno": "7", "orly": "7", "cup2": "7", "annoyedkirito": "7", "bestiathumbsup": "7", "flclawe": "7", "crazedlaugh": "7", "cup1": "7", "sunglasses": "7", "eririmadblush": "7", "eriripout": "7", "flclgrit": "7", "gintamashock": "7", "gintamaspillage": "7", "hunchedover": "7", "hypeoverload": "7", "infernocopu": "7", "kaorihappy": "7", "michirutilt": "7", "momjitonguepoke": "7", "niatilt": "7", "nosepick": "7", "selfishbestia": "7", "takeotears": "7", "uwannadie": "7", "yuyuyudisapprove": "7", "mug1": "7", "mug3": "7",
        // r/awwnime
        "nosebleed": "a1", "eep": "a1", "pissed": "a1", "pleased": "a1", "shock2": "a1", "somad2": "a1", "sparkle": "a1", "squee": "a1", "superb": "a1", "tears": "a1", "therethere": "a1", "thumbsup3": "a1", "trollin": "a1", "tsuntsun": "a1", "waa": "a1", "wahahaha": "a1", "waow": "a1", "ika-wink": "a1", "somuchyes": "a1", "uguu": "a1",
        "airen": "a2", "awwyeah2": "a2", "bii": "a2", "blush2": "a2", "butwhat": "a2", "catsmile": "a2", "concentrate": "a2", "contented": "a2", "loli-cry": "a2", "darksad": "a2", "dealwithit2": "a2", "deredere": "a2", "disapproval": "a2", "facepalm3": "a2", "fwaa": "a2", "go-on": "a2", "grrrr2": "a2", "hana": "a2", "happy": "a2", "hnng": "a2", "impossibiru": "a2", "itai": "a2", "just-no": "a2", "laugh": "a2", "megane": "a2",
        "rarr": "a3", "blushing": "a3", "headpat": "a3", "heyyou": "a3", "hug": "a3", "kyaa": "a3", "omnom": "a3", "peek": "a3", "sigh": "a3", "trynottopurr": "a3",
        "sonice": "a4", "upset": "a4", "silence": "a4", "confused-smile": "a4", "doteyes": "a4", "chiyonotamused": "a4", "resolved": "a4", "pout": "a4", "lewd2": "a4", "nepnep": "a4",
        // r/pantsu
        "mmm": "p", "nowai": "p", "lovemyhat": "p", "drool": "p", "blush3": "p", "noooo2": "p", "delight": "p", "sparkle2": "p", "disapproval2": "p",
    };

    var validAlias = {
        "m\\:3\\b": ":marisacute:", "m\\^\\^": ":marisahappy:", "m>o<": ":marisaangry:", "m>O<": ":marisaangry:",
        "m\\:o\\b": ":marisashock:", "m\\:O\\b": ":marisashock:", "m\\^\\^;": ":marisanervous:", "m--;": ":marisaannoy:",
        "m\\:\\?": ":marisawhat:", "m==\\b": ":marisablank:", "mXD\\b": ":marisa3:", "m\\:p\\b": ":marisakiss:",
        "m\\:P\\b": ":marisakiss:", "m\\:\\)": ":marisasmile:", "m>\\:\\(": ":marisamad:", "m\\:c\\b": ":marisacry:",
        "m\\:C\\b": ":marisacry:", "m\\:\\(": ":marisasad:", "m\\/\\/\\/": ":marisablush:",
        
        "r\\:3\\b": ":reimucute:", "r\\^\\^": ":reimuhappy:", "r>o<": ":reimuangry:", "r>O<": ":reimuangry:",
        "r\\:o\\b": ":reimushock:", "r\\:O\\b": ":reimushock:", "r\\^\\^;": ":reimunervous:", "r--;": ":reimuannoy:",
        "r\\:\\?": ":reimuwhat:", "r==\\b": ":reimublank:", "rXD\\b": ":reimulol:", "r\\:p\\b": ":reimukiss:",
        "r\\:P\\b": ":reimukiss:", "r\\:\\)": ":reimusmile:", "r>\\:\\(": ":reimumad:", "r\\:c\\b": ":reimucry:",
        "r\\:C\\b": ":reimucry:", "r\\:\\(": ":reimusad:", "r\\/\\/\\/": ":reimublush:",
        
        "\\:-?\\)": ":smile:", ":-?D\\b": ":grin:", ";-?\\)": ":wink:",
        "\\:-?\\(": ":disappointed:", "\\:'-?\\(": ":cry:", ":-?P\\b": ":tongue:",
        ":-?p\\b": ":tongue:", ":-?O\\b": ":astonished:", ":-?o\\b": ":astonished:", "<3": ":heart:",

        //"bob": ":babz:", "Bob": ":babz:", "babz": ":babz:", "Babz": ":babz:",
        //"sean": ":shanz:", "Sean": ":shanz:", "shanz": ":shanz:", "Shanz": ":shanz:", "shanley": ":shanz:", "Shanley": ":shanz:",
        //"ben": ":fertilemeadors:", "Ben": ":fertilemeadors:", "benjamin": ":fertilemeadors:", "Benjamin": ":fertilemeadors:", "meadors": ":fertilemeadors:", "Meadors": ":fertilemeadors:",
        //"bson": ":bson:", "benson": ":bson:", "Benson": ":bson:", "benneh": ":bson:",
        //"derika": ":derika:", "Derika": ":derika:",
        //"jamesy": ":jamesy:", "Jamesy": ":jamesy:",
    };

    // initialize emote list dialog
    var emotelistTabs = $('<div/>');

    emotelistTabs.append(
        $('<ul/>')
            .append($('<li/>')
                .append($('<a/>').attr('href', '#emotelisttab-1').attr('title', 'pony-a').text('a')))
            .append($('<li/>')
                .append($('<a/>').attr('href', '#emotelisttab-2').attr('title', 'pony-b').text('b')))
            .append($('<li/>')
                .append($('<a/>').attr('href', '#emotelisttab-3').attr('title', 'pony-c').text('c')))
            .append($('<li/>')
                .append($('<a/>').attr('href', '#emotelisttab-4').attr('title', 'pony-d').text('d')))
            .append($('<li/>')
                .append($('<a/>').attr('href', '#emotelisttab-5').attr('title', 'pony-e').text('e')))
            .append($('<li/>')
                .append($('<a/>').attr('href', '#emotelisttab-6').attr('title', 'pony-f').text('f')))
            .append($('<li/>')
                .append($('<a/>').attr('href', '#emotelisttab-7').attr('title', 'hotglue').text('h')))
            .append($('<li/>')
                .append($('<a/>').attr('href', '#emotelisttab-8').attr('title', 'emoji').text('j')))
            .append($('<li/>')
                .append($('<a/>').attr('href', '#emotelisttab-9').attr('title', 'animu').text('m')))
            .append($('<li/>')
                .append($('<a/>').attr('href', '#emotelisttab-10').attr('title', 'animu').text('n')))
            .append($('<li/>')
                .append($('<a/>').attr('href', '#emotelisttab-11').attr('title', 'animu').text('o')))
            .append($('<li/>')
                .append($('<a/>').attr('href', '#emotelisttab-12').attr('title', 'animu').text('p')))
            .append($('<li/>')
                .append($('<a/>').attr('href', '#emotelisttab-13').attr('title', 'v4c').text('v')))
            .append($('<li/>')
                .append($('<a/>').attr('href', '#emotelisttab-14').attr('title', 'yukkuri').text('y'))))

    var colCount = { 'a': 0, 'b': 0, 'c': 0, 'd': 0, 'e': 0, 'f': 0, 'h': 0, 'j': 0, 'm': 0, 'n': 0, 'o': 0, 'p': 0, 'v': 0, 'y': 0 };
    var rows = { 'a': [], 'b': [], 'c': [], 'd': [], 'e': [], 'f': [], 'h': [], 'j': [], 'm': [], 'n': [], 'o': [], 'p': [], 'v': [], 'y': [] };

    for (var key in validPony) {
        var row = '';
        var group = validPony[key];

        colCount[group] = colCount[group] + 1;

        if (colCount[group] == 1)
            row += '<tr>';

        row += '<td class="ponymoticon ponymoticon-' + group + ' ponymoticon-' + key + '" title="' + key + '"></td>';

        if (colCount[group] == 6) {
            row += '</tr>';
            colCount[group] = 0;
        }

        rows[group].push(row);
    }
    for (var key in validHotglue) {
        var row = '';
        var group = 'h';

        colCount[group] = colCount[group] + 1;

        if (colCount[group] == 1)
            row += '<tr>';

        row += '<td class="hotgluemoticon hotgluemoticon-1 hotgluemoticon-' + key + '" title="' + key + '"></td>';

        if (colCount[group] == 6) {
            row += '</tr>';
            colCount[group] = 0;
        }

        rows[group].push(row);
    }
    for (var key in validEmoji) {
        var row = '';
        var group = 'j';

        colCount[group] = colCount[group] + 1;

        if (colCount[group] == 1)
            row += '<tr>';

        var css = key;
        if (css === '+1') {
            css = 'plus1';    // +1 not valid CSS class
        }
        row += '<td class="emoji20 emoji20-' + css + '" title="' + key + '"></td>';

        if (colCount[group] == 20) {
            row += '</tr>';
            colCount[group] = 0;
        }

        rows[group].push(row);
    }
    for (var key in validYukkuri) {
        var row = '';
        var group = 'y';

        colCount[group] = colCount[group] + 1;

        if (colCount[group] == 1)
            row += '<tr>';

        var css = key;

        row += '<td class="yukkuri yukkuri-' + key + '" title="' + key + '"></td>';

        if (colCount[group] == 8) {
            row += '</tr>';
            colCount[group] = 0;
        }

        rows[group].push(row);
    }
    for (var key in validAnimu) {
        var row = '';
        var group = 'm';
        var section = validAnimu[key];

        if (section[0] == 'a' || section[0] == 'p')
            group = 'n';
        else if (section == '6')
            group = 'o';
        else if (section == '7')
            group = 'p';

        colCount[group] = colCount[group] + 1;

        if (colCount[group] == 1)
            row += '<tr>';

        row += '<td class="animu animu-' + section + ' animu-' + key + '" title="' + key + '"></td>';

        if (colCount[group] == 4) {
            row += '</tr>';
            colCount[group] = 0;
        }

        rows[group].push(row);
    }
    for (var key in validv4c) {
        var row = '';
        var group = 'v';

        colCount[group] = colCount[group] + 1;

        if (colCount[group] == 1)
            row += '<tr>';

        row += '<td title="' + key + '"><img src="Content/images/v4c/' + validv4c[key] + '" alt="' + key + '" class="v4cemote" /></td>';

        if (colCount[group] == 5) {
            row += '</tr>';
            colCount[group] = 0;
        }

        rows[group].push(row);
    }

    emotelistTabs.append(
        $('<div/>').attr('id', 'emotelisttab-1').append($('<table/>').append(rows['a'].join(''))));
    emotelistTabs.append(
        $('<div/>').attr('id', 'emotelisttab-2').append($('<table/>').append(rows['b'].join(''))));
    emotelistTabs.append(
        $('<div/>').attr('id', 'emotelisttab-3').append($('<table/>').append(rows['c'].join(''))));
    emotelistTabs.append(
        $('<div/>').attr('id', 'emotelisttab-4').append($('<table/>').append(rows['d'].join(''))));
    emotelistTabs.append(
        $('<div/>').attr('id', 'emotelisttab-5').append($('<table/>').append(rows['e'].join(''))));
    emotelistTabs.append(
        $('<div/>').attr('id', 'emotelisttab-6').append($('<table/>').append(rows['f'].join(''))));
    emotelistTabs.append(
        $('<div/>').attr('id', 'emotelisttab-7').append($('<table/>').append(rows['h'].join(''))));
    emotelistTabs.append(
        $('<div/>').attr('id', 'emotelisttab-8').append($('<table/>').append(rows['j'].join(''))));
    emotelistTabs.append(
        $('<div/>').attr('id', 'emotelisttab-9').append($('<table/>').append(rows['m'].join(''))));
    emotelistTabs.append(
        $('<div/>').attr('id', 'emotelisttab-10').append($('<table/>').append(rows['n'].join(''))));
    emotelistTabs.append(
        $('<div/>').attr('id', 'emotelisttab-11').append($('<table/>').append(rows['o'].join(''))));
    emotelistTabs.append(
        $('<div/>').attr('id', 'emotelisttab-12').append($('<table/>').append(rows['p'].join(''))));
    emotelistTabs.append(
        $('<div/>').attr('id', 'emotelisttab-13').append($('<table/>').append(rows['v'].join(''))));
    emotelistTabs.append(
        $('<div/>').attr('id', 'emotelisttab-14').append($('<table/>').append(rows['y'].join(''))));

    emotelistTabs.tabs();
    emotelistTabs.tabs({ active: 7 });
    $('#emotelist-dialog').append(emotelistTabs);

    $('#emotelist-dialog td').each(function (i) {
        $(this).click(function () {
            var messageBox = $('#new-message');

            var existingMsg = messageBox.val();

            $('#emotelist-dialog').dialog('close');

            messageBox.focus().val("").val(existingMsg + ':' + $(this).attr('title') + ':');
        });
    });

    Emoji.getIcons = function() {
        if (EmojiIcons == null) {
            EmojiIcons = [];
            for (var key in validEmoji) {
                if (validEmoji.hasOwnProperty(key)) {
                    EmojiIcons.push(key + ':');
                }
            }
            for (var key in validYukkuri) {
                if (validYukkuri.hasOwnProperty(key)) {
                    EmojiIcons.push(key + ':');
                }
            }
            for (var key in validv4c) {
                if (validv4c.hasOwnProperty(key)) {
                    EmojiIcons.push(key + ':');
                }
            }
            for (var key in validPony) {
                if (validPony.hasOwnProperty(key)) {
                    EmojiIcons.push(key + ':');
                }
            }
            for (var key in validAnimu) {
                if (validAnimu.hasOwnProperty(key)) {
                    EmojiIcons.push(key + ':');
                }
            }
            for (var key in validHotglue) {
                if (validHotglue.hasOwnProperty(key)) {
                    EmojiIcons.push(key + ':');
                }
            }
        }
        return EmojiIcons;
    };
    
    Emoji.Parser = function () {
        this.parse = function (content) {
            return parseEmoji(content);
        };

        this.transformToHtml = transformToHtml;

        function parseEmoji(content) {
            for (var key in validAlias) {
                if (validAlias.hasOwnProperty(key)) {
                    var regex = new RegExp(key, "g");
                    content = content.replace(regex, '\u200B' + validAlias[key] + '\u200B');
                }
            }
            
            return content;
        }

        function transformToHtml(content) {
            return content.replace(/:([a-z0-9\+\-_]+):/g, emojiReplacer);
        }

        function emojiReplacer(str, match) {
            if (validEmoji[match]) {
                var css = match;
                if (css === '+1') {
                    css = 'plus1';    // +1 not valid CSS class
                }
                return '<span class="emoji20 emoji20-' + css + '" alt="' + match + '" title="' + match + '" />';
            } else if (validYukkuri[match]) {
                return '<span class="yukkuri yukkuri-' + match + '" alt="' + match + '" title="' + match + '" />';
            } else if (validv4c[match]) {
                return '<img src="Content/images/v4c/' + validv4c[match] + '" alt="' + match + '" title="' + match + '" class="v4cemote" />';
            } else if (validPony[match]) {
                return '<span class="ponymoticon ponymoticon-' + validPony[match] + ' ponymoticon-' + match + '" alt="' + match + '" title="' + match + '" />';
            } else if (validAnimu[match]) {
                return '<span class="animu animu-' + validAnimu[match] + ' animu-' + match + '" alt="' + match + '" title="' + match + '" />';
            } else if (validHotglue[match]) {
                return '<span class="hotgluemoticon hotgluemoticon-' + validHotglue[match] + ' hotgluemoticon-' + match + '" alt="' + match + '" title="' + match + '" />';
            } else {
                return ':' + match + ':';
            }
        }
    };
})();
