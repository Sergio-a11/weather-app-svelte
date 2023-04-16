<script>
	export let location = 'No data available';
	export let temperature = 'No data available';
	export let conditionText = 'No data available';
</script>

<h1 class="pt-8 text-3xl font-normal text-gray-900 uppercase" id="name">
	{location}
</h1>
<h2 class="mt-5 font-normal text-black uppercase text-9xl" id="temp">
	{temperature}°
</h2>
<h3 class="absolute font-normal -rotate-90 top-24 right-3" id="condition_text">
	{conditionText}
</h3>
