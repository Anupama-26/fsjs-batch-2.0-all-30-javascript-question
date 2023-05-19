/*09. Boolean value is either true or false.
    - Write three JavaScript statement example which provide truthy value.
    - Write three JavaScript statement example which provide falsy value. */
    if(Infinity){
        console.log("Truthy value");//truthy value

    }else{
        console.log("falsy value");
    }
    if (new Date()){
        console.log("truthy value");//truthy value


    } else{
        console.log("falsy value");
    }
    if ("false"){
         console.log("Truthy value");//truthy value

    } else{
        console.log("falsy value");
    }
    if([]){
        console.log("truthy value");//truthy value


    } else{
        console.log("falsy value");//
    }
    
    // falsy value
    let falsy;
    if(falsy){
        console.log("truthy value");

    } else{
        console.log("falsy value");
    }
    let falsy2="";
    if (falsy){
          console.log("truthy value");    
    } else{
        console.log("falsy value");
    }

    let falsy3= Infinity/ Infinity;
    if(falsy3){
        console.log("truthy value3");


    }else{
        console.log("falsy value 3");// fasly value
    }
    console.log(typeof Infinity/Infinity);
