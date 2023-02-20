
async loadWindow(){ window.addEventListener('DOMContentLoaded', async () => {
        document.getElementById("showMe").style.display= "none";
}
loadWindow();

const weather = {
    API_KEY : '00938e3ee619481c941123119231102',
    //API_KEY : '8e637920d7c1f4ce0b1e',
    convertFrom : '',
    convertTo : '',
    //location : '',
   
    async getWeatherData(cat){
        try{
            // const res = await fetch(`https://free.currconv.com/api/v7/convert?q=${this.convertFrom}_${this.convertTo},${this.convertTo}_${this.convertFrom}&compact=ultra&apiKey=${this.API_KEY}`);
            const res = await fetch(`https://api.weatherapi.com/v1/current.json?key=${this.API_KEY}&q=${cat}&aqi=no`);
            const datas = await res.json();
           return datas ;
           //console.log(datas);
        }
        catch(err){
            console.log(err)
        }
       
        // console.log(res);
    }
}
// var data = weather.getWeatherData();
// console.log(data);

function myFunction()
{
    var place =   document.getElementById("inputs").value;
    if(place !== ''){
var temp = '';
var location_name = '';
var dateTime = '';
var cloud = '';
var longitude = '';
var latitude = '';
var pressure = '';
var humidities = '';
//var time = '';
weather.getWeatherData(place).then(function(result) {
         console.log(result);
        location_name = result.location.name;
        country_name = result.location.country;
        dateTime = result.location.localtime;
        condition_text = result.current.condition.text;
        condition_icon = result.current.condition.icon;
        cloud = result.current.cloud;
        longitude = result.location.lon;
        latitude = result.location.lat;
        pressure = result.current.pressure_mb;
        humidities = result.current.humidity;
         temp = result.current.temp_c;
         shows();
         ampam();
         //console.log(temp);
         document.getElementById("inputs").value = '';
    });
    function shows()
    {
        
        //console.log(temp);
        document.getElementById("loc_name").innerHTML = location_name;
        document.getElementById("country").innerHTML = country_name;
        document.getElementById("datetime").innerHTML = dateTime.substr(0, 10);
        //document.getElementById("time").innerHTML = dateTime.substr(11, 5);
        document.getElementById("temp").innerHTML = temp + "&#176; C";
        document.getElementById("condition").innerHTML = condition_text;
        document.getElementById("cloud").innerHTML = cloud;
        document.getElementById("long").innerHTML = longitude;
        document.getElementById("latt").innerHTML = latitude;
        document.getElementById("press").innerHTML = pressure;
        document.getElementById("humidity").innerHTML = humidities;
        document.getElementById("cond_image").src = condition_icon;
        
    }

    function ampam()
    {
        //console.log(dateTime);
        const d = new Date(dateTime);
        let hours = d.getHours();
        let minu = d.getMinutes();
        minu = minu < 10 ? '0'+minu : minu;
        let ap = hours < 12 ? 'AM' : 'PM';
        hours = hours % 12;
        hours = hours ? hours : 12;
        hours = hours < 10 ? '0'+hours : hours;
        document.getElementById("time").innerHTML = hours + ' : ' + minu + ' ' + ap;
    }
}
else {
    alert("Please enter a valid location to get weather information.");
    document.getElementById("inputs").focus();
    
}
}
// myFunction("London");
//     const d = new Date("2023-02-12 20:12");
// let hour = d.getHours();
// let minures = d.getMinutes();
    //text.substr(1, 4);
