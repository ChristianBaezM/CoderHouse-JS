// JSON & STORAGE
$( document ).ready(function(){
    $("#myModal").click();
}); 

$("#budgetNumberBtn").click(function(){
    let budgetNumber = $("#budgetNumber").val();
    $("#budgetNumber").val(budgetNumber);
    let budgetNumberTag = $(".budgetNumberTag");
    budgetNumberTag.html(budgetNumber);
    sessionStorage.setItem('Budget Number', 'Presupuesto Nº ' + budgetNumber);
    $("#exampleModal").modal('toggle');
});

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
    
    if (licenses.val() === '0' || licenses.val() === '') {
        licensesTag.remove();
        licenses.remove();
    }
    
    if (changes.val() === '0' || changes.val() === '') {
        changesTag.remove();
        changes.remove();
    }

    // Additions
    let subTotal = $("#subtotal");
    let subTotalValue = parseInt(totalBudget) + parseInt(licenses.val()) + parseInt(changes.val());

    subTotal.html("$ " + subTotalValue + " COP");

    let taxesTag = $("#taxes");
    let taxes = parseInt(subTotalValue) * 0.19;

    taxesTag.html("$ " + taxes + " COP");

    let finalBudget = $("#totalBudget");
    let finalBudgetValue = parseInt(subTotalValue) + parseInt(taxes);

    finalBudget.html("$ " + finalBudgetValue + " COP");

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

let pressEnter = $("#changes");

pressEnter.on('keypress', function(e) {  
    if (e.which == 13) {
        send();
        $(".email").fadeIn(5000);
        $(".sendMail").fadeIn(5000);
        $("#myModal1").click();
    }
});

$("#budgetNumberBtn1").click(function(){
    $("#exampleModal1").modal('toggle');
});

$("#budgetNumberBtn2").click(function(){
    $("#exampleModal2").modal('toggle');
});

$(".addition").click(function() {
    $(".adds1").slideToggle(2000);
});

function isValidEmailAddress(emailAddress) {
    var pattern = new RegExp(/^(("[\w-+\s]+")|([\w-+]+(?:\.[\w-+]+)*)|("[\w-+\s]+")([\w-+]+(?:\.[\w-+]+)*))(@((?:[\w-+]+\.)*\w[\w-+]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][\d]\.|1[\d]{2}\.|[\d]{1,2}\.))((25[0-5]|2[0-4][\d]|1[\d]{2}|[\d]{1,2})\.){2}(25[0-5]|2[0-4][\d]|1[\d]{2}|[\d]{1,2})\]?$)/i);
    return pattern.test(emailAddress);
};

function sendEmail() {
    let emailValidation = $(".email").val();
    if (emailValidation !== '' || emailValidation === '') {
        if (!isValidEmailAddress(emailValidation)) {
            $("#myModal1").click();
        } else {
            let email = $("#inp").val();
            $(".modal-body").html('El presupuesto fue enviado exitosamente al correo ' + email);
            $(".modal-body").prepend("&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;");
            $(".modal-body").prepend('<img src="https://img.icons8.com/dusk/64/000000/send-mass-email.png"/>');
            $("#myModal2").click();
            $("#inp").attr('disabled', 'disabled');
            $(".sendMail").prop('disabled', true);
            $(".sendBudget").prop('disabled', true);
            $(".sendMail").css('opacity', '0.2');
            $(".sendBudget").css('opacity', '0.2');
        }   
    }
};

$(".sendBudget").click(function() {
    $(".email").fadeIn(5000);
    $(".sendMail").fadeIn();
    $("#myModal1").click();
});