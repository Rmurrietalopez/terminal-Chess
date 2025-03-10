type Color= "Black" | "White"

type PieceName = "king" | "queen" | "bishop" | "rook" | "pawn" | "knight"

class Piece{
    name:PieceName
    color:Color

    constructor(name:PieceName,color:Color){
        this.name = name,
        this.color = color
    }
}