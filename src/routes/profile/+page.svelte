<script lang="ts">
	import { GetZabbixUserInfo } from '../../services/login';
	import { onMount } from 'svelte';
	let userdata = {
		username: ' ',
		cookie: ' ',
		zabbixToken: ' ',
		name: ' ',
		surname: ' ',
		ip: ' ',
		email: ' ',
		userGroups: [{ name: ' ' }],
		role: ' '
	};
	onMount(() => {
		if (localStorage.getItem('token')) {
			userdata.username = localStorage.getItem('username') || ' ';
			userdata.zabbixToken = localStorage.getItem('token') || ' ';
			userdata.cookie = localStorage.getItem('cookie') || ' ';
			GetZabbixUserInfo().then((res) => {
				res.result.forEach((element: any) => {
					if (element.username === userdata.username) {
						userdata.name = element.name;
						userdata.surname = element.surname;
						userdata.ip = element.attempt_ip;
						userdata.email = element.medias[0].sendto[0];
						userdata.userGroups = element.usrgrps;
						userdata.role = element.role.name;
						console.log(element);
					}
				});
			});
		} else {
			location.href = '/';
		}
	});
</script>

<section>
	<h1>Perfil de {userdata.name}</h1>
	<fieldset>
		<legend>Información de usuario</legend>
		<p>Nombre completo: {userdata.name} {userdata.surname}</p>
		<p>IP de conexión: {userdata.ip}</p>
		<p>Email: {userdata.email}</p>
		<p>Grupos: {userdata.userGroups.map((group) => group.name)}</p>
		<p>Rol: {userdata.role}</p>
	</fieldset>
	<fieldset>
		<legend>Información de sesión</legend>
		<p>Nombre de usuario: {userdata.username}</p>
		<p>Token de Zabbix: {userdata.zabbixToken}</p>
		<p>Cookie de Sesión: {userdata.cookie}</p>
	</fieldset>
</section>

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
