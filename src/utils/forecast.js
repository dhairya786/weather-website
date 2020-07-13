const request = require('request')

const forecast = (latitude,longitude,callback) =>
{
    const url = 'http://api.weatherstack.com/current?access_key=267741a3b6156fd89a50ee44b631e2bf&query=' + latitude +',' +longitude
    request({url:url,json : true},(error,response) => 
    {
        if(error)
        {
            callback('Unable to connect',undefined)
        }
        else if(response.body.error)
        {
            callback('Invalid coordinates',undefined)
        }
        else
        {
            callback(undefined,{ weather : response.body.current.temperature,description : response.body.current.weather_descriptions[0]})
        }
    })
}

module.exports = forecast