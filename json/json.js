fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(json => dsiplayUser(json))

function dsiplayUser(users) {
    const UserName = users.map(user => user.username);
    const ul = document.getElementById("user_contianer");

    for (let i = 0; i < UserName.length; i++) {
        const user = UserName[i];
        const li = document.createElement("li");
        li.innerText = user;
        ul.appendChild(li);
    }
}