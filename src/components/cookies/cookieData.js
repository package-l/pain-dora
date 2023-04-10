export const cookieData = [
    {
        "name": "softcookie",
        "fullname": "Madame Fortune",
        "description": "Age: Physically 21 - ??? Emotionally 2",
        "icon": require('../../img/icons/Icon_Madeleine.png'),
        "img": require('../../img/Madeleine/Madeleine.png'),
        "bgImg": require('../../img/Madeleine/BG_Madeleine.png'),
    },
    {
        "name": "macaron",
        "fullname": "mADamE mAcarOn",
        "description": "This page's interaction has not yet been coded.",
        "icon": require('../../img/icons/Icon_Macaron.png'),
        "img": require('../../img/Macaron/Macaron.png'),
        "bgImg": require('../../img/Macaron/BG_Macaron_GreyWhite.png'),
    },
    {
        "name": "wafer",
        "fullname": `FLAkEY waFEr\nJAkE`,
        "description": "Age : 22",
        "icon": require('../../img/icons/Icon_Wafer.png'),
        "img": require('../../img/Macaron/Macaron.png'),
        "bgImg": require('../../img/Wafer/BG_Wafer.png'),
        "customAssets": {
            "blackBoxDialogue" : [
                `Hi Flakey Wafter Jake,\n can I borrow you for a bit ? I would like to ask you about Soft Cookie.`,
                `Great thanks !\nLet's get started.`,
                `When was the last you heard of Soft Cookie ?`,
                `Do you know what\nSoft Cookie ended up doing ?`,
                `Do you think not\n showing up ave upset Soft Cookie ?`,
                `Is there a reason you don't attend or often reply ?`,
                `Have you thought about what it feels like when a cookie doesn't show up for you?`,
                `Okay, anyways, let's get back to our main topic, Soft Cookie -`,
                `Could you tell me\nmore about your\nrelationship with\nSoft Cookie ?`,
            ],
            "whiteBoxDialogue" : [
                `Totally,\nof course -\nuhh. . . wait . . .\ncan i pass . . ?`,
                `I know I'd do it,\nbut . . . nevermind . . .`,
                `A couple of us had\nplanned a day for milk.\nLittle Debbie Downer Brownie "rain" checked,\n& I stayed in leavening, leaving them hanging.`,
                `Y'know, I'm just\nreally messy and all over the place in my own space all the time, and I need y'all to\nunderstand that,\nso - I don't know.`,
                `Just because I don't go,\ndoesn't mean I'm a ghost .\nI'm there in spirit -\nThough, you can't taste it.\nor feel it . . . or smell it . . .\nYou get what I mean.\nDing* Oh look, another\ninvite that I can decline !\nEhh, they'll know what it means if I don't reply.`,
                `It's really hard to get me out of the oven. I have a\npattern of procrastinating then pulling out last minute.\nIt's okay though, I usually ding them 10 minutes prior meeting -`,
                `Oh yeah,\nI hate when flake on me.`,
                `Look, I don't know who comminuted Soft Cookie, but I for sure did not\ncommit the crime because\nI clearly don't have that\nwill of a commitment.`,
                `actually . . . i'm gonna\ndwindle away . . . i'm\nnot feeling it . . .`,
            ],
            "tapeDialogue": {
                "tapeBox": require('../../img/Wafer/Wafer_Box.png'),
                "text1": "._.",
                "text2": "bye bye"
            }
        }
    },
    {
        "name": "fortune",
        "fullname": "mis .FOrTUnE",
        "description": "Age: 19",
        "icon": require('../../img/icons/Icon_Fortune.png'),
        "img": require('../../img/Fortune/MisFortune.png'),
        "bgImg": require('../../img/Fortune/BG_Fortune.png'),
        "customAssets": {
            "instructionsBox": require('../../img/Fortune/BlackBox_Fortune.png')
        }
    },
    {
        "name": "chess",
        "fullname": "Queen Knowah",
        "description": "The interaction for this page isn't coded yet. :)",
        "icon": require('../../img/icons/Icon_Chess.png'),
        "img": require('../../img/Chess/Chess.png'),
        "bgImg": require('../../img/Chess/BG_Chess.png'),
    },
    {
        "name": "linzer",
        "fullname": "Lying Linzer Lindsay",
        "description": "Age: Unknown",
        "icon": require('../../img/icons/Icon_Linzer.png'),
        "img": require('../../img/Linzer/Linzer.png'),
        "bgImg": require('../../img/Linzer/BG_Linzer.png'),
        "customAssets": {
            "answerBoxOdd": require('../../img/Linzer/Linzer_Dialogue_ANSWER_Box_1_3_5.png'),
            "answerBoxEven" : require('../../img/Linzer/Linzer_Dialogue_ANSWER_Box_2_4_6.png'),
            "instructionsBox": require('../../img/Linzer/Linzer_Dialogue_INSTRUCTIONS_Box.png'),
            "promptBox": require('../../img/Linzer/Linzer_Dialogue_PROMPT_Box.png')
        }
    },
    {
        "name": "brownie",
        "fullname": "liTTlE dEBBiE\ndownER BRowniE",
        "description": "Age: 17",
        "icon": require('../../img/icons/Icon_Brownie.png'),
        "img": require('../../img/Brownie/Brownie.png'),
        "bgImg": require('../../img/Brownie/BG_Brownie_Grey_White.png'),
        "customAssets": {
            "instructionsBox": require('../../img/Brownie/Black_Box_Brownie.png'),
            "interactionBox": require('../../img/Brownie/Chat_Box_Tape_Brownie.png'),
            "dialogue1": require('../../img/Brownie/Bold_BD1.png'),
            "dialogue2": require('../../img/Brownie/Bold_BD2.png'),
            "dialogue3": require('../../img/Brownie/BD3.png'),
            "dialogue4": require('../../img/Brownie/Bold_BD4.png'),
            "dialogue5": require('../../img/Brownie/BD5.png'),
        },
    },
    {
        "name": "madeleine",
        "fullname": "mad mad baby madeleine",
        "description": `Age: Physically 21 - ???\nEmotionally 2`,
        "icon": require('../../img/icons/Icon_Madeleine.png'),
        "img": require('../../img/Madeleine/Madeleine.png'),
        "bgImg": require('../../img/Madeleine/BG_Madeleine.png'),
        "customAssets": {
            "madeleineBox": require('../../img/Madeleine/Chat_Box_50.png'),
            "consumerBox": require('../../img/Madeleine/Con_D_Blank.png'),
            "dialogue": [

                {
                    "speaker": "consumer",
                    "text": `Hi, I came to ask about\n Soft Cookie.\n Do you know anything about their disappearance?`,
                    "speed": 70,
                },
                {
                    "speaker": "madeleine",
                    "text": `Eww no .`,
                    "speed": 70,
                },
                {
                    "speaker": "madeleine",
                    "text": `They're overly sensitive &\n cannot handle anything .\nThey ran away because they didn't bring me a lemon .`,
                    "speed": 70,
                },
                {
                    "speaker": "consumer",
                    "text": `A lemon ?`,
                    "speed": 70,
                },
                {
                    "speaker": "madeleine",
                    "text": `UMM, YA. My LEMON ??\nDUH.`,
                    "speed": 70,
                },
                {
                    "speaker": "madeleine",
                    "text": `Just talking about this is\npissing me off - I FUCKING HATE people who forget to bring me MY LEMONS !!`,
                    "speed": 70,
                },
                {
                    "speaker": "madeleine",
                    "text": `Theyre A STUPID, USELESS,\n DOO DOO POO POO\n FACE CRYBABY\nwho needs to GROW UP .`,
                    "speed": 70,
                },
                {
                    "speaker": "consumer",
                    "text": `Is it really necessary to\ninsult & negatively\nname call Soft Cookie ?`,
                    "speed": 70,
                },
                {
                    "speaker": "madeleine",
                    "text": `* wacks sippy cup *\noff the counter`,
                    "speed": 70,
                },
                {
                    "speaker": "consumer",
                    "text": `._. . . . ??`,
                    "speed": 70,
                },
                {
                    "speaker": "madeleine",
                    "text": `* rips toys apart *`,
                    "speed": 70,
                },
                {
                    "speaker": "madeleine",
                    "text": `* breaks dishware *`,
                    "speed": 70,
                },
                {
                    "speaker": "consumer",
                    "text": `Is there something I can do to help calm you down?`,
                    "speed": 70,
                },
                {
                    "speaker": "madeleine",
                    "text": `I AM CALM !\nYOU'RE THE FUCKING\nINSANE ONE !!`,
                    "speed": 70,
                },
                {
                    "speaker": "madeleine",
                    "text": `* throws objects *`,
                    "speed": 70,
                },
                {
                    "speaker": "consumer",
                    "text": `Umm...\nI think it would be best for us to take a break & have a breather\n.....`,
                    "speed": 70,
                },
                {
                    "speaker": "madeleine",
                    "text": `* FLIPS TABLE *`,
                    "speed": 70,
                },
                {
                    "speaker": "madeleine",
                    "text": `* DON'T TELL ME\nWHAT TO DO !\nI CAN DO WHATEVER I WANT . *`,
                    "speed": 70,
                },
                {
                    "speaker": "madeleine",
                    "text": `YOU'RE THE ONE\nGETTING UPSET`,
                    "speed": 70,
                },
                {
                    "speaker": "madeleine",
                    "text": `GRRRRR\nRAAAAAAH\nIFAHWIOWHF !!!`,
                    "speed": 70,
                },
                {
                    "speaker": "madeleine",
                    "text": `* PUNCHES HOLES *\nINTO WALLS`,
                    "speed": 70,
                },
                {
                    "speaker": "madeleine",
                    "text": `LOOK AT YOU\nRUNNING AWAY !!!`,
                    "speed": 70,
                },
                {
                    "speaker": "madeleine",
                    "text": `GET OUT OF HERE !\nI'M DONE WITH YOU !\nYOU BABY !!!`,
                    "speed": 70,
                },
            ]
        },
    },
    {
        "name": "financier",
        "fullname": "moNsiEUr fiNANciEr",
        "description": "Age: 58",
        "icon": require('../../img/icons/Icon_Brownie.png'),
        "img": require('../../img/Financier/Financier.png'),
        "bgImg": require('../../img/Financier/BG_Financier.png'),
        "customAssets": {
            "instructionBox": require('../../img/Financier/Black_Box_Financier.png'),
            "interactionBox1": require('../../img/Financier/White_Box_1_Financier.png'),
            "interactionBox2": require('../../img/Financier/White_Box_2_Financier.png'),
            "instructionText": `Click Here\nto Add Cache !`,
            "dialogue": [

                {
                    "text": `Do you want info ?\n I won't speak & spill unless\n you pay me some dough .`,
                },
                {
                    "text": `Thank you,\nplease come again !`,
                },
                {
                    "text": `Note #1\n\nI am Mon. Financier,\n& my wife is Lady M(oney),\ntogether we are M & M .`,
                },
                {
                    "text": `Note #2\n\nYes, Soft Cookie's gone --\nBut how can we capitalize\non expired Cookie(s) ?`,
                },
                {
                    "text": `Note #3\n\nI'd rather rot w/ my gold\ningots, than be ripe & alive .`,
                },
                {
                    "text": `Note #4\n\nCookies kids are koo koo,\nthey haven't learnted that\ncontentment is bought .`,
                },
                {
                    "text": `Note #5\n\nMoney = Happiness\n Money = No Problems\nMoney = Blood & Butter`,
                },
                {
                    "text": `Note #6\n\nThe idea of enjoyment\nthat doesn't involve\nmoney -- is nuts .`,
                },
                {
                    "text": `Note #7\n\nI can't remember a fun\ntime w/out Fun-FETTI\nC.R.E.A.M --`,
                },
                {
                    "text": `Note #8\n\nI don't know how Soft\nCookie stayed Soft, even\nwhen I milked them dry ?`,
                },
                {
                    "text": `Note #9\n\nI can pay people\nto do the work to fix me\nw/ chips & almonds .`,
                },
                {
                    "text": `Note #10\n\nExcuse moi, I must check\nmy Cold-well-storage for\nstock of beurre noisette .`,
                },
            ]
        },
    },
]