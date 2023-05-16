import {API_KEY} from '$env/static/private'
const FETCH_OPTIONS = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': API_KEY,
		'X-RapidAPI-Host': 'weatherapi-com.p.rapidapi.com'
	}
};

export async function GET(event) {
  const { searchParams } = event.url
  const query = searchParams.get('q') ?? 'Bogota'
  const response = await fetch(`https://weatherapi-com.p.rapidapi.com/current.json?q=${query}`, FETCH_OPTIONS)

  const data = await response.json()
  console.log(data);
  const { location, current } = data;
  const { country, localtime, name } = location;
  const {
    condition,
    humidity,
    feelslike_c,
    is_day,
    temp_c,
    wind_kph,
    wind_dir
  } = current;
  const { icon, text, code } = condition;

  const body = {
    conditionIcon: icon,
    conditionText: text,
    conditionCode: code,
    country,
    localtime,
    locationName: name,
    humidity,
    isDay: is_day,
    feelsLike: feelslike_c,
    temperature: temp_c,
    windSpeed: wind_kph,
    windDir: wind_dir
  }

  //console.log(body);

  return new Response(JSON.stringify(body))

  
}

