var gameOverModal = document.getElementById("game-over-modal");

/*****************************************************************************
 * Level initialization
 *****************************************************************************/
function levelStart(level) {
    /* Check level value */
    if (!(level > 0)) {
        level = 0;
    }

    if (level >= gameLevels.length) {
        level = gameLevels.length - 1;
        gameOverModal.style.visibility = "visible";
        gameBoard.style.visibility = "hidden";
        return;
    }

    /* Use predefined challenges */
    game.init(level,
              gameLevels[level].info);

    /* Save game point */
    localStorage.setItem("divisium-3/game-level", JSON.stringify(game.level));

    /* Setup board */
    uiBoardSetup(game.board);
}

/*****************************************************************************
 * Game levels
 *****************************************************************************/
var gameLevels = [
    /* L01 - L03 3x3 */
    {info: "INFO: D03-03-03-00-00-00-00-00-00-00 T000010 #3x3=3-120100221"},
    {info: "INFO: D06-00-00-03-00-00-00-00-00-00 T000010 #3x3=3-033030000"},
    {info: "INFO: D03-04-01-01-00-00-00-00-00-00 T000010 #3x3=3-011201031"},

    /* L04 - L06 6x6 */
    {info: "INFO: D12-12-12-00-00-00-00-00-00-00 T000042 #6x6=3-122010001120120112202012011211220200"},
    {info: "INFO: D21-03-03-09-00-00-00-00-00-00 T000041 #6x6=3-301220300010000000003303000300332103"},
    {info: "INFO: D18-06-06-06-00-00-00-00-00-00 T000039 #6x6=3-010012230102213231000003301300020000"},

    /* L07 - L20 (0-100) */
    {info: "INFO: D34-22-16-09-00-00-00-00-00-00 T000082 #9x9=3-012303211000030100121000102211303123021011110001020200132002120231321102000000102"},
    {info: "INFO: D36-21-12-12-00-00-00-00-00-00 T000084 #9x9=3-102230000330000230000102121322201300000130011011003021011210303302010110011113020"},
    {info: "INFO: D40-14-14-13-00-00-00-00-00-00 T000086 #9x9=3-000121203323003000000121233012120100120032000031000120300201011001302200030230030"},
    {info: "INFO: D29-31-13-08-00-00-00-00-00-00 T000088 #9x9=3-301102110012011123011121110132000120200111102100100300230130120112101112020031003"},

    {info: "INFO: D29-27-21-04-00-00-00-00-00-00 T000089 #9x9=3-202021010110121022121211021100211101212010123001012200100201133022002000121310200"},
    {info: "INFO: D31-25-19-06-00-00-00-00-00-00 T000090 #9x9=3-210230202201001030112102021203121102100110121000100000302212112301031101020002211"},
    {info: "INFO: D27-32-17-05-00-00-00-00-00-00 T000091 #9x9=3-102111023002111120210311000101002121302031201020011002111110101131221201000220121"},
    {info: "INFO: D30-27-18-06-00-00-00-00-00-00 T000092 #9x9=3-121301012100020101111210223210101120002111010120222000012001031310301122003021020"},
    {info: "INFO: D27-33-15-06-00-00-00-00-00-00 T000093 #9x9=3-111100211010321312223003001110010011200210301110022021121111002022101011101302110"},

    {info: "INFO: D29-28-19-05-00-00-00-00-00-00 T000094 #9x9=3-010100220212131013202021020111000210002211101210311220110001300202311212012101001"},
    {info: "INFO: D29-29-17-06-00-00-00-00-00-00 T000094 #9x9=3-102101111221211202110011020100201011232112300100101001010202312232133011000000012"},
    {info: "INFO: D40-16-10-15-00-00-00-00-00-00 T000094 #9x9=3-033000102302021103030100200000031120102001013021303201030033000320200130010101130"},
    {info: "INFO: D31-24-21-05-00-00-00-00-00-00 T000098 #9x9=3-211010012011223021120003001012320102021021030210201100102121320020100001021102212"},
    {info: "INFO: D39-17-11-14-00-00-00-00-00-00 T000099 #9x9=3-021020111033313000000000103021031100213330103000002021302112211303002020000001300"},

    /* L21 - L25 (100-1000) */
    {info: "INFO: D25-34-19-03-00-00-00-00-00-00 T000217 #9x9=3-010212012211001021111022100122310121001011012211101210031121113011001200202102120"},
    {info: "INFO: D25-34-19-03-00-00-00-00-00-00 T000275 #9x9=3-112122001102001212101211011020110121202121112112020101011101103210032203101201000"},
    {info: "INFO: D43-12-09-17-00-00-00-00-00-00 T000334 #9x9=3-003110130100202000230323103030000020001031200302300303031230000000000030111303210"},
    {info: "INFO: D29-25-25-02-00-00-00-00-00-00 T000493 #9x9=3-021212120120102100012020013210211210102002100201112222002110021300212010002101212"},
    {info: "INFO: D25-36-15-05-00-00-00-00-00-00 T000904 #9x9=3-110022102121103001003001010033011122210111121111111003110220010120102211102201111"},

    /* L26 - L30 (1000-10000) */
    {info: "INFO: D28-32-14-07-00-00-00-00-00-00 T001059 #9x9=3-102012010121211002110211131202011102110101031021103020111110033032100200001210310"},
    {info: "INFO: D23-37-19-02-00-00-00-00-00-00 T001417 #9x9=3-210220210101101120021111021102121211111100110111210111210001202133222101000100122"},
    {info: "INFO: D43-11-11-16-00-00-00-00-00-00 T001532 #9x9=3-022000033210130300121300100002002213001031200331303003000000302002003012303000001"},
    {info: "INFO: D38-16-16-11-00-00-00-00-00-00 T002655 #9x9=3-102030211201300102312003020000230013302101000020102322001321001100000310230012002"},
    {info: "INFO: D24-34-22-01-00-00-00-00-00-00 T006013 #9x9=3-110212012111201202021110211201011012111210211020021020103120202202101110102012011"},

    /* L31 - L35 (10000-100000) */
    {info: "INFO: D27-28-25-01-00-00-00-00-00-00 T010560 #9x9=3-212010221001221100111101022210110201201012100102220132121102201000212010212020120"},
    {info: "INFO: D42-12-12-15-00-00-00-00-00-00 T012116 #9x9=3-100230001321300322021003100002100000210000333012233300210010030102030000201030300"},
    {info: "INFO: D44-11-08-18-00-00-00-00-00-00 T024243 #9x9=3-030003120003210000000030032330030001000000031330333002000211031301201102021030030"},
    {info: "INFO: D45-10-07-19-00-00-00-00-00-00 T029683 #9x9=3-230002133000311000100011300213032012000030003303321000030001200030003303300030000"},
    {info: "INFO: D33-21-21-06-00-00-00-00-00-00 T070139 #9x9=3-212030303102000300010102003121220102201012211102201002220120100101002030012211102"},

    /* L36 - L40 (100000-) */
    {info: "INFO: D23-36-21-01-00-00-00-00-00-00 T148074 #9x9=3-120110201002111122212010220110202012111120210112010111011112001311021022011201210"},
    {info: "INFO: D22-38-20-01-00-00-00-00-00-00 T159892 #9x9=3-210112121012200210111021201112010111110102211111220101103011010220011201011212022"},
    {info: "INFO: D45-09-09-18-00-00-00-00-00-00 T237692 #9x9=3-300300133030030200010203000002103030331002303000200120102031000221300003010003030"},
    {info: "INFO: D22-40-16-03-00-00-00-00-00-00 T590630 #9x9=3-210111111022012011101211101012031112210001210103001202120031111121002011101212111"},
    {info: "INFO: D22-39-18-02-00-00-00-00-00-00 T931309 #9x9=3-110110211022121111201100011201122010102001330012210211210111011021112121102112001"},
];

/*****************************************************************************
 * Create game
 *****************************************************************************/
var game = new Game();

/*****************************************************************************
 * Start game from save point
 *****************************************************************************/
level = JSON.parse(localStorage.getItem("divisium-3/game-level"));
if (level > 0) {
    levelStart(level);
} else {
    levelStart(0);
}

function modalClick(event) {
    event.preventDefault();

    gameOverModal.style.visibility = "hidden";
    gameBoard.style.visibility = "visible";

    levelStart(game.level);
}

gameOverModal.addEventListener("click",      modalClick);
gameOverModal.addEventListener("touchend",   modalClick, {passive: true});

