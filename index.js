function handellogin(){
    document.getElementById('transection-area').style.display = "block";
    document.getElementById('login_area').style.display = "none";
}   


// Deposit //

function handleDeposit(){
    var deposit = document.getElementById('deposit_input').value;
    var depositAmount = parseInt(deposit)

    var presentDeposit = document.getElementById('presentDeposit').innerText;
    var presentDepositNumber = parseInt(presentDeposit);

    var totalDeposit = depositAmount + presentDepositNumber;
    document.getElementById('presentDeposit').innerText = totalDeposit;

    var totalBalance = document.getElementById('total_blance').innerText;
    var total_blance_number = parseInt(totalBalance)

    var sub_total = total_blance_number + depositAmount;
    document.getElementById('total_blance').innerText = sub_total;
   
}
 // ----------------withdraw -------------------  //

function handlewithdraw(){
    var withdraw = document.getElementById('withdeaw_input').value;
    var withdrawAmount = parseInt(withdraw);

    var presentWithdrw = document.getElementById('presentWithdrw').innerText;
    var present_Withdrw_number = parseInt(presentWithdrw);

    var tatal_withdraw = withdrawAmount - present_Withdrw_number;
    document.getElementById('presentWithdrw').innerText = tatal_withdraw;

    var total_Blances = document.getElementById('total_blance').innerText;
    var total_sub_blance = parseInt(total_Blances);

    var total = total_sub_blance - withdrawAmount;
    document.getElementById('presentWithdrw').innerText = total;

}