fetch('https://randomuser.me/api/')
    .then(res => res.json())
    .then(data => {
        const user = data.results[0];
        const name = user.name;
        const userName = `${name.title} ${name.first} ${name.last}`;
        document.getElementById('User_name').innerText = userName;
    })