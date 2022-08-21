function Do_Somthing() {
    fetch('http://www.boredapi.com/api/activity/')
        .then(res => res.json())
        .then(data => {
            document.getElementById('activity').innerText = data.activity;
        })
}
Do_Somthing();
setInterval(() => {
    Do_Somthing();
}, 10000);