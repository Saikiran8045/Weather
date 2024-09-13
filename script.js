let cityName=document.getElementById("city-name")
let cityTemp=document.getElementById("city-temp")
let form=document.getElementById("form")
let apiKey="fa6513fce8f622d9f0b66903ee5efbdb"
const weatherImages = {
    "clear sky": "url('https://t4.ftcdn.net/jpg/02/63/06/31/360_F_263063181_dxYmLiuZ6LMZUXF7vLRX4rx7ouICAQcd.jpg')",
    "few clouds": "url('https://png.pngtree.com/thumb_back/fw800/background/20230816/pngtree-a-few-clouds-in-the-sky-image_13056373.jpg')",
    "scattered clouds": "url('https://www.shutterstock.com/image-photo/low-level-cloud-city-skyline-260nw-661150192.jpg')",
    "broken clouds": "url('https://i.pinimg.com/originals/e9/48/9c/e9489cabae5ef3546f3e3f80e79f72f2.jpg')",
    "shower rain": "url('https://t4.ftcdn.net/jpg/05/64/71/61/360_F_564716113_SiDFiav8gtWfNbH4hdj9yvLB6V2lbJA9.jpg')",
    "rain": "url('https://img.freepik.com/premium-vector/vector-cloud-smoke-isolated-transparent-background-rain-bad-weather-curtains-cloud-cloud-smoke-fog-png_156846-1027.jpg')",
    "thunderstorm": "url('https://e7.pngegg.com/pngimages/161/238/png-clipart-lightning-illustration-cloud-lightning-thunder-cartoon-thunder-and-lightning-weather-clouds-painted-cartoon-watercolor-painting-cartoon-character.png')",
    "snow": "url('https://cdn-icons-png.flaticon.com/512/9437/9437943.png')",
    "mist": "url('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSigzOWosgvhMBYJSJ_N3aEDnkEWx0OYa-JeA&s')",
};
form.addEventListener("submit",(e)=>{
    e.preventDefault()
    console.log("city name is",cityName.value)
    let url=`https://api.openweathermap.org/data/2.5/weather?q=${cityName.value}&appid=${apiKey}&units=metric`
    fetch(url)
       .then((res)=>{
        console.log(res)
        return res.json()
       })
       .then ((res)=>{
        console.log(res)
        if(res.cod==='404'){
            alert('City Not Found')
        }
        const div=document.createElement("div")
        div.classList.add("city")
        const {main,sys,name,weather}=res
        let weatherDescription = weather[0].description;
        let backgroundImage = weatherImages[weatherDescription] || "url('https://images.unsplash.com/photo-1509803874385-db7c23652552?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Y2xvdWQlMjBwbmd8ZW58MHx8MHx8fDA%3D')";
        div.style.backgroundImage = backgroundImage;
        let result=`
        <div>
        <h1>${name}</h1>
        <p>
            ${main.temp}<sup>0</sup>C
            ${sys.country}
            ${weather[0].description}
            
        </p>
        </div>
        `
        div.innerHTML=result
        cityTemp.appendChild(div)
    
       })
})