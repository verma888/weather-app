const getForecast = require("./utils/forecast");
const geocode = require('./utils/geocode');

var address = process.argv[2];
if(!address){
    console.log("Please provide an address!!!");
} else {
    geocode(address, (error, {latitude, longitude, location}=response)=>{
        if(error){
            return console.log(error);
        }

        getForecast(latitude,longitude, (err, forecastData)=>{
            if(err){
                return console.log(err);
            }
            console.log(location);
            console.log(forecastData);
            })
    })
}
