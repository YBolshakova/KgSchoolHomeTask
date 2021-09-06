function ellipsis(text, max){
    let lenght = text.length;
    if(lenght>max){
        let newText = text.substring(0,max);
        return newText+'...';   
    }else{
        return text;
    }

}
console.log(ellipsis('Hello', 3));
console.log(ellipsis('Hello my friends!!!', 10));
console.log(ellipsis('Hello', 10));