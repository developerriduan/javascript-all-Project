const sracrhBtn = document.getElementById('search_btn')
sracrhBtn.addEventListener('click', function () {
    const inputBtn = document.getElementById('input_btn').value;
    fetch('https://api.openweathermap.org/data/2.5/weather?q= ' + inputBtn + ' &appid=a25a8146a72dadb608f412ee085457c4')
        .then(res => res.json())
        .then(data => {
            const cityName = data.name;
            const tem = data.main.temp;
            const temp = tem - 273.15;
            const description = data.weather[0].description;

            document.getElementById('city').innerText = cityName;
            document.getElementById('temp').innerText = temp.toFixed(2);
            document.getElementById('desc').innerText = description;


        })
        .catch(res => alert("Pleas Try Your Correct City Name"))
})