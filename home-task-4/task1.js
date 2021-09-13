const linkedlist={
    value: 1,
    next:{
        value: 2,
        next: {
            value: 3,
            next:{
                value: 5,
                next:null
            }
        }
    }


}

function counter(obj) {
    if (obj == null) {
        return 0;
    }else {
            return obj.value + counter(obj.next);
        }
   
}

console.log(counter(linkedlist));