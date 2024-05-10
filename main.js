function Suma() {
    var N1 = parseInt(prompt("Ingrese el primer numero para sumar", ""));
    var N2 = parseInt(prompt("Ingrese el segundo numero para sumar", ""));
    console.log("El resultado de la suma es: ", N1 + N2)
}

function Resta() {
    var N1 = parseInt(prompt("Ingrese el primer numero para resta", ""));
    var N2 = parseInt(prompt("Ingrese el segundo numero para restar", ""));
    console.log("El resultado de la resta es: ", N1 - N2)
}


function Multiplicar() {
    var N1 = parseInt(prompt("Ingrese el primer numero para multiplicar", ""));
    var N2 = parseInt(prompt("Ingrese el segundo numero para multiplicar", ""));
    console.log("El resultado de la resta es: ", N1 * N2)
}

function Dividir() {
    var N1 = parseInt(prompt("Ingrese el primer numero para dividir", ""));
    var N2 = parseInt(prompt("Ingrese el segundo numero para dividir", ""));
    console.log("El resultado de la resta es: ", N1 / N2)
}


function Edad() {
    // var n = prompt("Introduce tu edad").valueOf
    var n = parseInt(prompt("Introduce tu edad"));
    // console.log(n)

    if( n >= 18) {
        alert("Ya eres adulto")
    } else {
        alert("Aun eres menor")
    }
}


function Calcular() {
    var refranes = ["El que la sigue la consigue",
        "Más vale prevenir que curar",
        "Quien todo lo quiere, todo lo pierde",
        "No por mucho madrugar amanece más temprano",
        "Persona prevenida vale por dos"];
    var indice = 0;
    setInterval(MuestraSiguienteRefran, 3000);
    function MuestraSiguienteRefran() {
        indice++;
        if (indice > refranes.length) {
            indice = 0;
        }
        document.getElementById("salida").innerHTML = refranes[indice];
    }
}



    function Ejemplo() {
        var array = []
        for (i = 0; i < 5; i++) {
            array.push(parseInt(Math.random() * 100));
        }
        document.getElementById("array").value = array;
    }



    function Ordenar() {
        var nun1 = document.getElementById("nun1").value
        var nun2 = document.getElementById("nun2").value
        var nun3 = document.getElementById("nun3").value
        // console.log(nun1, nun2, nun3)

        var array = []
        array.push(nun1, nun2, nun3)
        // console.log(array)
        for (j = 0; j < array.length; j++) {
            for (i = 0; i < array.length; i++) {
                if (array[i] > array[i + 1]) {
                    aux = array[i];
                    array[i] = array[i + 1];
                    array[i + 1] = aux;
                }
            }
        }
        document.getElementById("resultado").innerHTML = array;
    }


    

function down(n) {
    var n = prompt("Introduce los números que deseas que contenga el array");
    var array = [];
    down(n);
    for (i = n; i >= 1; i++) {
        array.push(i);
    }
    console.log(array)
}




