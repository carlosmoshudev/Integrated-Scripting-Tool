<script lang="ts">
	import { onMount } from 'svelte';
	import { GetZabbixUserInfo } from '../../../../services/zabbix-api/getters';
	import type { IZabbixUserGetResult } from '../../../../types/zabbix-api-interfaces';

	let userCollection: Array<IZabbixUserGetResult> = [];

	onMount(async () => {
		GetZabbixUserInfo().then((response) => {
			userCollection = response.result;
		});
	});
</script>

<section>
	{#each userCollection as user}
		<div class="user__container">
			<div class="user__name">Usuario: {user.username || ' N/A'}</div>
			<div class="user__ip">IP: {user.attempt_ip || ' N/A'}</div>
			<div class="user__whole__name">Nombre: {user.name + ' ' + user.surname || ' N/A'}</div>
			<div class="role">Rol: {user.role.name || ' N/A'}</div>
		</div>
	{/each}
</section>

<style>
	section {
		display: grid;
		grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
		grid-template-rows: 1fr;
		grid-template-areas: 'user';
		grid-gap: 10px;
		padding: 10px;
	}

	.user__container {
		display: grid;
		grid-template-columns: 1fr;
		grid-template-rows: 1fr 1fr 1fr 1fr;
		grid-template-areas: 'user__name' 'user__ip' 'user__whole__name' 'role';
		grid-gap: 10px;
		padding: 10px;
		border: 1px solid #ccc;
	}

	.user__name {
		grid-area: user__name;
	}

	.user__ip {
		grid-area: user__ip;
	}

	.user__whole__name {
		grid-area: user__whole__name;
	}

	.role {
		grid-area: role;
	}
</style>
