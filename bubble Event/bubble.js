
var items = document.getElementsByClassName('item');
for (let i = 0; i < items.length; i++) {
    var item = items[i];
    item.addEventListener('click', function (event) {
        event.target.parentNode.removeChild(event.target);
    })
}
document.getElementById('addNew').addEventListener('click', function (event) {
    var itemParent = document.getElementById('myList');
    var newItem = document.createElement('li');
    newItem.innerText = 'Brand New Item';
    itemParent.appendChild(newItem);
})


// document.getElementById('first').addEventListener('click', function (event) {
//     console.log('first item clicked');
// })

document.getElementById('myList').addEventListener('click', function (event) {
    event.target.parentNode.removeChild(event.target);
})