function Add(Operator) {
    let Input = document.getElementById("INP");

    if (Input && Operator != "" ) {
        Input.value += Operator;
    } else {
        alert("Error")
    }
}

function Result() {
    let Input = document.getElementById("INP");

    if (Input.value != "") {
        let result = Input.value.replace(/x/g, '*').replace(/÷/g, '/');
        if (!result) {
            alert('Cant Find Result');
        } else {
            Input.value = eval(result)
        }
    }
}

function Clear() {
    let Input = document.getElementById("INP");

    Input.value = "";
}

console.log("ASFDWK")