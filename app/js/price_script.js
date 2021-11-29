 
var area1;

var sum;
var option;
function read0(inputs){
    area1 = inputs.value;
    console.log(area1);
}
function read1(el){ 
    console.log(area1);
   
    option = parseInt(el.id);
    console.log(option);
    sum = area1*option;
    console.log(sum);
    //console.log(document.querySelector("#getDiv span[id]"));
    console.log(document.querySelector("#getDiv span[id]").innerHTML);
    document.querySelector("#getDiv span[id]").innerHTML+=sum.toString();
    console.log(document.querySelector("#getDiv span[id]").innerHTML);
}


function read2(elem){ 
    console.log(elem);
}



