const redSlider=document.getElementById("redSlider");
const greenSlider=document.getElementById("greenSlider");
const blueSlider=document.getElementById("blueSlider");


const redValue=document.getElementById("redValue");
const greenValue=document.getElementById("greenValue");
const blueValue=document.getElementById("blueValue");

const colorBox=document.getElementById("color-box");
const inputType=document.getElementById("inputType");
const copyButton = document.getElementById("copyBtn");



redSlider.addEventListener("input",updateColor);
greenSlider.addEventListener("input",updateColor);
blueSlider.addEventListener("input",updateColor);

copyButton.addEventListener("click",copyValue);

function updateColor(){
    let red=redSlider.value;
    let green=greenSlider.value;
    let blue=blueSlider.value;

    redValue.textContent = red;
    greenValue.textContent = green;
    blueValue.textContent = blue;
    const rgbColor=`rgb(${red},${green},${blue})`;
    colorBox.style.backgroundColor = rgbColor
    inputType.textContent = rgbColor;

}

updateColor()


function copyValue(){



}