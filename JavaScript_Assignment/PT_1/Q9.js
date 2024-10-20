const arr = [1, 2, 999, 56, "Mithun", 1234, "PW"];
let firstString = null;

for (let i=0; i<arr.length; i++){
    if (typeof arr[i] === 'string'){
        firstString = arr[i];
        break;
    }
}

console.log(firstString);



// let items = [100, "ball", 200, "stump", "gloves"];
// let secondString = null;
// let stringCount = 0;

// for (let i = 0; i < items.length; i++) {
//     if (typeof items[i] === 'string') {
//         stringCount++;
//         if (stringCount === 2) {
//             secondString = items[i];
//             break; 
//         }
//     }
// }

// console.log(secondString);
