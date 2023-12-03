/**
 * NOTES:
 * input is txt file
 * return sum of umbers that are valid part numbers
 * 
 * Approach:
 * split text file into array of arrs separates by \n
 * iterate over matrix
 * as you encounter numbers, append them to a number var if they are next to each other
 * check if each digit is adjacent to a symbol (not .) including diagonally
 * if any of them are, add number to sum
 * do this till you reach the end of the matrix
 * 
 */




function solution(){
    const fs = require("fs")
  
    // Creating a function which takes a file as input
    const readFileLines = filename =>
      fs
        .readFileSync(filename)
        .toString('UTF8')
        .split('\n');
     
    // Driver code
    let data = readFileLines('input.txt');
    let matrix = []
    let result = 0

    // make matrix
    for(let i=0; i<data.length; i++){
        let el = data[i].split('')
        matrix.push(el)
    }

  
    //validate digits found
    function validate(arr){

        for(let i=0; i<arr.length; i++){
            let row = arr[i][0]
            let col = arr[i][1]

            let pattern = /[!@#$%^&*()_+={}\[\]:;<>,?~`\\|/"'`-]/

            //check top
            
            console.log(row, col)
            if(row !== 0 && pattern.test(matrix[row-1][col])){
                return true
            }

            //bottom
            else if(row < matrix.length-1 && pattern.test(matrix[row+1][col])){
                return true
            }

            //left 
            else if(col !== 0 && pattern.test(matrix[row][col-1])){
                return true
            }

            //right
            else if(col !== matrix[0].length && pattern.test(matrix[row][col+1])){
                return true
            }

            //diagonal top left
            else if(row !== 0 && col !==0 && pattern.test(matrix[row-1][col-1])){
                return true
            }

            //diagonal top right
            else if(row !== 0 && col !== matrix[0].length && pattern.test(matrix[row-1][col+1])){
                return true
            }

            //diagonal bottom left
            else if(row < matrix.length-1 && col !== 0 && pattern.test(matrix[row+1][col-1])){
                return true
            }

            //diagonal bottom right
            else if(row < matrix.length-1 && col !== matrix[0].length && pattern.test(matrix[row+1][col+1])){
                return true
            }
        
        }

        return false
    }

    let num = []
    let pos = []

    //iterate over matrix
    for(let r=0; r<matrix.length; r++){

        for(let c=0; c<matrix[0].length; c++){
            if(!isNaN(matrix[r][c])){
                num.push(matrix[r][c])
                pos.push([r,c])
                console.log(num)
            }
          

            else {

                if(num.length) {
               
                 if(validate(pos)){

                    result+= parseInt(num.join(''))
                    num= []
                    pos = []

                    }

                    num= []
                    pos = []  



                }
                else {

                num= []
                pos = []

                }
            }
            
    }
}

    return result
   
}
console.log(solution())