/* let noPresupuesto = prompt('Ingrese el número de presupuesto');
alert('Nº Presupuesto' + ' ' + noPresupuesto);

function GetValues (revenue,taxes,advance) {
    this.revenue = revenue;
    this.taxes = taxes;
    this.advance = advance;
    this.advanceCaller = function(){
        var totalAdvance = 0;
        totalAdvance = this.revenue * this.advance;
        console.log('Adelanto ' + totalAdvance);
    };
}

var price = new GetValues(3000000,0.19,0.3);
console.log(price);
price.advanceCaller();

//Costo por hora: 30.000 COP
//Costo por hora adicional: 35.000 COP

function getEstimatedValue () {
    do {
        const valorHora = 30000;
        const valorHoraAdicional = 35000;
        switch(parseInt(prompt('Digite el número correspondiente para seleccionar la opción deseada \n#1 Ingresar tiempo en horas\n#2 Ingresar tiempo adicional en horas\n#3 Revisar el total'))) {
            case 1:
                console.log('Está dentro de la opción 1');
                let estimatedTime = parseInt(prompt('Ingrese tiempo estimado'));
                var total1 = valorHora * estimatedTime;
                console.log(total1);
                break;
            case 2:
                console.log('Está dentro de la opción 2');
                let estimatedAddTime = parseInt(prompt('Ingrese tiempo adicional estimado'));
                var total2 = valorHoraAdicional * estimatedAddTime;
                console.log(total2);
                break;
            case 3:
                let total = total1 + total2;
                console.log('El presupuesto total es: ' + total);
        }
    } while (window.confirm('¿Desea continuar ingresando valores?'));
}

getEstimatedValue(); */

// Arrays

/* function Fase (nombre, tiempo){
    this.nombre = nombre;
    this.tiempo = tiempo;
}

let arrayTiemposEstimados = [
    new Fase('Diseño',18),
    new Fase('Estructural',16),
    new Fase('Construccion',60),
    new Fase('Pruebas',12),
    new Fase('Despliegue',6)
];

let fase = prompt('Digite el número de la fase de diseño a la que desea acceder:\n#1 Diseño\n#2 Estructural\n#3 Construcción\n#4 Pruebas\n#5 Despliegue');
const valorHora = 30000

var total = valorHora * arrayTiemposEstimados[fase-1].tiempo;

console.log('El costo estimado de la fase de ' + arrayTiemposEstimados[fase - 1].nombre + ' es de ' + total + ' COP');

let confirmar = window.confirm('¿Desea ingresar otra fase?');

switch (confirmar) {
    case true:
        let nombre = prompt('Escriba el nombre de la nueva fase');
        let tiempo = parseInt(prompt('Digite el tiempo estimado de esa fase'));
        let newFase = new Fase(nombre, tiempo);
        arrayTiemposEstimados.push(newFase);
        break;
    default:
        break;
}

console.log(arrayTiemposEstimados); */

// DOM

function send(){
    const valorHora = 30000;

    // Diseño
    let designTime = document.querySelector('#designTime').value;
    let designValue = document.querySelector('#designValue');

    designValue.value = designTime * valorHora;
    designValue.innerHTML = '$ ' + (designTime * valorHora) + ' COP';
    
    // Estructura
    let structureTime = document.querySelector('#structureTime').value;
    let structureValue = document.querySelector('#structureValue');

    structureValue.value = structureTime * valorHora;
    structureValue.innerHTML = '$ ' + (structureTime * valorHora) + ' COP';

    // Construcción
    let constructionTime = document.querySelector('#constructionTime').value;
    let constructionValue = document.querySelector('#constructionValue');

    constructionValue.value = constructionTime * valorHora;
    constructionValue.innerHTML = '$ ' + (constructionTime * valorHora) + ' COP';

    // Pruebas
    let testingTime = document.querySelector('#testingTime').value;
    let testingValue = document.querySelector('#testingValue');

    testingValue.value = testingTime * valorHora;
    testingValue.innerHTML = '$ ' + (testingTime * valorHora) + ' COP';

    // Despliegue
    let deployTime = document.querySelector('#deployTime').value;
    let deployValue = document.querySelector('#deployValue');

    deployValue.value = deployTime * valorHora;
    deployValue.innerHTML = '$ ' + (deployTime * valorHora) + ' COP';

    // Total Tiempo
    let totalTime = document.querySelector('#total');

    totalTime.innerHTML = parseInt(designTime) + parseInt(structureTime) + parseInt(constructionTime) + parseInt(testingTime) + parseInt(deployTime);
    
    // Total Valor
    let totalValue = document.querySelector('#totalValue');
    let totalBudget = parseInt(designValue.value) + parseInt(structureValue.value) + parseInt(constructionValue.value) + parseInt(testingValue.value) + parseInt(deployValue.value);

    totalValue.innerHTML = '$ ' + totalBudget + ' COP';

    // Condiciones lógicas
    let licenses = document.querySelector('#licenses');
    let licensesTag = document.querySelector('#licensesTag');
    let changes = document.querySelector('#changes');
    let changesTag = document.querySelector('#changesTag');
    
    if (licenses.value === 0 || licenses.value === '') {
        licensesTag.parentNode.removeChild(licensesTag);
        licenses.parentNode.removeChild(licenses);
    }
    
    if (changes.value === 0 || changes.value === '') {
        changesTag.parentNode.removeChild(changesTag);
        changes.parentNode.removeChild(changes);
    }
}

// Events

let pressEnter = document.getElementById('deployTime');

pressEnter.addEventListener('keypress', (event) => {
    if (event.which === 13 || event.keyCode === 13) {
        send();
    }
});

function sendEmail() {
    let Email = document.querySelector('#inp').value;
    alert('El presupuesto fue enviado al correo ' + Email);
}
