function compute() {
    // Validate the principal input
    var principal = document.getElementById("principal").value;
    if(principal <= 0) {
        alert("Please, enter a positive number");
        document.getElementById("principal").focus();
        return;
    }
    var rate = document.getElementById("rate").value;
    var years = document.getElementById("years").value;
    // Compute interest value
    var interest = principal * years * rate / 100;
    // Compute the year in which you will gain the resulted interest
    var year = new Date().getFullYear() + parseInt(years);
    // Print the result in the result span using template string
    var result_span = document.getElementById("result");
    result_span.innerHTML = `
    If you deposit <mark>${principal}</mark>, <br>
    at an interest rate of <mark>${rate}%</mark>. <br>
    You will receive an amount of <mark>${interest}</mark>, <br>
    in the year <mark>${year}</mark>
    `;
}

function updateRate() {
    // Update selected interest rate when the user move the slider
    var rateval = document.getElementById("rate").value;
    document.getElementById("rate_val").innerHTML = rateval;
}
        