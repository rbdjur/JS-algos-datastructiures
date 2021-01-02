let testScores = [];
testScores[0] = [];
testScores[0][0] = 80;
testScores[0][1] = 81;
testScores[0][2] = 82;

testScores[1] = [];
testScores[1][0] = 83;
testScores[1][1] = 84;
testScores[1][2] = 85;

// console.log(testScores[0][0]);
// console.log(testScores[1][1]);

for (let i = 0; i < testScores.length ; i++) {
    console.log(`testScores[i]: ${testScores[i]}`);
    for (let j = 0; j < testScores[i].length ; j++) {
        console.log(`testScores[i][j] ${testScores[i][j]}`);
    }
}