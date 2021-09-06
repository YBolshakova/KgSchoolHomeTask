function transformObject(obj){
let obj2 = new Object();
let props = Object.keys(obj);
let reversed = props.reverse();
for(i=0;i<reversed.length;i++){
    obj2[obj[reversed[i]]]= reversed[i];
}

return obj2;
}
console.log(transformObject({name: 'Lisa', age: 18, Lastname: 'Jonth'}));