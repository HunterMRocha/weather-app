const request = require('request')

/**
 * Weather Challenge: Retrieve weather information given lat/long
 * Weather Stack API: https://weatherstack.com/quickstart
 * User Enters lat + long: return weather information
 */

const url = 'http://api.weatherstack.com/current?access_key=058d6f074fad58d126c6d9851fcb8d2e&query=37.8267,-122.4233&units=f'

// request({options object}, callback function(error, json_response))
// we would like this request to parse this as json
request({ url: url, json: true }, (err, res) =>{
	try {
		const curr_temp = res.body.current.temperature
		const rain_chance = res.body.current.precip
		console.log(res.body.current.weather_descriptions[0] + "\nIt is currently " + curr_temp + " degrees.\nThere is a " + rain_chance + "% chance of rain.")
		console.log("It feels like " + res.body.current.feelslike + " degrees.")
	}catch(err){
		console.log("unable to make request to weather stack api")
	}
})

/**
 * Geocoding Challenge - Convert Location to Lat/Long
 * User enters Address: return lat/long
 * Use: https://account.mapbox.com/ for API
 * We will be using forward geocoding => address -> lat/long
 */ 


const geo_url = 'https://api.mapbox.com/geocoding/v5/mapbox.places/Fresno.json?access_token=pk.eyJ1IjoiaHVudGVybWFjaWFzIiwiYSI6ImNrbXEyN3IzazA5ZjUycm5uajQ5bWprMnUifQ.7we5XE2RKpd_aL4pyJp-SA&limit=1'
request({url: geo_url, json: true}, (err, res) => {
	try{
		const long = res.body.features[0].center[0]
		const lat = res.body.features[0].center[1] 
		console.log("Longitute: " + long)
		console.log("Latitude: " + lat)
	}catch(err){
		console.log("unable to make request to mapbox api")
	}
})