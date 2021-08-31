function extend(obj1, obj2){
    if((typeof(obj1) == 'object')&&(typeof(obj2) == 'object')){

        let arg = Object.keys(obj1);
        for(i=0;i<arg.length;i++){
            let temp = arg[i];
            if(temp in obj2){
                delete obj2[temp];
            }
        }
    
        return Object.assign(obj1, obj2);        
    }else if((typeof(obj2) !== 'object')&&(typeof(obj1) == 'object')){
        return Object.assign(obj1, {});
    }else if((typeof(obj1) !== 'object')&&(typeof(obj2) == 'object')) {
            return Object.assign(obj2, {});
        }
    else{
        console.log("The arguments are not objects")
        return Object.assign({}, {});
    }
}

console.log(extend({a:1,b:11,c:13,h:14},{a:5,g:51,h:52}));
console.log(extend({a:1,b:11,c:13,h:14},'test'));
console.log(extend('test', {a:2,b:22,c:23,h:24}));
console.log(extend('test','test'));