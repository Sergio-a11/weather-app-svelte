<script>
	export let humidity = 'No data available';
	export let windSpeed = 'No data available';
	export let feelsLike = 'No data available';
</script>

<footer>
	<div>
		<span> {humidity} </span>
		<strong> Humidity </strong>
	</div>

	<div>
		<span> {windSpeed} km/h </span>
		<strong> Wind speed </strong>
	</div>

	<div>
		<span> {feelsLike}° </span>
		<strong> Feels like </strong>
	</div>
</footer>

<style lang="postcss">
	footer {
		border: 2px solid #000;
		padding: 12px 32px;
		width: 80%;
		margin: 0 auto;
		border-radius: 10px;
		display: flex;
		text-align: center;
		justify-content: space-between;
		position: absolute;
		left: 0;
		right: 0;
		bottom: 32px;
	}

	span {
		display: block;
		font-weight: 600;
		font-size: 14px;
	}

	strong {
		font-weight: 500;
		font-size: 14px;
		color: #444;
	}
</style>
