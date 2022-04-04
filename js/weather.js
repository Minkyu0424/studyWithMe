const API_KEY="9f3f1976fc721cbf0acf60f5608efe89"
function onGeoOk(position){
  const lat=position.coords.latitude;
  const lon=position.coords.longitude;
  const url=`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`;
  fetch(url)
    .then(response => response.json())
    .then((data)=>{
    const weather=document.querySelector("#weather div:last-child");
    const city=document.querySelector("#weather div:first-child");
    city.innerText = `location: ${data.name}`;
    weather.innerText=`weather: ${data.weather[0].main} / temp: ${data.main.temp}`;

  });
}
function onGeoError(){
  alert("요청하신 지역에 대한 정보를 알려줄 수 없습니다.")
}


navigator.geolocation.getCurrentPosition(onGeoOk,onGeoError)
