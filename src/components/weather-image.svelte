<!--Hacer una serie de elementos, nubes, lluvia, sol, viento y mostrarlos
segun los parametros si esta nublado(porcentaje), es de dia y tales, solo coger los claves
https://www.weatherapi.com/docs/-->

<script>
	import sunny from '$lib/images/sunny_sm.jpg';
	import cloudy from '$lib/images/cloudy_sm.jpg';
	import rainy from '$lib/images/rainy_sm.jpg';
	import snowy from '$lib/images/snowy_sm.jpg';
	export let code = 0;
	export let isDay = 0;
</script>

<!--HTML-->
{#if code === 1000}
	<!-- despejado-->
	<div
		class="w-3/4 ml-10 h-60 blur-sm"
		id="image"
		style="background-image: url('{sunny}');"
	>
		Hello {code}
		{isDay}
	</div>
{:else if code === 1003 || code === 1006 || code === 1009 || code === 1030 || code === 1069 || code === 1087 || code === 1035 || code === 1135 || code === 1273 || code === 1276 || code === 1279 || code === 1282}
	<!--nublado-->
	<div
		class="w-3/4 ml-10 h-60 blur-sm"
		id="image"
		style="background-image: url('{cloudy}')"
	>
		Hello {code}
		{isDay}
	</div>
{:else if code === 1063 || code === 1069 || code === 1072 || code === 1150 || code === 1153 || code === 1180 || code === 1183 || code === 1186 || code === 1189 || code === 1192 || code === 1195 || code === 1204 || code === 1207 || code === 1240 || code === 1243 || code === 1246 || code === 1249 || code === 1252}
	<!--lloviendo-->
	<div
		class="w-3/4 ml-10 h-60 blur-sm"
		id="image"
		style="background-image: url('{rainy}')"
	/>
{:else}
	<!--nevando-->
	<div
		class="w-3/4 ml-10 h-60 blur-sm"
		id="image"
		style="background-image: url('{snowy}')"
	>
		Hello {code}
		{isDay}
	</div>
{/if}
{#if isDay === 1}
	<div id="sun" />
{:else}
	<div id="moon" />
{/if}

<style>
	#sun {
		position: absolute;
		top: 20em;
		left: 20em;
		width: 15px;
		height: 15px;
		border-radius: 50%;
		background-color: #fff;
		box-shadow: 0 0 20px 10px #f39f18, /* inner white */ 0 0 33px 20px #eeb75e,
			/* middle magenta */ 0 0 46px 30px #f1ddbc; /* outer cyan */
	}

	#moon {
		position: absolute;
		top: 20em;
		left: 20em;
		width: 15px;
		height: 15px;
		border-radius: 50%;
		background-color: #e2e2e2;
		box-shadow: 0 0 10px 5px #dddcdc, /* inner white */ 0 0 16px 10px #e4e3e3,
			/* middle magenta */ 0 0 23px 15px #ffffff; /* outer cyan */
	}

	#image {
		margin-top: 2em;
		border-radius: 10%;
	}
</style>
