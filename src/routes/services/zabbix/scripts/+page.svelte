<script lang="ts">
	import { onMount } from 'svelte';
	import { GetZabbixScripts } from '../../../../services/zabbix-api/getters';

	let scriptCollection = [];

	onMount(async () => {
		GetZabbixScripts().then((response) => {
			scriptCollection = response.result;
		});
	});
</script>

<section>
	{#each scriptCollection as script}
		<div class="script__container">
			<div class="script__name">Nombre: {script.name || ' N/A'}</div>
			<div class="script__command">Comando: {script.command || ' N/A'}</div>
			<div class="script__description">Descripción: {script.description || ' N/A'}</div>
			<button on:click={() => {}}>Ejecutar</button>
		</div>
	{/each}
</section>

<style>
	section {
		display: grid;
		grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
		grid-template-rows: 1fr;
		grid-template-areas: 'script';
		grid-gap: 10px;
		padding: 10px;
	}

	.script__container {
		display: grid;
		grid-template-columns: 1fr;
		grid-template-rows: 1fr 1fr 1fr;
		grid-template-areas: 'script__name' 'script__command' 'script__description';
		grid-gap: 10px;
		padding: 10px;
		border: 1px solid #ccc;
	}

	.script__name {
		grid-area: script__name;
	}

	.script__command {
		grid-area: script__command;
	}

	.script__description {
		grid-area: script__description;
	}
</style>
