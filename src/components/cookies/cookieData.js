export const cookieData = [
    {
        "name": "softcookie",
        "fullname": "SoFT cookIE(s)",
        "description": "Age: 1 - 12+",
        "icon": require('../../img/icons/Icon_Madeleine.png'),
        "img": [
            require('../../img/Soft/Soft_Cookie1.png'),
            require('../../img/Soft/Soft_Cookie2.png'),
            require('../../img/Soft/Soft_Cookie3.png'),
            require('../../img/Soft/Soft_Cookie4.png'),
            require('../../img/Soft/Soft_Cookie5.png'),
            require('../../img/Soft/Soft_Cookie6.png'),
            require('../../img/Soft/Soft_Cookie7.png'),
        ],
        "bgImg": require('../../img/Soft/Soft_BG.png'),
        "customAssets": {
            "instructionBox": require('../../img/Soft/Soft_Cookie_Instruction_Box.png'),
            "instructionText": `Undo Soft Cookies'\nlearnt self destructive phrases,\ninto self loving affirmations,\nby dragging words &/or letters into the trash !`,
            "dialogueBox_Big": require('../../img/Soft/SoftCookie_Big.png'),
            "dialogueBox_Small": require('../../img/Soft/SoftCookie_Small.png'),
            "dialogueTextData": require('./Soft/softData'),
            "smallDialogueTextData": require('./Soft/softDataSmall'),
        }
    },
    {
        "name": "macaron",
        "fullname": "mADamE mAcarOn",
        "description": "Age : 87",
        "icon": require('../../img/icons/Icon_Macaron.png'),
        "img": require('../../img/Macaron/Macaron.png'),
        "bgImg": require('../../img/Macaron/BG_Macaron_GreyWhite.png'),
        "customAssets": {
            "instructionBox": require('../../img/Macaron/Macaron_InstructionBox.png'),
            "instructionText": `Click & Chew-se\nthe Macarons in the Box,\n
            from top to bottom,\nto converse .`,
            "dialogueBox": require('../../img/Macaron/Macaron_Circle_Box.png'),
            "dialogue": [
                {
                    "id": 0,
                    "you": `Pardon me,\nAre you Madame Macaron ?`,
                    "mm": `Ahh !\nHow audacious of you !\nYou shall not dare to even speak to me\n
                            until you dress into something much more bougie !\n
                            Might I recommend some\nCocoa Chanel, Jacquemousse, Peter Dough,\n
                            & Simone Rocher ?\n&\nI better not smell any Fast Food Fashion,\n& I better
                            not be served any distasteful knock offs\nlike Alexander McFlurry, FerraGMO,\n
                            & Thome Brownie -`
                },
                {
                    "id": 1,
                    "you": "Madame,\nI'm working o",
                    "mm": `Oh !\nWhy didn't you tell me\nyou were waiting on me ??\n\nWhere is your
                            uniform ?\n Go put on your buttercream ribbons,\n blue - white - or whatever
                            colour fondant collars\n& your velveteen bowties .\n\nOnly then, I'll tell you
                            what I want ~\nGo . Go .`
                },
                {
                    "id": 2,
                    "you": `I don't work for you .\nI am here to ask about Soft Cookie .`,
                    "mm": `Oh oh, that explains why you're here,\nbut doesn't explain how cheap you look .\n
                            Soft Cookie, truly one of thee worst cookies ever .\nImmensely lazy,
                            trying to teach silly things like\n"work smart, not hard"\nAs if .\n
                            I tried whipping them into shape,\ncontantly telling them to get\nback up on their feet ;\n
                            & they believe in\nbreaks .`
                },
                {
                    "id": 3,
                    "you": `What else ca`,
                    "mm": `Then\nthey had the nerve to talk back to me,\n
                            preaching about how bleaching is harmful -\nwhen they
                            are made of unrefined all purpose flour !\n\n
                            Ugh, disgusting !\nThis is why\nthere is a price difference between us .\n
                            They should recognize that being\nin my very presence,\n is a privilege .`
                },
                {
                    "id": 4,
                    "you": `Alright,\ndo you know anything else about them ?`,
                    "mm": `Mmm . . .\nThey would always ask about what is fulfilling to me ?\n
                            & As an expensive cookie, I know what is quality ;\nSurprisingly,
                            I found that Soft Cookie was not\nas cheesy as I thought, & did have some\n
                            good taste like me - strangely .\n\nThey enjoyed flavours like :\n
                            Jasmine, Rose, Pistachio, Wheat, Lemongrass\nPandan, Lilac, Lavender, Violet, X-Y-Z Tea\n
                            Fig, Bergamot, & Lilies of the Valley,\n& all things delicate .`
                },
                {
                    "id": 5,
                    "you": `Great, let's call it finished .\nThank you for your time .`,
                    "mm": `Haha,\nYou definitely should be thankful .\n
                            You're lucky I don't charge money for my time,\nlike Monsieur Financier .\n
                            Oh\n by the way,\nanother thing I barely remember, Soft Cookie,
                            had mentioned something about how\nalmonds can be unsustainable\n??\n
                            Anyways,\nAu Revoir -`
                },
            ]
        }
    },
    {
        "name": "wafer",
        "fullname": `FLAkEY waFEr\nJAkE`,
        "description": "Age : 22",
        "icon": require('../../img/icons/Icon_Wafer.png'),
        "img": require('../../img/Wafer/Wafer_Cookie.png'),
        "bgImg": require('../../img/Wafer/BG_Wafer.png'),
        "customAssets": {
            "instructionBox": require('../../img/Wafer/Wafer_Box.png'),
            "instructionText": `Hover over each Black Square\nthen *CLICK* each White Square.`,
            "blackBoxDialogue" : [
                `Hi Flakey Wafer Jake,\n can I borrow you for a bit ? I would like to ask you about Soft Cookie.`,
                `Great thanks !\nLet's get started.`,
                `When was the last you heard of Soft Cookie ?`,
                `Do you know what\nSoft Cookie ended up doing ?`,
                `Do you think not\n showing up may have upset Soft Cookie ?`,
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
                `Oh yeah,\nI hate when others flake on me.`,
                `Look, I don't know who comminuted Soft Cookie, but I for sure did not\ncommit the crime because\nI clearly don't have that\nwill of a commitment.`,
                `actually . . . i'm gonna\ndwindle away . . . i'm\nnot feeling it . . .`,
            ],
            "tapeDialogue": {
                "tapeBox": require('../../img/Wafer/Wafer_BG_ChatBox.png'),
                "text1": "._.",
                "text2": "bye bye"
            }
        }
    },
    {
        "name": "fortune",
        "fullname": "mis . FOrTUnE",
        "description": "Age : 1920",
        "icon": require('../../img/icons/Icon_Fortune.png'),
        "img": require('../../img/Fortune/MisFortune.png'),
        "bgImg": require('../../img/Fortune/BG_Fortune.png'),
        "customAssets": {
            "instructionBox": require('../../img/Fortune/BlackBox_Fortune.png'),
            "instructionText": `Pull out each fortune\nw/ your cursor\nto reveal each curse .`
        }
    },
    {
        "name": "chess",
        "fullname": "QuEEn knowAh",
        "description": "Age : 32",
        "icon": require('../../img/icons/Icon_Chess.png'),
        "img": require('../../img/Chess/Chess.png'),
        "bgImg": require('../../img/Chess/BG_Chess.png'),
        "customAssets": {
            "instructionBox": require('../../img/Chess/Chess_InstructionBox.png'),
            "instructionText": `On the chess board, hover\nover each piece, to see\nwhat Queen Knowah thinks .`,
            "bubbleBox": require('../../img/Chess/Chess_Bubble.png'),
            "chessBoard": require('../../img/Chess/ChessBoard_Blank.png'),
            "dialogue": [
                {
                    "name": "h8",
                    "shape": "square",
                    "text": `My rook will stay on H8,\nready to defend any\nunknown possibilities .`
                },
                {
                    "name": "b4",
                    "shape": "circle",
                    "text": `I must calculate what will\nhappen, B4, as a safety\nprecaution measure .`
                },
                {
                    "name": "a5",
                    "shape": "square",
                    "text": `If it does not follow the\ncookbook I like, then any\nmov(i)es outside of it are\nsimply wrong .`
                },
                {
                    "name": "f8",
                    "shape": "square",
                    "text": `You cannot fact\ncheck-mate F8, therefore,\nit is a threat, not a treat .`
                },
                {
                    "name": "h1",
                    "shape": "circle",
                    "text": `If you do not taste the\nexact way I expect you to be,\nthen something is wrong with you .`
                },
                {
                    "name": "d6",
                    "shape": "circle",
                    "text": `Things can only be\none way - my way,\nblack & white,\n& never grey.`
                },
                {
                    "name": "f2",
                    "shape": "circle",
                    "text": `If you know\nsomething I don't\nF1 to F2,\nbecause F U .`
                },
            ]
        }
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
            "instructionText": `2 Lies & a Truth .\n \nHover over any prompt -\nthe black box- click to begin,\nthen press on the correct truth .`,
            "instructionBox": require('../../img/Linzer/Linzer_Dialogue_INSTRUCTIONS_Box.png'),
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
            "instructionBox": require('../../img/Brownie/Black_Box_Brownie.png'),
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
        "fullname": `mad mad baby\nmadeleine`,
        "description": `Age: Physically 21 - ???\nEmotionally 2`,
        "icon": require('../../img/icons/Icon_Madeleine.png'),
        "img": require('../../img/Madeleine/Madeleine.png'),
        "bgImg": require('../../img/Madeleine/BG_Madeleine.png'),
        "customAssets": {
            "madeleineBox": require('../../img/Madeleine/Chat_Box_50.png'),
            "instructionBox": require('../../img/Madeleine/Con_D_Blank.png'),
            "dialogue": [

                {
                    "speaker": "consumer",
                    "text": `Hi, I came to ask about\n Soft Cookie.\n Do you know anything about their disappearance?`,
                },
                {
                    "speaker": "madeleine",
                    "text": `Eww no .`,
                },
                {
                    "speaker": "madeleine",
                    "text": `They're overly sensitive &\n cannot handle anything .\nThey ran away because they didn't bring me a lemon .`,
                },
                {
                    "speaker": "consumer",
                    "text": `A lemon ?`,
                },
                {
                    "speaker": "madeleine",
                    "text": `UMM, YA. My LEMON ??\nDUH.`,
                },
                {
                    "speaker": "madeleine",
                    "text": `Just talking about this is\npissing me off - I FUCKING HATE people who forget to bring me MY LEMONS !!`,
                },
                {
                    "speaker": "madeleine",
                    "text": `Theyre A STUPID, USELESS,\n DOO DOO POO POO\n FACE CRYBABY\nwho needs to GROW UP .`,
                },
                {
                    "speaker": "consumer",
                    "text": `Is it really necessary to\ninsult & negatively\nname call Soft Cookie ?`,
                },
                {
                    "speaker": "madeleine",
                    "text": `* wacks sippy cup *\noff the counter`,
                },
                {
                    "speaker": "consumer",
                    "text": `._. . . . ??`,
                },
                {
                    "speaker": "madeleine",
                    "text": `* rips toys apart *`,
                },
                {
                    "speaker": "madeleine",
                    "text": `* breaks dishware *`,
                },
                {
                    "speaker": "consumer",
                    "text": `Is there something I can do to help calm you down?`,
                },
                {
                    "speaker": "madeleine",
                    "text": `I AM CALM !\nYOU'RE THE FUCKING\nINSANE ONE !!`,
                },
                {
                    "speaker": "madeleine",
                    "text": `* throws objects *`,
                },
                {
                    "speaker": "consumer",
                    "text": `Umm...\nI think it would be best for us to take a break & have a breather\n.....`,
                },
                {
                    "speaker": "madeleine",
                    "text": `* FLIPS TABLE *`,
                },
                {
                    "speaker": "madeleine",
                    "text": `* DON'T TELL ME\nWHAT TO DO !\nI CAN DO WHATEVER I WANT . *`,
                },
                {
                    "speaker": "madeleine",
                    "text": `YOU'RE THE ONE\nGETTING UPSET`,
                },
                {
                    "speaker": "madeleine",
                    "text": `GRRRRR\nRAAAAAAH\nIFAHWIOWHF !!!`,
                },
                {
                    "speaker": "madeleine",
                    "text": `* PUNCHES HOLES *\nINTO WALLS`,
                },
                {
                    "speaker": "madeleine",
                    "text": `LOOK AT YOU\nRUNNING AWAY !!!`,
                },
                {
                    "speaker": "madeleine",
                    "text": `GET OUT OF HERE !\nI'M DONE WITH YOU !\nYOU BABY !!!`,
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
            "instructionText": `Tap here\nto pay w/ cache !`,
            "dialogue": [

                {
                    "text": `Do you want info ?\n I won't speak & spill unless you pay me some dough .`,
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
                    "text": `Note #4\n\nCookie kids are koo koo,\nthey haven't learned that\ncontentment is bought .`,
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