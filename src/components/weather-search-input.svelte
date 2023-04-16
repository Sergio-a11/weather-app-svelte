<script>
	export let value = '';
</script>

<input
	type="search"
	name="txtSearch"
	id="txtSearch"
	{value}
	placeholder="Bogota"
	class="flex-1 w-7/12 pt-1 pb-1 pl-3 text-lg font-normal text-gray-900 placeholder-gray-400 uppercase border border-indigo-500 shadow-sm rounded-xl focus:outline-none focus:ring-2 focus:ring-gray-700 focus:border-transparent"
/>

<style>
	input::-webkit-search-cancel-button {
		position: relative;
		right: 0.5rem;

		-webkit-appearance: none;
		height: 20px;
		width: 20px;
		border-radius: 10px;
		background: rgba(99, 102, 241, 0.5);
	}
</style>
