// ========== MUTATOR METHODS ==========

// ===== myArray.push(itemToAdd) =====
const arr1 = ["🐰", "🐰", "🐰"];
console.log(arr1);
const lengthOfArr1 = arr1.push("🐦"); // adds cat as last index & returns length of the array after adding item.
console.log(arr1);
console.log(lengthOfArr1); // 4

// ===== myArray.pop() =====
const arr2 = [1, 1, 1, 999];
console.log(arr2);
const removedItem = arr2.pop(); // removes last item & return removed item.
console.log(arr2);
console.log(removedItem); // 999

// ===== myArray.shift() =====
const arr3 = ["ABC", ".", ".", "."];
console.log(arr3);
const removedItem1 = arr3.shift(); // removes 0th index item & returns removed item.
console.log(arr3);
console.log(removedItem1); // ABC

// ===== myArray.unshift(itemToAdd) =====
const arr4 = ["o", "o", "o"];
console.log(arr4);
const lengthOfArr4 = arr4.unshift("Z"); // adds Z as 0th index item & returns length of the array after adding item.
console.log(arr4);
console.log(lengthOfArr4); // 4

// ===== myArray.sort() =====
// The sort methods sorts the elements of an array according to ASCII numbers in ascending order.
const arr5 = ["b", "d", "c", "a"];
console.log(arr5);
const sortedArr5 = arr5.sort(); // sorts the original array & returns sorted original array
console.log(arr5);

const numberArr = [15, 2, 3, 25, 539, 43, 3498];
const sortedNumberArr = numberArr.sort();
console.log(sortedNumberArr); // [15, 2, 25, 3, 3498, 43, 539]

// ===== myArray.reverse() =====
const arr6 = ["o", "l", "l", "e", "H"];
console.log(arr6);
const reversedArr6 = arr6.reverse(); // reverses the original array & returns reversed original array.
console.log(arr6);
console.log(reversedArr6);

// ===== myArray.splice(startIndex, deleteCount, itemToAdd) =====
const arr7 = [0, 1, 2, 3, 4, 5, 6, 7];
const removedArrItems7 = arr7.splice(4, 3, "Added"); // deletes and adds items & returns removed items.
console.log(arr7);
console.log(removedArrItems7); // [4, 5, 6]

const arr8 = [0, 1, 2, 3];
const removedArrItems8 = arr8.splice(1);
console.log(arr8); // [0]
console.log(removedArrItems8); // [1, 2, 3]

console.log("-----------------------------");
// Example
const fruits = ["Apple", "Pear", "Banana", "Kiwi"];
fruits.pop(); // removes the "Kiwi" from the array
fruits.push("Pineapple");
fruits.shift(); // removes the "Apple" from the array
fruits.unshift("Strawberry"); // adds as the first item
fruits.reverse();
fruits.sort();
console.log(fruits); // ['Banana', 'Pear', 'Pineapple', 'Strawberry']
fruits.splice(1, 0, "Cherry");
console.log(fruits); // ['Banana', 'Cherry', 'Pear', 'Pineapple', 'Strawberry']
fruits.splice(3, 1, "Apricot");
console.log(fruits); // ['Banana', 'Cherry', 'Pear', 'Apricot', 'Strawberry']
