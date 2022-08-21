//function for displaying values
function dis(values) {
    document.getElementById("edu").value += values
}
//function for evaluation
function solve() {
    let x = document.getElementById("edu").value
    let y = eval(x)
    document.getElementById("edu").value = y
}
//function for clearing the display
function clr() {
    document.getElementById("edu").value = ""
}