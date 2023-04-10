

export async function getWeatherFrom(query = 'Bogota') {
	return fetch(
		`api/weather?q=${query}`)
		.then((response) => response.json())
}
