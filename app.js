const output= document.getElementById("result");
const button=document.getElementById("btn");

const typebox=document.getElementById("types");
const deg=document.getElementById("degree");
let c;
let f;

function cal(c,f){
    if(typebox.value=="celsius"){
        c=(parseFloat(deg.value)-32)*5/9
        return output.textContent=c.toFixed(2)

    }
    else{
        f=(parseFloat(deg.value*9/5))+32
        return output.textContent=f.toFixed(2)
    }
}
button.addEventListener("click",function(c,f){
   return cal()
}) 



