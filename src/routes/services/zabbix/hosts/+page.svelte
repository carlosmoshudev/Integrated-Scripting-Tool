<script lang="ts">
	import { onMount } from 'svelte';
	import { GetZabbixHosts } from '../../../../services/zabbix-api/getters';
	import type { Zabbix_Host } from '../../../../types/zabbix-api-interfaces';

	let hostCollection: Array<Zabbix_Host> = [];

	onMount(async () => {
		GetZabbixHosts().then((response) => {
			hostCollection = response.result;
		});
	});
</script>

<section>
	{#each hostCollection as host}
		<div class="host__container">
			<div class="host__name">{host.name}</div>
			<div class="host__ip">{host.interfaces[0].ip}</div>
		</div>
	{/each}
</section>

<style>
	section {
		display: grid;
		grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
		grid-template-rows: 1fr;
		grid-template-areas: 'host';
		grid-gap: 10px;
		padding: 10px;
	}

	.host__container {
		display: grid;
		grid-template-columns: 1fr;
		grid-template-rows: 1fr 1fr;
		grid-template-areas: 'host__name' 'host__ip';
		grid-gap: 10px;
		padding: 10px;
		border: 1px solid #ccc;
	}

	.host__name {
		grid-area: host__name;
	}

	.host__ip {
		grid-area: host__ip;
	}
</style>
