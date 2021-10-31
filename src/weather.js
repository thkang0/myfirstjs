
API_KEY = "f8070b0febc9332f71cef538db137728";

function onGeoOk(position){
    const lat = position.coords.latitude;
    const lon = position.coords.longitude;
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`;
    console.log(url);
    fetch(url).then(response => response.json()).then(data => {
        const weather = document.querySelector("#weather span:first-child");
        const city = document.querySelector("#weather span:last-child");

        city.innerText = `in ${data.name}`;
        weather.innerText = `${data.weather[0].main} / ${data.main.temp}℃`;
    });

}
function onGeoError(){
    alert("Error to get Geolocation");
}

navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError);