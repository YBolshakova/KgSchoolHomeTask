const data = {
    a:1,
    b:2,
    c:5,
    v:8,
};

    function deleteProperty(obj , key){
        let result = '';
        for (let prop in obj){
            if(prop === key){
                delete data.prop;}
                else{
                    property = prop + ':' + data[prop]+'\n';
                    result += property;
                    }
            }  
            return result;      
    };

    console.log(deleteProperty(data, 'a'));
