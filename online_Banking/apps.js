// login Button Even Handler //
const login_btn = document.getElementById("login");
login_btn.addEventListener("click", function () {
    const loginAre = document.getElementById("login-area");
    loginAre.style.display = "none";
    transaction_Area.style.display = "block";
})
// Deposited Button Even Handler //
const DepositedBtn = document.getElementById("addDeposited");
DepositedBtn.addEventListener("click", function () {
    const depositedNumber = getInputNumber("DepositedAmount");
    if (depositedNumber < 0) {
        alert("Deposite number connot be")
    }
    else {
        updateSpanText("currentDeposited", depositedNumber);
        updateSpanText("currentBlance", depositedNumber);
        document.getElementById("DepositedAmount").value = "";
    }
})
// withdraw button handler
const withdrawBtn = document.getElementById("addWithdraw");
withdrawBtn.addEventListener("click", function () {
    const withdrawNumber = getInputNumber("withdrawAmount");

    updateSpanText("currentWithdraw", withdrawNumber)
    updateSpanText("currentBlance", -1 * withdrawNumber)
    document.getElementById("withdrawAmount").value = "";
})
function getInputNumber(id) {
    const amount = document.getElementById(id).value;
    const amoountNumber = parseFloat(amount);
    return amoountNumber;
}


function updateSpanText(id, depositedNumber) {
    const current = document.getElementById(id).innerText;
    const currentNumber = parseFloat(current);
    const totalBalnce = depositedNumber + currentNumber;
    document.getElementById(id).innerText = totalBalnce;

}