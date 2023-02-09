<script lang="ts">
	import { onMount } from 'svelte';
	import { GetZabbixHostGroups } from '../../../../services/zabbix-api/getters';

	import type { Zabbix_HostGroup } from './../../../../types/zabbix-api-interfaces';

	let hostGroupCollection: Array<Zabbix_HostGroup> = [];

	onMount(async () => {
		GetZabbixHostGroups().then((response) => {
			hostGroupCollection = response.result;
		});
	});
</script>

<section>
	{#each hostGroupCollection as hostGroup}
		<div class="host-group__container">
			<div class="host-group__name">{hostGroup.name}</div>
			<div class="host-group__id">{hostGroup.groupid}</div>
		</div>
	{/each}
</section>

<style>
	section {
		display: grid;
		grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
		grid-template-rows: 1fr;
		grid-template-areas: 'host-group';
		grid-gap: 10px;
		padding: 10px;
	}

	.host-group__container {
		display: grid;
		grid-template-columns: 1fr;
		grid-template-rows: 1fr;
		grid-template-areas: 'host-group__name';
		grid-gap: 10px;
		padding: 10px;
		border: 1px solid #ccc;
	}

	.host-group__name {
		grid-area: host-group__name;
	}
</style>
