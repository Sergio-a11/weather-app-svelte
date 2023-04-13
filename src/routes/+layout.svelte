<script>
	import '../app.css';
</script>

<div>
	<slot />
</div>

<style lang="postcss">
	:global(body) {
		background: #fdfdfd;
		display: grid;
		font-family: 'Segoe UI', system-ui, -apple-system, BlinkMacSystemFont,
			Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue',
			sans-serif;
		place-content: center;
		margin: 0;
		min-height: 100vh;
	}

	:global(h1, h2, h3, h4, h5, h6) {
		margin: 0;
	}

	:global(*, *::after, *::before) {
		box-sizing: border-box;
	}

	div {
		aspect-ratio: 9/16;
		width: 400px;
		max-width: 100%;
		border: 1px solid #eee;
		display: block;
		box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
		border-radius: 8px;
		position: relative;
	}
</style>
