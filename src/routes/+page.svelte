<script>
	import { getWeatherFrom } from '../services/weather.js';
	import WeatherFooter from '../components/weather-footer.svelte';
	import WeatherIcon from '../components/weather-icon.svelte';

	const weatherPromise = getWeatherFrom();
</script>

{#await weatherPromise then weatherValue}
	<section>
		<h1>{weatherValue.locationName || 'No weather'}</h1>
		<h2>{weatherValue.temperature || 'No Temp'}°</h2>
		<h3>{weatherValue.conditionText || 'No Text'}</h3>
		<WeatherIcon icon={weatherValue.conditionIcon || 'No Icon'} />
	</section>
	<WeatherFooter />
{/await}

<style>
	section {
		padding: 16px;
	}

	h1 {
		font-weight: 400;
		color: #333;
		text-transform: uppercase;
		padding: 32px 0 0 0;
	}

	h2 {
		font-weight: 400;
		font-size: 120px;
		color: #333;
		text-transform: uppercase;
		padding: 0;
	}

	h3 {
		font-weight: 400;
		transform: rotate(-90deg);
		position: absolute;
		top: 5rem;
		right: 12px;
	}
</style>
