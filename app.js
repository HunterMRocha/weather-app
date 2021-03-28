const geocode = require('./utils/geocode')
const forcast = require('./utils/forcast')



/**
 * Weather Challenge: Retrieve weather information given lat/long
 * Weather Stack API: https://weatherstack.com/quickstart
 * User Enters lat + long: return weather information
 */

const loc = process.argv[2]
if(loc){
	geocode(loc, (err, data) => {
		if(err){
			return console.log('error', err)
		}
		const long = data.longitude
		const lat = data.latitude
	
		forcast(long, lat, (err, for_data) => {
			if(err){
				return console.log(err)
			}
			console.log("------------------------------------")
			console.log("Location: " + loc)
			console.log(for_data)
			console.log("------------------------------------\n")
				
		})
	})
}else{
	return console.log("Invalid Location: Please try again")
}







