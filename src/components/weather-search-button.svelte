<script>
	import search from '$lib/images/search.svg';
	//import { getWeatherFrom } from '../services/weather.js';
	import { createEventDispatcher } from 'svelte';
	// @ts-ignore
	export let value = '';
	const dispatch = createEventDispatcher();

	function handleClick() {
		// @ts-ignore
		value = document.getElementById('txtSearch').value;
		if (value.length <= 0) value = 'Bogota';
		dispatch('request', {
			text: value
		});
		//alert('buuton');
		//const weatherPromise = getWeatherFrom(value);
		//console.log(weatherPromise);
	}
</script>

<button
	on:click={handleClick}
	class="absolute px-1 py-1 ml-3 text-indigo-500 border-2 border-indigo-500 rounded-full top-6"
	><img width="24px" height="24px" src={search} alt="search" />
</button>
