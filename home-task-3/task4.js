function flattenArray(array){
let newArray = Array.prototype.concat.apply([],array);
return newArray;
}
console.log(flattenArray([1,[3],2,[4,5],7]));