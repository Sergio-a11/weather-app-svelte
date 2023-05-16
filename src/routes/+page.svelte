<script>
	// @ts-nocheck

	import { getWeatherFrom } from '../services/weather.js';
	import WeatherFooter from '../components/weather-footer.svelte';
	import WeatherIcon from '../components/weather-icon.svelte';
	import WeatherSearchInput from '../components/weather-search-input.svelte';
	import WeatherSearchButton from '../components/weather-search-button.svelte';
	import WeatherInfo from '../components/weather-info.svelte';
	import WeatherImage from '../components/weather-image.svelte';

	let new_request = false;
	let requestData;

	let weatherPromise = getWeatherFrom();
	// @ts-ignore
	/**
	 * @param {{ detail: { text: any; }; }} event
	 */
	function handleMessage(event) {
		let weatherPromise = getWeatherFrom(event.detail.text ?? 'Bogota');
		weatherPromise.then((data) => {
			requestData = data;
			new_request = true;
			console.log(data);
		});
	}
</script>

{#await weatherPromise then weatherValue}
	<section class="p-5">
		<WeatherSearchInput />
		<WeatherSearchButton on:request={handleMessage} />
		{#if new_request === true}
			<WeatherInfo
				location={requestData.locationName}
				country={requestData.country}
				temperature={requestData.temperature}
				conditionText={requestData.conditionText}
			/>
			<!-- <WeatherIcon icon={requestData.conditionIcon || 'No Icon'} /> -->
			<WeatherImage
				code={requestData.conditionCode}
				isDay={requestData.isDay}
			/>
		{:else}
			<WeatherInfo
				location={weatherValue.locationName}
				country={weatherValue.country}
				temperature={weatherValue.temperature}
				conditionText={weatherValue.conditionText}
			/>
			<!--<WeatherIcon icon={weatherValue.conditionIcon || 'No Icon'} />-->
			<WeatherImage
				code={weatherValue.conditionCode}
				isDay={weatherValue.isDay}
			/>
		{/if}
	</section>
	{#if new_request === true}
		<WeatherFooter
			humidity={requestData.humidity}
			windSpeed={requestData.windSpeed}
			feelsLike={requestData.feelsLike}
		/>
	{:else}
		<WeatherFooter
			humidity={weatherValue.humidity}
			windSpeed={weatherValue.windSpeed}
			feelsLike={weatherValue.feelsLike}
		/>
	{/if}
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
