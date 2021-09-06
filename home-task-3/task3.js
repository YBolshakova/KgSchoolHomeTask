function uniqueArray(array){
    array.sort();
    let uniquedata = [...new Set(array)];
    return uniquedata;
}
console.log(uniqueArray([1,5,7,3,4,4,6,7,8,1,2,9]));