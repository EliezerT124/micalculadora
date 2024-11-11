function onBtnLimpiar_Click() {
    document.getElementById("valor1").value = "";
    document.getElementById("valor2").value = "";
    document.getElementById("resultado").value = "";
}

function onBtnCalcular_Click() {
    var vr_valor1 = document.getElementById("valor1");
    var vr_valor2 = document.getElementById("valor2");
    var vr_resultado = document.getElementById("resultado");
    var sel_operador = document.getElementById("operador");
 
    if (sel_operador.value == "suma"){
        vr_resultado.value = parseFloat(vr_valor1.value) + parseFloat(vr_valor2.value);
    }
    if (sel_operador.value == "resta"){
        vr_resultado.value = parseFloat(vr_valor1.value) - parseFloat(vr_valor2.value);
    }
    if (sel_operador.value == "division"){
        vr_resultado.value = parseFloat(vr_valor1.value) / parseFloat(vr_valor2.value);
    }
    if (sel_operador.value == "multiplicacion"){
        vr_resultado.value = parseFloat(vr_valor1.value) * parseFloat(vr_valor2.value);
    }
}



