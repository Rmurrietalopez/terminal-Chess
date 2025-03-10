class Chessboard{
   protected board:string[][]

    constructor(){
        this.board = [
            ["r","n","b","q","k","b","n","r"],
            ["p","p","p","p","p","p","p","p"],
            Array(8).fill("."),
            Array(8).fill("."),
            Array(8).fill("."),
            Array(8).fill("."),
            ["P","P","P","P","P","P","P","P"],
            ["R","N","B","Q","K","B","N","R"]
        ]
    }


    printBoard(){
        console.log("  0 1 2 3 4 5 6 7")
        this.board.forEach((row,index)=>{
            console.log(index,row.join(" "))
        })
    }
}

let board = new Chessboard
board.printBoard()