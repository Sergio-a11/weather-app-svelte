<footer>
	<div>
		<span> 33% </span>
		<strong> Humidity </strong>
	</div>

	<div>
		<span> 12 km/h </span>
		<strong> windspeed </strong>
	</div>

	<div>
		<span> 12° </span>
		<strong> Feels like </strong>
	</div>
</footer>

<style>
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
