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
    localStorage.setItem("game-level", JSON.stringify(game.level));

    /* Setup board */
    uiBoardSetup(game.board);
}

/*****************************************************************************
 * Game levels
 *****************************************************************************/
var gameLevels = [
    {info: "INFO: D04-03-00-02-00-00-00-00-00-00 T000018 #3x3=3-300011031"},
    {info: "INFO: D03-03-03-00-00-00-00-00-00-00 T000020 #3x3=3-010220121"},
    {info: "INFO: D05-01-01-02-00-00-00-00-00-00 T000018 #3x3=3-300023001"},
    {info: "INFO: D02-05-02-00-00-00-00-00-00-00 T000026 #3x3=3-012211101"},

    {info: "INFO: D12-12-12-00-00-00-00-00-00-00 T017839 #6x6=3-120120021002102212201021012110210201"},
    {info: "INFO: D12-12-12-00-00-00-00-00-00-00 T018298 #6x6=3-212012001102120202021211110021202100"},
    {info: "INFO: D12-12-12-00-00-00-00-00-00-00 T022599 #6x6=3-021202120111012021201210112002020120"},
    {info: "INFO: D22-02-02-10-00-00-00-00-00-00 T033741 #6x6=3-203003010303120030030030303000000300"},

    {info: "INFO: D26-33-18-04-00-00-00-00-00-00 T006878 #9x9=3-300120211011111311021100001101232101011200102221100210101121223210102010022011021"},
    {info: "INFO: D34-22-16-09-00-00-00-00-00-00 T041536 #9x9=3-202132033110201000130000300000202023230111300003020011020111202120201010102112111"},
    {info: "INFO: D26-31-22-02-00-00-00-00-00-00 T121170 #9x9=3-110210201121021212102100102201302010112000210111131022102202102002121110211100201"},
    {info: "INFO: D28-30-18-05-00-00-00-00-00-00 T188236 #9x9=3-210111202012011110321120210001121023012003210110030210012002103201112000121101201"},
    {info: "INFO: D31-26-17-07-00-00-00-00-00-00 T212797 #9x9=3-102120302212010000002123001320100301001030201020020121113301212010011111211210120"},
    {info: "INFO: D28-29-20-04-00-00-00-00-00-00 T254287 #9x9=3-120032012200200120030101200101022012222010211010301011112031102110121120111102012"},
    {info: "INFO: D36-19-16-10-00-00-00-00-00-00 T298705 #9x9=3-000300302300003011203010211130300001021021232210211201002120100103031202210000210"},
    {info: "INFO: D28-28-22-03-00-00-00-00-00-00 T325775 #9x9=3-030011200102201112201012122112121001020210210200121022130221110002101120030012011"},
    {info: "INFO: D28-28-22-03-00-00-00-00-00-00 T498560 #9x9=3-120212003201010032110220300200201101021101120102021102021212102210101021012211101"},
    {info: "INFO: D23-35-23-00-00-00-00-00-00-00 T589183 #9x9=3-211111102011112020012120110210011121021222112100100220121201010002112121210210201"},
    {info: "INFO: D20-43-16-02-00-00-00-00-00-00 T624475 #9x9=3-202103011112021011001211111021021011122101121001111220211110201201111311101210011"},
    {info: "INFO: D25-36-15-05-00-00-00-00-00-00 T693337 #9x9=3-020203001011103012301111110122102111100322021110010110120021012203111111010212011"},
    {info: "INFO: D26-34-16-05-00-00-00-00-00-00 T762546 #9x9=3-003210210000011111330111103021200210210120120121111123101201100010011121222112010"},
    {info: "INFO: D27-31-19-04-00-00-00-00-00-00 T863434 #9x9=3-010201201120030021102003012201321210032010020101102111201220111011111201021112012"},
    {info: "INFO: D29-27-21-04-00-00-00-00-00-00 T949909 #9x9=3-120200302211010210000221012121211201201012012112010122020211101303202111000010030"},
    {info: "INFO: D26-31-22-02-00-00-00-00-00-00 T972656 #9x9=3-120200120021112012011120212121102100201101020102112211120100012111221302102010030"},
    {info: "INFO: D27-30-21-03-00-00-00-00-00-00 T976842 #9x9=3-200012010132102121001020011012212111202103102110000210201231022012201111210101021"},
    {info: "INFO: D30-24-24-03-00-00-00-00-00-00 T978330 #9x9=3-010120120122002102202211021011100302210220311201011200102120000022010312101202120"},
    {info: "INFO: D27-30-21-03-00-00-00-00-00-00 T980043 #9x9=3-002121201310100210022111103010211111201112010012010202121021120020120032212010210"},
    {info: "INFO: D25-33-21-02-00-00-00-00-00-00 T981068 #9x9=3-111213211201000010010220103221212121101001002011120220121111012021021200021120111"},
    {info: "INFO: D22-39-18-02-00-00-00-00-00-00 T981627 #9x9=3-111111201020120111211111013201021210121111100002020211210111102121102201021030021"},
    {info: "INFO: D22-39-18-02-00-00-00-00-00-00 T982424 #9x9=3-112101011120022220103010211110211112111301201112002210111010010120121021021201111"},
    {info: "INFO: D22-41-14-04-00-00-00-00-00-00 T983141 #9x9=3-012111120120011101001301230211121011111111112220121111000300120210113001012021111"},
    {info: "INFO: D31-25-19-06-00-00-00-00-00-00 T983849 #9x9=3-120120210020102011120211111210102010002120320211020103120201210100310003203001230"},
    {info: "INFO: D25-33-21-02-00-00-00-00-00-00 T985219 #9x9=3-102001010020320211111012012202101201120121021021100031102211212201220110210101111"},
    {info: "INFO: D22-39-18-02-00-00-00-00-00-00 T985506 #9x9=3-111021121111301110120021001203001211010211221111012020221112010101111002012012121"},
    {info: "INFO: D23-36-21-01-00-00-00-00-00-00 T990598 #9x9=3-210201210120102011002112020210121021120201211203112001010112011111212112111100201"},
    {info: "INFO: D31-28-13-09-00-00-00-00-00-00 T991701 #9x9=3-130021030200201102003111220003000101030120111021212111301001111302121101003001203"},
    {info: "INFO: D27-31-19-04-00-00-00-00-00-00 T992115 #9x9=3-011111110212112022200200300121020111001212032211001200021121111102010301121020300"},
    {info: "INFO: D28-28-22-03-00-00-00-00-00-00 T994977 #9x9=3-120301210003022002210100121021112210102001022120210211101120010221213012011011020"},
    {info: "INFO: D29-30-15-07-00-00-00-00-00-00 T995328 #9x9=3-102013000201220033110000310111303001012021022210112012112101201111020030111112100"},
    {info: "INFO: D26-33-18-04-00-00-00-00-00-00 T995724 #9x9=3-112030233110101000122202000101010213111120100120120111102020120112112021110201211"},
    {info: "INFO: D27-30-21-03-00-00-00-00-00-00 T996359 #9x9=3-212201211100120102012012010020111300301201202121212010010101120202211113102011020"},
    {info: "INFO: D36-20-14-11-00-00-00-00-00-00 T997024 #9x9=3-012003012011230211310100102022002011201031201110303000110000012012300303220030300"},
    {info: "INFO: D27-31-19-04-00-00-00-00-00-00 T999506 #9x9=3-021112102101100010221021303010320102022011201121202100101020111211102102011112003"},
];

/*****************************************************************************
 * Create game
 *****************************************************************************/
var game = new Game();

/*****************************************************************************
 * Start game from save point
 *****************************************************************************/
level = JSON.parse(localStorage.getItem("game-level"));
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

