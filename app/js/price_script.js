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
    document.querySelector("#getDiv span[id]").innerHTML=("Приблизна собівартість:"+sum.toString()); 
} 
 
function read2(elem){  
    console.log(elem); 
}