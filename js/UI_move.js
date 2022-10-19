
/*****************************************************************************
 * Move helpers
 *****************************************************************************/
function uiMovePosition(event) {
    let X, Y;

    switch (event.type) {
        case "mousedown":
        case "mousemove":
        case "mouseup":
        case "mouseleave":
            X = event.clientX;
            Y = event.clientY;
            break;
        case "touchstart":
        case "touchmove":
        case "touchend":
        case "touchcancel":
            /* Ignore if touched multiple fingers */
            if (event.targetTouches > 1) {
                return undefined;
            }

            X = event.touches[0].clientX;
            Y = event.touches[0].clientY;
            break;
        default:
            return undefined;
    }

    let rect = gameGrid.getBoundingClientRect();
    X -= rect.left;
    Y -= rect.top;
    X = X / gameGridCellSize;
    Y = Y / gameGridCellSize;

    return {X, Y};
}


/*****************************************************************************
 * Move event handlers
 *****************************************************************************/
var movePolarity = undefined;

const toggleTreshold = 0.1;
function uiToggle(event) {
    move = uiMovePosition(event);
    X = move.X;
    Y = move.Y;

    /* Closest wall */
    Xwall = Math.round(X);
    Ywall = Math.round(Y);

    /* Current cell */
    Xcell = Math.floor(X);
    Ycell = Math.floor(Y);

    /* Check limits */
    if (Ycell < 0 || Ycell >= game.board.height ||
        Xcell < 0 || Xcell >= game.board.width) {
        return false;
    }

    /* Direction from wall */
    Xdelta = Math.abs(X - Xwall);
    Ydelta = Math.abs(Y - Ywall);
    if (Xdelta < Ydelta) {
        if (Ydelta - Xdelta > toggleTreshold) {
            /* Vertical wall */
            if (Xwall > 0 && Xwall < game.board.width) {
                movePolarity = game.makeMove("vertical", Xwall, Ycell, movePolarity);
                uiGameRefresh(game);
            }
        }
    } else {
        if (Xdelta - Ydelta > toggleTreshold) {
            /* Horizontal wall */
            if (Ywall > 0 && Ywall < game.board.height) {
                movePolarity = game.makeMove("horizontal", Xcell, Ywall, movePolarity);
                uiGameRefresh(game);
            }
        }
    }
}

function uiMoveStart(event) {
    uiToggle(event);
    return false;
}

/* "paint mode" */
function uiMoveContinue(event) {
    if (movePolarity != undefined) {
        uiToggle(event);
    }

    return false;
}

function uiMoveEnd(event) {
    /* Disable zoom */
    event.preventDefault();

    movePolarity = undefined;
    return false;
}

function uiMoveCancel() {
    movePolarity = undefined;
    return false;
}


/*****************************************************************************
 * Register mouse event handlers
 *****************************************************************************/
window.addEventListener("mousedown",  uiMoveStart);
window.addEventListener("mousemove",  uiMoveContinue);
window.addEventListener("mouseup",    uiMoveEnd);
window.addEventListener("mouseleave", uiMoveCancel);

/*****************************************************************************
 * Register touch event handlers
 *****************************************************************************/
gameBoard.addEventListener("touchstart", uiMoveStart, {passive: true});
gameBoard.addEventListener("touchmove",  uiMoveContinue, {passive: true});
gameBoard.addEventListener("touchend",   uiMoveEnd);



