// var matrix3x = [];
// matrix3x[0] = [];
// matrix3x[0][0] = 1;
// matrix3x[0][1] = 2;
// matrix3x[0][2] = 3;

// matrix3x[1] = [];
// matrix3x[1][0] = 4;
// matrix3x[1][1] = 5;
// matrix3x[1][2] = 6;

// matrix3x[2] = [];
// matrix3x[2][0] = 7;
// matrix3x[2][1] = 8;
// matrix3x[2][2] = 9;

// // console.log(matrix3x);

// for(let i = 0; i < matrix3x.length; i++){
//     // console.log(`i: ${matrix3x[i]}`);
//     for(let j = 0; j < matrix3x[i].length; j++){
//         console.log(`j: ${matrix3x[i][j]}`);
//         for(let h = 0; h < matrix3x[i][j].length; h++){
//             console.log(`h: ${matrix3x[i][j][h] = i + j + h}`);
//         }
//     }
// }



var matrix3x3x3 = [];
   for (var i=0; i<3; i++){
     matrix3x3x3[i] = [];
     for (var j=0; j<3; j++){
       matrix3x3x3[i][j] = [];
       for (var z=0; z<3; z++){
         matrix3x3x3[i][j][z] = i+j+z;
       }
} }