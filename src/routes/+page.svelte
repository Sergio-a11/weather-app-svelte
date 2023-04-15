<script>
	// @ts-nocheck

	import { getWeatherFrom } from '../services/weather.js';
	import WeatherFooter from '../components/weather-footer.svelte';
	import WeatherIcon from '../components/weather-icon.svelte';
	import WeatherSearchInput from '../components/weather-search-input.svelte';
	import WeatherSearchButton from '../components/weather-search-button.svelte';

	let weatherPromise = getWeatherFrom();
	// @ts-ignore
	/**
	 * @param {{ detail: { text: any; }; }} event
	 */
	function handleMessage(event) {
		//alert('llego');
		let weatherPromise = getWeatherFrom(event.detail.text ?? 'Bogota');
		weatherPromise.then((data) => {
			console.log(data);
			// @ts-ignore
			document.getElementById('temp').innerHTML = data.temperature + '°';
			document.getElementById('condition_text').innerHTML = data.conditionText;
			document.getElementById('icon').src = data.conditionIcon;
			document.getElementById('humidity').innerHTML = data.humidity;
			document.getElementById('wind_speed').innerHTML = data.windSpeed;
			document.getElementById('feels_like').innerHTML = data.feelsLike;
		});
	}

	//handleMessage();
</script>

{#await weatherPromise then weatherValue}
	<section class="p-5">
		<WeatherSearchInput />
		<WeatherSearchButton on:request={handleMessage} />
		<!--<h1 class="pt-8 text-3xl font-normal text-gray-900 uppercase">
			{weatherValue.locationName || 'No weather'}
		</h1>-->
		<h2 class="mt-5 font-normal text-black uppercase text-9xl" id="temp">
			{weatherValue.temperature || 'No Temp'}°
		</h2>
		<h3
			class="absolute font-normal -rotate-90 top-24 right-3"
			id="condition_text"
		>
			{weatherValue.conditionText || 'No Text'}
		</h3>
		<WeatherIcon icon={weatherValue.conditionIcon || 'No Icon'} />
	</section>
	<WeatherFooter
		humidity={weatherValue.humidity}
		windSpeed={weatherValue.windSpeed}
		feelsLike={weatherValue.feelsLike}
	/>
{/await}

<style lang="postcss">
	/*h1 {
		font-weight: 400;
		color: #333;
		text-transform: uppercase;
		padding: 32px 0 0 0;
	}*/

	/*h2 {
		font-weight: 400;
		font-size: 120px;
		color: #333;
		text-transform: uppercase;
		padding: 0;
	}*/

	/*h3 {
		font-weight: 400;
		transform: rotate(-90deg);
		position: absolute;
		top: 5rem;
		right: 12px;
	}*/
</style>
