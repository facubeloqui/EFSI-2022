function validar_lengua() {
    let validado = false;
    let ingresado_lengua = parseInt(document.getElementById("lengua").value);
    let input_lengua = document.getElementById("lengua");
    if (ingresado_lengua <= 0 || ingresado_lengua > 10) {
        alert("Ingrese una nota valida para la materia de Lengua");
        input_lengua.style.borderColor="red";
        validado = false;
        console.log(validado);
    } else if (ingresado_lengua >= 1 && ingresado_lengua < 6) {
        validado = true;
        input_lengua.style.borderColor = "green";
        console.log(validado);
    } else if (ingresado_lengua >= 6 && ingresado_lengua <= 10) {
        validado = true;
        input_lengua.style.borderColor = "green";
        console.log(validado);
    } else {
        validado = false;
        console.log(validado);
    }
    return validado;
}

function validar_matematica() {
    let validado = false;
    let ingresado_matematica = parseInt(document.getElementById("matematica").value);
    let input_matematica = document.getElementById("matematica");
    if (ingresado_matematica <= 0 || ingresado_matematica > 10) {
        alert("ingrese un valor valido para la materia de Matematica");
        input_matematica.style.borderColor="red";
        validado = false;
    } else if (ingresado_matematica >= 1 && ingresado_matematica < 6) {
        validado = true;
        input_matematica.style.borderColor = "green";
        console.log(validado);
    } else if (ingresado_matematica >= 6 && ingresado_matematica <= 10) {
        validado = true;
        input_matematica.style.borderColor = "green";
        console.log(validado);
    } else {
        validado = false;
        console.log(validado);
    }
    return validado;
}

function validar_efsi() {
    let validado = false;
    let ingresado_efsi = parseInt(document.getElementById("efsi").value);
    let input_efsi = document.getElementById("efsi");
    if (ingresado_efsi <= 0 || ingresado_efsi > 10) {
        alert("ingrese un valor valido para la materia de EFSI");
        input_efsi.style.borderColor="red";
        validado = false;
    } else if (ingresado_efsi >= 1 && ingresado_efsi < 6) {
        validado = true;
        input_efsi.style.borderColor = "green";
        console.log(validado);
    } else if (ingresado_efsi >= 6 && ingresado_efsi <= 10) {
        validado = true;
        input_efsi.style.borderColor = "green";
        console.log(validado);
    } else {
        validado = false;
        console.log(validado);
    }
    return validado;
}

function valor_efsi(){
    let ingresado_efsi=parseInt(document.getElementById("efsi").value);
    let input_efsi = document.getElementById("efsi");
    if (ingresado_efsi <= 0 || ingresado_efsi > 10) {
        input_efsi.style.borderColor = "red";
    } else if (ingresado_efsi >= 1 && ingresado_efsi < 6) {
        validado = true;
        input_efsi.style.borderColor = "green";
        console.log(validado);
    } else if (ingresado_efsi >= 6 && ingresado_efsi <= 10) {
        validado = true;
        input_efsi.style.borderColor = "green";
        console.log(validado);
    } else {
        validado = false;
        console.log(validado);
    }
}

function valor_matematica(){
    let ingresado_matematica=parseInt(document.getElementById("matematica").value);
    let input_matematica = document.getElementById("matematica");
    if (ingresado_matematica <= 0 || ingresado_matematica > 10) {
        input_matematica.style.borderColor = "red";
    } else if (ingresado_matematica >= 1 && ingresado_matematica < 6) {
        validado = true;
        input_matematica.style.borderColor = "green";
        console.log(validado);
    } else if (ingresado_matematica >= 6 && ingresado_matematica <= 10) {
        validado = true;
        input_matematica.style.borderColor = "green";
        console.log(validado);
    } else {
        validado = false;
        console.log(validado);
    }
}

function valor_lengua(){
    let ingresado_lengua=parseInt(document.getElementById("lengua").value);
    let input_lengua = document.getElementById("lengua");
    if (ingresado_lengua <= 0 || ingresado_lengua > 10) {
        input_lengua.style.borderColor = "red";
    } else if (ingresado_lengua >= 1 && ingresado_lengua < 6) {
        validado = true;
        input_lengua.style.borderColor = "green";
        console.log(validado);
    } else if (ingresado_lengua >= 6 && ingresado_lengua <= 10) {
        validado = true;
        input_lengua.style.borderColor = "green";
        console.log(validado);
    } else {
        validado = false;
        console.log(validado);
    }
}

document.getElementById("efsi").addEventListener("change",valor_efsi);
document.getElementById("matematica").addEventListener("change",valor_matematica);
document.getElementById("lengua").addEventListener("change",valor_lengua);

function calcular_promedio_materias() {
    let matematica = parseInt(document.getElementById("matematica").value);
    let efsi = parseInt(document.getElementById("efsi").value);
    let lengua = parseInt(document.getElementById("lengua").value);
    let promedio = (matematica + lengua + efsi) / 3;
    return promedio;
}

function calcular_mayor_materia() {
    let matematica = parseInt(document.getElementById("matematica").value);
    let efsi = parseInt(document.getElementById("efsi").value);
    let lengua = parseInt(document.getElementById("lengua").value);
    let maximo = Math.max(matematica, efsi, lengua);
    return maximo;
}

function procesar_informacion(e) {
    e.preventDefault();
    let resultado_lengua = validar_lengua();
    let resultado_matematica = validar_matematica();
    let resultado_efsi = validar_efsi();
    if (resultado_lengua && resultado_matematica && resultado_efsi) {
        let resultado = calcular_promedio_materias();
        let elemento=document.getElementById("promedio_total");
        elemento.innerHTML=`Tu promedio total del Año 2022 es : ${resultado.toFixed(2)}`;
        if(resultado>=6){
            elemento.setAttribute("class","color-1");
            document.getElementById("gif").src="https://media.giphy.com/media/26h0pHNtHKjmDo4WQ/giphy.gif";
        }
        else{
            elemento.setAttribute("class","color-2");
            document.getElementById("gif").src="https://media.giphy.com/media/l2JJHMSGcDTDd8go0/giphy.gif";
        }

    }
}

function materia_maxima(e) {
    e.preventDefault();
    let resultado_lengua = validar_lengua();
    let resultado_matematica = validar_matematica();
    let resultado_efsi = validar_efsi();
    let matematica=parseInt(document.getElementById("matematica").value);
    let lengua=parseInt(document.getElementById("lengua").value);
    let efsi=parseInt(document.getElementById("efsi").value);
    if (resultado_efsi && resultado_matematica && resultado_lengua) {
        let materia_mayor_promedio = calcular_mayor_materia();
        if(lengua>matematica && lengua>efsi){
            let elemento=document.getElementById("nota_mas_alta");
            elemento.innerHTML="La materia mas alta es: Lengua";
            elemento.style.color="Blue";
        }
        else if(matematica>lengua && matematica>efsi){
            let elemento=document.getElementById("nota_mas_alta");
            elemento.innerHTML="La materia mas alta es: Matematica";
            elemento.style.color="Blue";
        }
        else if(efsi>lengua && efsi>matematica){
            let elemento=document.getElementById("nota_mas_alta");
            elemento.innerHTML="La materia mas alta es: EFSI";
            elemento.style.color="Blue";
        }
        else if(lengua==matematica && lengua>efsi){
            let elemento=document.getElementById("nota_mas_alta");
            elemento.innerHTML="Las materias mas altas son: Matematica y Lengua";
            elemento.style.color="Blue";
        }
        else if(lengua==efsi && lengua>matematica){
           let elemento=document.getElementById("nota_mas_alta");
            elemento.innerHTML="Las materias mas altas son: Lengua y EFSI";
            elemento.style.color="Blue";
        }
        else if(matematica==efsi && matematica>lengua){
            let elemento=document.getElementById("nota_mas_alta");
            elemento.innerHTML="Las materias mas altas son: Matematica y EFSI";
            elemento.style.color="Blue";
        }
        else{
            let elemento=document.getElementById("nota_mas_alta");
            elemento.innerHTML="Las materias mas altas son: Matematica, Lengua y EFSI";
            elemento.style.color="Blue";
        }
    }
}




document.getElementById("enviar").addEventListener("click", procesar_informacion);
document.getElementById("promedio").addEventListener("click", materia_maxima);