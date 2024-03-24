function dis(val){
    document.getElementById("result").value+=val
}
function solve(){ 
    let x = document.getElementById("result").value 
    let y = eval(x) 
    document.getElementById("result").value = y 
}

function sqrt(){ 
    let x = document.getElementById("result").value 
    let y = Math.sqrt(x)
    document.getElementById("result").value = y
}
function pow(){ 
    let x = document.getElementById("result").value 
    let y = Math.pow(x,2)
    document.getElementById("result").value = y 
}
function pi(){
    const Pi=3.14;
    var x=Pi;  
    document.getElementById("result").value +=x
}         
function clr(){
    document.getElementById("result").value = "" 
}

