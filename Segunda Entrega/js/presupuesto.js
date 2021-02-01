// JSON & STORAGE
let budgetNumber = prompt('Por favor ingrese el número de presupuesto');
let budgetNumberTag = document.querySelector('.budgetNumberTag');
budgetNumberTag.innerHTML = budgetNumber;

sessionStorage.setItem('Budget Number', 'Presupuesto Nº ' + budgetNumber);

function Presupuesto(designTime,structureTime,constructionTime,testingTime,deployTime,total,designValue,structureValue,constructionValue,testingValue,deployValue,totalValue) {
    this.designTime = designTime;
    this.structureTime =  structureTime;
    this.constructionTime =  constructionTime;
    this.testingTime = testingTime;
    this.deployTime =  deployTime;
    this.total = total;
    this.designValue = designValue;
    this.structureValue = structureValue;
    this.constructionValue = constructionValue;
    this.testingValue = testingValue;
    this.deployValue = deployValue;
    this.totalValue = totalValue;
}

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

    let budgetObject = new Presupuesto(
        document.querySelector('#designTime').value,
        document.querySelector('#structureTime').value,
        document.querySelector('#constructionTime').value,
        document.querySelector('#testingTime').value,
        document.querySelector('#deployTime').value,
        document.querySelector('#total').innerText,
        document.querySelector('#designValue').innerHTML,
        document.querySelector('#structureValue').innerHTML,
        document.querySelector('#constructionValue').innerHTML,
        document.querySelector('#testingValue').innerHTML,
        document.querySelector('#deployValue').innerHTML,
        document.querySelector('#totalValue').innerText
    )
    
    console.log(budgetObject);
    sessionStorage.setItem('Budget', budgetObject);
    console.log(JSON.stringify(budgetObject));
}

// EVENTS

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
