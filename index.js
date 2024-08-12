

const textBox= document.getElementById("textBox");
const toCelsius= document.getElementById("toCelsius");
const toFahrenheit= document.getElementById("toFahrenheit");
const result= document.getElementById("result");
const submit= document.getElementById("submit");

let temp;
let running=true;
function convert(){

    if(toFahrenheit.checked){
        temp=Number(textBox.value);
        temp=temp*9/5+32;
        result.textContent=temp.toFixed(1)+ "°F";
    }
    else if(toCelsius.checked){
        temp=Number(textBox.value);
        temp=(temp-32)* (5/9);
        result.textContent=temp.toFixed(1)+ "°C";
    }
    else{
        result.textContent("Please Select a Unit");
    }

}
