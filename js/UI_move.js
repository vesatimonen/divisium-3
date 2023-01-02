
/*****************************************************************************
 * Move helpers
 *****************************************************************************/
function uiMovePosition(event) {
    let X, Y;

    switch (event.type) {
        case "click":
            X = event.clientX;
            Y = event.clientY;
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
 * Event handlers
 *****************************************************************************/
function uiClick(event) {
    /* Get clock position */
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
        if (Ydelta - Xdelta > 0.0) {
            /* Vertical wall */
            if (Xwall > 0 && Xwall < game.board.width) {
                game.makeMove("vertical", Xwall, Ycell);
                uiGameRefresh(game);
            }
        }
    } else {
        if (Xdelta - Ydelta > 0.0) {
            /* Horizontal wall */
            if (Ywall > 0 && Ywall < game.board.height) {
                game.makeMove("horizontal", Xcell, Ywall);
                uiGameRefresh(game);
            }
        }
    }
}

gameBoard.addEventListener("click", uiClick, {passive: true});




