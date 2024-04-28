

function convertTemperature(){
    let val = document.getElementById("input_value");
    let result = document.getElementById("result");
    let output = document.getElementById("output");
    let input = document.getElementById("input");

    val.addEventListener("keyup", convertTemperature);
    input.addEventListener("change", convertTemperature);
    output.addEventListener("change", convertTemperature);

    let inputValue = input.value;
    let outputValue = output.value;

    //Convertendo de Celsius

    if(inputValue === "celsius" && outputValue === "fahrenheit" ){
        result.innerHTML = Number((val.value)* 9 / 5) +32;
    }else if( inputValue === "celsius" && outputValue === "celsius"){
        result.innerHTML = val.value
    }

    //Convertendo de Fahrenheit

    if(inputValue === "fahrenheit" && outputValue === "celsius" ){
        result.innerHTML = Number((val.value -32)* 5/9);
    }else if( inputValue === "fahrenheit" && outputValue === "fahrenheit"){
        result.innerHTML = val.value
    }
}

function reset(){
    convertTemperature();
}