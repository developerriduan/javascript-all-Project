function handlerProductChange(product, isIncrease) {
    const ProductInput = document.getElementById(product + '_count');
    const Product_count = parseInt(ProductInput.value);
    let Product_New_count = Product_count;
    if (isIncrease == true) {
        Product_New_count = Product_count + 1;
    }
    if (isIncrease == false && Product_count > 0) {
        Product_New_count = Product_count - 1;
    }
    ProductInput.value = Product_New_count;
    // const caseTotal = Product_New_count * 59;
    let ProductTotal = 0;
    if (product == 'phone') {
        ProductTotal = Product_New_count * 1219;
    }
    if (product == 'case') {
        ProductTotal = Product_New_count * 59;
    }
    document.getElementById(product + '_Total').innerText = '$' + ProductTotal;
}


// document.getElementById('case_increase').addEventListener('click', function () {
//     handlerProductChange(true);

// })

// document.getElementById('case_Decrease').addEventListener('click', function () {

//     handlerProductChange(false);

// })

// function handlerProductChange(isIncrease) {
//     const caseInput = document.getElementById('case_count');
//     const case_count = parseInt(caseInput.value);
//     // const case_New_count = case_count - 1;
//     let case_New_count = case_count;
//     if (isIncrease == true) {
//         case_New_count = case_count + 1;
//     }
//     if (isIncrease == false && case_count > 0) {
//         case_New_count = case_count - 1;
//     }
//     caseInput.value = case_New_count;
//     const caseTotal = case_New_count * 59;
//     document.getElementById('case_Total').innerText = '$' + caseTotal;
// }
// // ---------------------------------------------------------------------------------
// // document.getElementById('phone_increas').addEventListener('click', function () {
// //     handealproductChange(true);
// // })
// // document.getElementById('phone_decreas').addEventListener('click', function () {
// //     handealproductChange(false);
// // })
// function handealproductChange(phoneIncreas) {
//     const phone_Input = document.getElementById('phone_count');
//     const phone_count = parseInt(phone_Input.value);
//     let phone_case_New_count = phone_count;
//     if (phoneIncreas == true) {
//         phone_case_New_count = phone_count + 1
//     }
//     if (phoneIncreas == false && phone_count > 0) {
//         phone_case_New_count = phone_count - 1
//     }
//     phone_Input.value = phone_case_New_count;
//     const phone_total = phone_case_New_count * 1219;
//     document.getElementById('phone_total').innerText = '$' + phone_total;
// }

// document.getElementById('case_Decrease').addEventListener('click', function () {
//     const caseInput = document.getElementById('case_count');
//     const case_count = parseInt(caseInput.value);
//     const case_New_count = case_count - 1;
//     caseInput.value = case_New_count;
//     const caseTotal = case_New_count * 59;
//     document.getElementById('case_Total').innerText = '$' + caseTotal;


// })


// document.getElementById('case_increase').addEventListener('click', function () {
//     const caseInput = document.getElementById('case_count');
//     const case_count = parseInt(caseInput.value);
//     const case_New_count = case_count + 1;
//     caseInput.value = case_New_count;
//     const caseTotal = case_New_count * 59;
//     document.getElementById('case_Total').innerText = '$' + caseTotal;

// })