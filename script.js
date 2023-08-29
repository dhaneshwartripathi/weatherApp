
let loc= document.getElementById("location");
let icon= document.getElementById("temp_icon");
let value= document.getElementById("temp-value");
let climate= document.getElementById("climate");
let iconfile;


const searchInput=document.getElementById("input-box");
const searchbtn=document.getElementById("search-button");

searchbtn.addEventListener('click',(e)=>{

    e.preventDefault();
    getWeather(searchInput.value);
    searchInput.value="";
});



const getWeather = async (city)=>{
    try{
        const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=1fbe49fc64c27ea81e714b8cc17a3525`)


        const wdata=await response.json();

            const{name}=wdata;
             const{feels_like}=wdata.main;
             const{id,main}=wdata.weather[0];

             loc.textContent=name;
             value.textContent=Math.round(feels_like-273);
             climate.textContent=main;

                if(id<300 && id>200){
                    icon.src="./icons/thunderstorm.png";
                }
                else if(id<400 && id>300){
                    icon.src="./icons/cloud.png";
                }
                if(id<600 && id>500){
                    icon.src="./icons/raining.png";
                }
                if(id<800 && id>600){
                    icon.src="./icons/snow.png";
                }
                if(id==800){
                    icon.src="./icons/clear.png";
                }
                console.log(wdata);

    }catch(err){
        alert("city not found")
    }
}

//  fetch Api

window.addEventListener("load",()=>{

    let long;
    let lat;
    const proxy="https://cors-anywhere.herokuapp.com/"

    if(navigator.geolocation){

        navigator.geolocation.getCurrentPosition((pos)=>{
            long = pos.coords.longitude;
            lat = pos.coords.latitude;

            const api=`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&appid=1fbe49fc64c27ea81e714b8cc17a3525`

            fetch(api)
          .then((response) => response.json())
          .then((data) =>{
             const{name}=data;
             const{feels_like}=data.main;
             const{id,main}=data.weather[0];

             loc.textContent=name;
             value.textContent=Math.round(feels_like-273);
             climate.textContent=main;

                if(id<300 && id>200){
                    icon.src="./icons/thunderstorm.png";
                }
                else if(id<400 && id>300){
                    icon.src="./icons/cloud.png";
                }
                else if(id<600 && id>500){
                    icon.src="./icons/raining.png";
                }
                else if(id<800 && id>600){
                    icon.src="./icons/snow.png";
                }
                else if(id==800){
                    icon.src="./icons/clear.png";
                }
                // console.log(id);

          } );

        })

    }
  
})


