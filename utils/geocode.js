const config = require('../config');
const request = require('request')


/**
 * Geocoding Challenge - Convert Location to Lat/Long
 * User enters Address: return lat/long
 * Use: https://account.mapbox.com/ to sign up for API
 * We will be using forward geocoding => address -> lat/long
 */ 
 

const geocode_token = config.GEOCODE_TOKEN
const geocode = (location, callback) => {
	const url = 'https://api.mapbox.com/geocoding/v5/mapbox.places/' + location + `.json?access_token=${geocode_token}&limit=1`
	request({url: url, json: true}, (err, res) => {
		if(err){
			callback('Unable to Connect to location services', undefined)
		}else if(res.body.features.length === 0){
			callback("Unable to find location. Try another search", undefined)
		}else{
			callback(undefined, {
				longitute: res.body.features[0].center[0],
				latitude: res.body.features[0].center[1],
				place: res.body.features[0].place_name
			})
		}
	})
}

module.exports = geocode