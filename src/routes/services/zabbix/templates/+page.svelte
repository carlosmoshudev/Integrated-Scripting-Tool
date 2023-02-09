<script lang="ts">
	import { onMount } from 'svelte';
	import { GetZabbixTemplates } from '../../../../services/zabbix-api/getters';

	let templateCollection = [];

	onMount(async () => {
		GetZabbixTemplates().then((response) => {
			templateCollection = response.result;
		});
	});
</script>

<section>
	{#each templateCollection as template}
		<div class="template__container">
			<div class="template__name">{template.name}</div>
		</div>
	{/each}
</section>

<style>
	section {
		display: grid;
		grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
		grid-template-rows: 1fr;
		grid-template-areas: 'template';
		grid-gap: 10px;
		padding: 10px;
	}

	.template__container {
		display: grid;
		grid-template-columns: 1fr;
		grid-template-rows: 1fr;
		grid-template-areas: 'template__name';
		grid-gap: 10px;
		padding: 10px;
		border: 1px solid #ccc;
	}

	.template__name {
		grid-area: template__name;
	}
</style>
