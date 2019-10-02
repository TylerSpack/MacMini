// function longestWord(...words){
//     let word = words[0];
//     for (let i = 1; i < words.length; i++)
//     {
//         if (words[i].length > word.length){
//             word = words[i];
//         }
//     }
//     return word;
// }
// console.log(longestWord('hi', 'yes' , 'sdkfdjkfd'));

function doubleAndSquare(fn, num){
    return fn(num) * fn(num);
}
let result = doubleAndSquare(function(numb){return numb + numb}, 5);
console.log(result);