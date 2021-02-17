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
    let designTime = $("#designTime").val();
    let designValue = $("#designValue");

    designValue.value = designTime * valorHora;
    designValue.html("$ " + (designTime * valorHora) + " COP");
    
    // Estructura
    let structureTime = $("#structureTime").val();
    let structureValue = $("#structureValue");

    structureValue.value = structureTime * valorHora;
    structureValue.html("$ " + (structureTime * valorHora) + " COP");

    // Construcción
    let constructionTime = $("#constructionTime").val();
    let constructionValue = $("#constructionValue");

    constructionValue.value = constructionTime * valorHora;
    constructionValue.html("$ " + (constructionTime * valorHora) + " COP");

    // Pruebas
    let testingTime = $("#testingTime").val();
    let testingValue = $("#testingValue");

    testingValue.value = testingTime * valorHora;
    testingValue.html("$ " + (testingTime * valorHora) + " COP");

    // Despliegue
    let deployTime = $("#deployTime").val();
    let deployValue = $("#deployValue");

    deployValue.value = deployTime * valorHora;
    deployValue.html("$ " + (deployTime * valorHora) + " COP");

    // Total Tiempo
    let totalTime = $("#total");

    totalTime.html(parseInt(designTime) + parseInt(structureTime) + parseInt(constructionTime) + parseInt(testingTime) + parseInt(deployTime));
    
    // Total Valor
    let totalValue = $("#totalValue");
    let totalBudget = parseInt(designValue.value) + parseInt(structureValue.value) + parseInt(constructionValue.value) + parseInt(testingValue.value) + parseInt(deployValue.value);

    totalValue.html("$ " + totalBudget + " COP");

    // Condiciones lógicas
    let licenses = $("#licenses");
    let licensesTag = $("#licensesTag");
    let changes = $("#changes");
    let changesTag = $("#changesTag");
    
    if (licenses.val() === 0 || licenses.val() === '') {
        licensesTag.remove();
        licenses.remove();
    }
    
    if (changes.val() === 0 || changes.val() === '') {
        changesTag.remove();
        changes.remove();
    }

    let budgetObject = new Presupuesto(
        $("#designTime").val(),
        $("#structureTime").val(),
        $("#constructionTime").val(),
        $("#testingTime").val(),
        $("#deployTime").val(),
        $("#total").html(),
        $("#designValue").html(),
        $("#structureValue").html(),
        $("#constructionValue").html(),
        $("#testingValue").html(),
        $("#deployValue").html(),
        $("#totalValue").html()
    )
    
    console.log(budgetObject);
    sessionStorage.setItem('Budget', JSON.stringify(budgetObject));
    console.log(JSON.stringify(budgetObject));
}

// EVENTS & ANIMATIONS

let pressEnter = $("#deployTime");

pressEnter.on('keypress', function(e) {  
    if (e.which == 13) {
        send();
        $(".email").fadeIn(5000);
        $(".sendMail").fadeIn(5000);
        alert('Ingrese el email al que desea enviar su cotización');
    }
});

$(".addition").click(function() {
    $(".adds1").slideToggle(2000);
});

function sendEmail() {
    let Email = $("#inp").val();
    alert('El presupuesto fue enviado exitosamente al correo ' + Email);
}

$(".sendBudget").click(function() {
    $(".email").fadeIn(5000);
    $(".sendMail").fadeIn(5000);
    alert('Ingrese el email al que desea enviar su cotización');
});