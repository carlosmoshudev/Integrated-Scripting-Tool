<script lang="ts">
	import { GetZabbixUserInfo } from '../../../services/zabbix-api/getters';
	import { onMount } from 'svelte';
	import type { Zabbix_UserGroup } from '../../../types/zabbix-api-interfaces';

	import PageContainer from '../../../framework/containers/page.svelte';

	let showUsername: string,
		showName: string,
		showSurname: string,
		showEmail: string,
		showIP: string,
		showUserGroups: Zabbix_UserGroup[] = [],
		showRole: string,
		cookie: string,
		zabbixToken: string;

	onMount(() => {
		if (localStorage.getItem('token')) {
			let currentUser = localStorage.getItem('username') || ' ';
			zabbixToken = localStorage.getItem('token') || ' ';
			cookie = localStorage.getItem('cookie') || ' ';
			GetZabbixUserInfo().then((response) => {
				response.result.forEach((element) => {
					if (element.username === currentUser) {
						showUsername = element.username;
						showName = element.name;
						showSurname = element.surname;
						showIP = element.attempt_ip;
						showEmail = element.medias[0].sendto[0];
						showUserGroups = element.usrgrps;
						showRole = element.role.name;
					}
				});
			});
		} else {
			location.href = '/';
		}
	});
</script>

<PageContainer>
	<h1>Perfil de {showName}</h1>
	<fieldset>
		<legend>Información de usuario</legend>
		<p>Nombre completo: {showName} {showSurname}</p>
		<p>IP de conexión: {showIP}</p>
		<p>Email: {showEmail}</p>
		<p>Grupos: {showUserGroups.map((group) => group.name)}</p>
		<p>Rol: {showRole}</p>
	</fieldset>
	<fieldset>
		<legend>Información de sesión</legend>
		<p>Nombre de usuario: {showUsername}</p>
		<p>Token de Zabbix: {zabbixToken}</p>
		<p>Cookie de Sesión: {cookie}</p>
	</fieldset>
</PageContainer>

<style>
	* {
		box-sizing: border-box;
	}
	section {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
	}
	fieldset {
		border: 1px solid #ccc;
		border-radius: 5px;
		padding: 40px;
		min-width: 1090px;
		align-items: center;
		justify-content: center;
	}

	legend {
		font-size: 1.2em;
		font-weight: bold;
		margin: 0 0 0 50px;
	}

	p {
		margin: 10px 0;
	}

	h1 {
		font-size: 1.5em;
	}
</style>
