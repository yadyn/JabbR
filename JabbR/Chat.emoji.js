var Emoji = {};
var EmojiIcons;

(function () {
    "use strict";
    
    var validEmoji = { "+1": true, "-1": true, "0": true, "1": true, "109": true, "2": true, "3": true, "4": true, "5": true, "6": true, "7": true, "8": true, "8ball": true, "9": true, "a": true, "ab": true, "airplane": true, "alien": true, "ambulance": true, "angel": true, "anger": true, "angry": true, "apple": true, "aquarius": true, "aries": true, "arrow_backward": true, "arrow_down": true, "arrow_forward": true, "arrow_left": true, "arrow_lower_left": true, "arrow_lower_right": true, "arrow_right": true, "arrow_up": true, "arrow_upper_left": true, "arrow_upper_right": true, "art": true, "astonished": true, "atm": true, "b": true, "baby": true, "baby_chick": true, "baby_symbol": true, "balloon": true, "bamboo": true, "bank": true, "barber": true, "baseball": true, "basketball": true, "bath": true, "bear": true, "beer": true, "beers": true, "beginner": true, "bell": true, "bento": true, "bike": true, "bikini": true, "bird": true, "birthday": true, "black_square": true, "blue_car": true, "blue_heart": true, "blush": true, "boar": true, "boat": true, "bomb": true, "book": true, "boot": true, "bouquet": true, "bow": true, "bowtie": true, "boy": true, "bread": true, "briefcase": true, "broken_heart": true, "bug": true, "bulb": true, "bullettrain_front": true, "bullettrain_side": true, "bus": true, "busstop": true, "cactus": true, "cake": true, "calling": true, "camel": true, "camera": true, "cancer": true, "capricorn": true, "car": true, "cat": true, "cd": true, "chart": true, "checkered_flag": true, "cherry_blossom": true, "chicken": true, "christmas_tree": true, "church": true, "cinema": true, "city_sunrise": true, "city_sunset": true, "clap": true, "clapper": true, "clock1": true, "clock10": true, "clock11": true, "clock12": true, "clock2": true, "clock3": true, "clock4": true, "clock5": true, "clock6": true, "clock7": true, "clock8": true, "clock9": true, "closed_umbrella": true, "cloud": true, "clubs": true, "cn": true, "cocktail": true, "coffee": true, "cold_sweat": true, "computer": true, "confounded": true, "congratulations": true, "construction": true, "construction_worker": true, "convenience_store": true, "cool": true, "cop": true, "copyright": true, "couple": true, "couple_with_heart": true, "couplekiss": true, "cow": true, "crossed_flags": true, "crown": true, "cry": true, "cupid": true, "currency_exchange": true, "curry": true, "cyclone": true, "dancer": true, "dancers": true, "dango": true, "dart": true, "dash": true, "de": true, "department_store": true, "diamonds": true, "disappointed": true, "dog": true, "dolls": true, "dolphin": true, "dress": true, "dvd": true, "ear": true, "ear_of_rice": true, "egg": true, "eggplant": true, "eight_pointed_black_star": true, "eight_spoked_asterisk": true, "elephant": true, "email": true, "es": true, "european_castle": true, "exclamation": true, "eyes": true, "factory": true, "fallen_leaf": true, "fast_forward": true, "fax": true, "fearful": true, "feelsgood": true, "feet": true, "ferris_wheel": true, "finnadie": true, "fire": true, "fire_engine": true, "fireworks": true, "fish": true, "fist": true, "flags": true, "flushed": true, "football": true, "fork_and_knife": true, "fountain": true, "four_leaf_clover": true, "fr": true, "fries": true, "frog": true, "fuelpump": true, "gb": true, "gem": true, "gemini": true, "ghost": true, "gift": true, "gift_heart": true, "girl": true, "goberserk": true, "godmode": true, "golf": true, "green_heart": true, "grey_exclamation": true, "grey_question": true, "grin": true, "guardsman": true, "guitar": true, "gun": true, "haircut": true, "hamburger": true, "hammer": true, "hamster": true, "hand": true, "handbag": true, "hankey": true, "hash": true, "headphones": true, "heart": true, "heart_decoration": true, "heart_eyes": true, "heartbeat": true, "heartpulse": true, "hearts": true, "hibiscus": true, "high_heel": true, "horse": true, "hospital": true, "hotel": true, "hotsprings": true, "house": true, "hurtrealbad": true, "icecream": true, "id": true, "ideograph_advantage": true, "imp": true, "information_desk_person": true, "iphone": true, "it": true, "jack_o_lantern": true, "japanese_castle": true, "joy": true, "jp": true, "key": true, "kimono": true, "kiss": true, "kissing_face": true, "kissing_heart": true, "koala": true, "koko": true, "kr": true, "leaves": true, "leo": true, "libra": true, "lips": true, "lipstick": true, "lock": true, "loop": true, "loudspeaker": true, "love_hotel": true, "mag": true, "mahjong": true, "mailbox": true, "man": true, "man_with_gua_pi_mao": true, "man_with_turban": true, "maple_leaf": true, "mask": true, "massage": true, "mega": true, "memo": true, "mens": true, "metal": true, "metro": true, "microphone": true, "minidisc": true, "mobile_phone_off": true, "moneybag": true, "monkey": true, "monkey_face": true, "moon": true, "mortar_board": true, "mount_fuji": true, "mouse": true, "movie_camera": true, "muscle": true, "musical_note": true, "nail_care": true, "necktie": true, "new": true, "no_good": true, "no_smoking": true, "nose": true, "notes": true, "o": true, "o2": true, "ocean": true, "octocat": true, "octopus": true, "oden": true, "office": true, "ok": true, "ok_hand": true, "ok_woman": true, "older_man": true, "older_woman": true, "open_hands": true, "ophiuchus": true, "palm_tree": true, "parking": true, "part_alternation_mark": true, "pencil": true, "penguin": true, "pensive": true, "persevere": true, "person_with_blond_hair": true, "phone": true, "pig": true, "pill": true, "pisces": true, "point_down": true, "point_left": true, "point_right": true, "point_up": true, "point_up_2": true, "police_car": true, "poop": true, "post_office": true, "postbox": true, "pray": true, "princess": true, "punch": true, "purple_heart": true, "question": true, "rabbit": true, "racehorse": true, "radio": true, "rage": true, "rage1": true, "rage2": true, "rage3": true, "rage4": true, "rainbow": true, "raised_hands": true, "ramen": true, "red_car": true, "red_circle": true, "registered": true, "relaxed": true, "relieved": true, "restroom": true, "rewind": true, "ribbon": true, "rice": true, "rice_ball": true, "rice_cracker": true, "rice_scene": true, "ring": true, "rocket": true, "roller_coaster": true, "rose": true, "ru": true, "runner": true, "sa": true, "sagittarius": true, "sailboat": true, "sake": true, "sandal": true, "santa": true, "satellite": true, "satisfied": true, "saxophone": true, "school": true, "school_satchel": true, "scissors": true, "scorpius": true, "scream": true, "seat": true, "secret": true, "shaved_ice": true, "sheep": true, "shell": true, "ship": true, "shipit": true, "shirt": true, "shit": true, "shoe": true, "signal_strength": true, "six_pointed_star": true, "ski": true, "skull": true, "sleepy": true, "slot_machine": true, "smile": true, "smiley": true, "smirk": true, "smoking": true, "snake": true, "snowman": true, "sob": true, "soccer": true, "space_invader": true, "spades": true, "spaghetti": true, "sparkler": true, "sparkles": true, "speaker": true, "speedboat": true, "squirrel": true, "star": true, "star2": true, "stars": true, "station": true, "statue_of_liberty": true, "stew": true, "strawberry": true, "sunflower": true, "sunny": true, "sunrise": true, "sunrise_over_mountains": true, "surfer": true, "sushi": true, "suspect": true, "sweat": true, "sweat_drops": true, "swimmer": true, "syringe": true, "tada": true, "tangerine": true, "taurus": true, "taxi": true, "tea": true, "telephone": true, "tennis": true, "tent": true, "thumbsdown": true, "thumbsup": true, "ticket": true, "tiger": true, "tm": true, "toilet": true, "tokyo_tower": true, "tomato": true, "tongue": true, "top": true, "tophat": true, "traffic_light": true, "train": true, "trident": true, "trollface": true, "trophy": true, "tropical_fish": true, "truck": true, "trumpet": true, "tshirt": true, "tulip": true, "tv": true, "u5272": true, "u55b6": true, "u6307": true, "u6708": true, "u6709": true, "u6e80": true, "u7121": true, "u7533": true, "u7a7a": true, "umbrella": true, "unamused": true, "underage": true, "unlock": true, "up": true, "us": true, "v": true, "vhs": true, "vibration_mode": true, "virgo": true, "vs": true, "walking": true, "warning": true, "watermelon": true, "wave": true, "wc": true, "wedding": true, "whale": true, "wheelchair": true, "white_square": true, "wind_chime": true, "wink": true, "wink2": true, "wolf": true, "woman": true, "womans_hat": true, "womens": true, "x": true, "yellow_heart": true, "zap": true, "zzz": true };
    var validv4c = { "ducktart": "dooktart.png", "ready": "ready.gif", "birry": "ztop.gif", "vdog": "cat.gif", "gaben": "zgabe.gif", "3s": "seal.png", "burd": "birdy.gif", "snoop": "snoop.gif", "jimmies": "jimmy.gif", "sanic": "sonicx.png", "burgirl": "ss.gif", "dilbert": "dilbert.gif", "deepdarkfantasy": "fantasy.gif", "bioware": "biogurl.gif", "shazbot": "33.png", "bestkorea": "kim.gif", "hitoame": "shower.gif", "duane": "duane.gif", "keke": "keke6.png", "uncle": "VffoS.jpg", "reshiram": "ee.gif", "push": "push.gif", "autism": "a.gif", "juggalo": "ll.gif", "stanza": "heh.png", "bestgames": "pstriple.png", "gamestop": "spekettle.gif", "teto": "oz.gif", "fothegrove": "grove.gif", "aliens": "aliens.gif", "go": "zgo.gif", "pomf": "pomf.png", "kreayshawn": "kray.png", "bodywash": "bodywash.png", "goblinu": "zgobz.jpg", "feel": "1ducktart.jpg", "valien": "ssd.gif", "2spooky4me": "spooky.gif", "2spooky": "spooky.gif", "gooby": "o2XNE.jpg", "dosh": "dsdasd.png", "8bitdose": "wee2.gif", "costanza": "heh.png" };
    var validPony = { "ajlie": "a", "priceless": "a", "flutterjerk": "a", "flutterroll": "a", "twipride": "a", "celestiamad": "a", "twicrazy": "a", "spikemeh": "a", "lunateehee": "a", "lunawait": "a", "derpwizard": "a", "abmeh": "a", "ajhappy": "a", "pinkiefear": "a", "twibeam": "a", "scootaderp": "a", "raritydaww": "a", "scootacheer": "a", "swagintosh": "a", "pinkieawe": "a", "ajsup": "a", "flutterwhoa": "a", "rdcry": "a", "silverspoon": "a", "ohcomeon": "a", "ppcute": "a", "abbored": "a", "rarityreally": "a", "raritynews": "a", "sbbook": "a", "scootaplease": "a", "applegasp": "a", "twiright": "a", "celestiawut": "a", "grannysmith": "a", "rarishock": "a", "shiningarmor": "a", "chrysalis": "a", "cadence": "a", "applederp": "a", "flutterfear": "b", "ppboring": "b", "rarityyell": "b", "fluttershy": "b", "ajcower": "b", "ajsly": "b", "eeyup": "b", "rdsmile": "b", "fluttersrs": "b", "raritydress": "b", "takealetter": "b", "rdwut": "b", "ppshrug": "b", "spikenervous": "b", "noooo": "b", "dj": "b", "fluttershh": "b", "flutteryay": "b", "squintyjack": "b", "spikepushy": "b", "ajugh": "b", "raritywut": "b", "dumbfabric": "b", "raritywhy": "b", "trixiesmug": "b", "flutterwink": "b", "rarityannoyed": "b", "soawesome": "b", "ajwut": "b", "twisquint": "b", "raritywhine": "b", "rdcool": "b", "abwut": "b", "manspike": "b", "cockatrice": "b", "facehoof": "b", "rarityjudge": "b", "rarityprimp": "b", "twirage": "b", "ppseesyou": "b", "rdsitting": "c", "rdhappy": "c", "rdannoyed": "c", "trixiesad": "c", "twismug": "c", "twismile": "c", "twistare": "c", "changeling": "c", "ohhi": "c", "party": "c", "hahaha": "c", "rdscared": "c", "flutterblush": "c", "gross": "c", "derpyhappy": "c", "twidaww": "c", "ajfrown": "c", "hmmm": "c", "pinkiejoy": "c", "whattheflut": "c", "raritysad": "c", "fabulous": "c", "derp": "c", "cadencesmile": "c", "louder": "c", "lunasad": "c", "derpyshock": "c", "shiningpride": "c", "pinkamina": "c", "loveme": "c", "lunagasp": "c", "fluttercry": "c", "scootaloo": "c", "celestia": "c", "angelglare": "c", "sneakybelle": "c", "allmybits": "c", "zecora": "c", "photofinish": "c", "ppreally": "c", "stonie": "d", "pinkiehigh": "d", "rbtrippin": "d", "spikehigh": "d", "pervertedaj": "d", "twihigh": "d", "fluttersqueak": "d", "happyrarity": "d", "bakedrarity": "d", "rbhigh": "d", "ajhuh": "d", "flutterfree": "d", "celestreeia": "d", "awwshit": "d", "treepony": "d", "rbomg": "d", "mobboss": "d", "opalescence": "d", "sneakiepinkie": "d", "dirigible": "d", "trixiehigh": "d", "twiderp": "d", "whoovesing": "d", "twiheh": "d", "flutterhigh": "d", "derpyhigh": "d", "flutteryeah": "d", "spikegimmie": "d", "sirderp": "d", "twiblah": "d", "fluttersmoke": "d", "braeburnhuh": "d", "bakedspike": "d", "lunasly": "d", "derpinkie": "d", "lunasilly": "d", "rbreally": "d", "rarityhuh": "d", "bluebowl": "d", "fillytgap": "e", "rdhuh": "e", "snails": "e", "twisad": "e", "lyra": "e", "bonbon": "e", "spitfire": "e", "lunamad": "e", "cutealoo": "e", "happyluna": "e", "sotrue": "e", "discordsad": "e", "wahaha": "e", "sbstare": "e", "punchdrunk": "e", "maud": "e", "huhhuh": "e", "absmile": "e", "dealwithit": "e", "pinkiepout": "e", "nmm": "e", "whooves": "e", "rdsalute": "e", "octavia": "e", "colgate": "e", "cheerilee": "e", "ajbaffle": "e", "abhuh": "e", "thehorror": "e", "twiponder": "e", "spikewtf": "e", "awwyeah": "e", "gilda": "e", "discentia": "e", "manlytears": "e" };
    var validAlias = { "\\:-?\\)" : ":smile:", ":-?D\\b": ":grin:", ";-?\\)" : ":wink:", "\\:-?\\(": ":disappointed:", "\\:'-?\\(" : ":cry:", ":-?P\\b" : ":tongue:", ":-?p\\b" : ":tongue:", ":-?O\\b" : ":astonished:", ":-?o\\b" : ":astonished:", "<3" : ":heart:" };


    // initialize emote list dialog
    var emotelistTabs = $('<div/>');

    emotelistTabs.append(
        $('<ul/>')
            .append($('<li/>')
                .append($('<a/>').attr('href', '#emotelisttab-1').text('a')))
            .append($('<li/>')
                .append($('<a/>').attr('href', '#emotelisttab-2').text('b')))
            .append($('<li/>')
                .append($('<a/>').attr('href', '#emotelisttab-3').text('c')))
            .append($('<li/>')
                .append($('<a/>').attr('href', '#emotelisttab-4').text('d')))
            .append($('<li/>')
                .append($('<a/>').attr('href', '#emotelisttab-5').text('e')))
            .append($('<li/>')
                .append($('<a/>').attr('href', '#emotelisttab-6').text('j')))
            .append($('<li/>')
                .append($('<a/>').attr('href', '#emotelisttab-7').text('v'))))

    var colCount = { 'a': 0, 'b': 0, 'c': 0, 'd': 0, 'e': 0, 'j': 0, 'v': 0 };
    var rows = { 'a': [], 'b': [], 'c': [], 'd': [], 'e': [], 'j': [], 'v': [] };

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
    for (var key in validv4c) {
        var row = '';
        var group = 'v';

        colCount[group] = colCount[group] + 1;

        if (colCount[group] == 1)
            row += '<tr>';

        row += '<td title="' + key + '"><img src="Content/images/v4c/' + validv4c[key] + '" alt="' + key + '" /></td>';

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
        $('<div/>').attr('id', 'emotelisttab-6').append($('<table/>').append(rows['j'].join(''))));
    emotelistTabs.append(
        $('<div/>').attr('id', 'emotelisttab-7').append($('<table/>').append(rows['v'].join(''))));

    emotelistTabs.tabs();
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
                    content = content.replace(regex, validAlias[key]);
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
            } else if (validv4c[match]) {
                return '<img src="Content/images/v4c/' + validv4c[match] + '" alt="' + match + '" title="' + match + '" />';
            } else if (validPony[match]) {
                return '<span class="ponymoticon ponymoticon-' + validPony[match] + ' ponymoticon-' + match + '" alt="' + match + '" title="' + match + '" />';
            } else {
                return ':' + match + ':';
            }
        }
    };
})();
