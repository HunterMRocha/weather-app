const config = require('../config');
const request = require('request')

const weather_stack_tok = config.WEATHER_STACK_TOKEN

const forcast = (lat, long, callback) => {
	const url = `http://api.weatherstack.com/current?access_key=${weather_stack_tok}` + '&query=' + lat + ',' + long + '&units=f'

	request({ url: url, json: true }, (err, res) =>{
		if(err){
			callback('unable to connect to weather service', undefined)
		}else if(res.body.err){
			callback('unable to find location. Please try again.', undefined)
		}else{
			const visibility = res.body.current.weather_descriptions[0]
			const temp = res.body.current.temperature
			const precip = res.body.current.precip
			const feelslike = res.body.current.feelslike
			const info =  visibility + "\nIt is currently " + temp + " degrees.\nThere is a " + precip + "% chance of rain. It feels like " + feelslike + " degrees."
			callback(undefined, info)
		}		
	})
}

	module.exports = forcast