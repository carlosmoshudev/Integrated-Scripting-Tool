<script lang="ts">
	import { GetZabbixUserInfo } from '../../../services/zabbix-api/getters';
	import { onMount } from 'svelte';
	import type { Zabbix_UserGroup } from '../../../types/zabbix-api-interfaces';

	let showUsername: string;
	let showName: string;
	let showSurname: string;
	let showEmail: string;
	let showIP: string;
	let showUserGroups: Zabbix_UserGroup[] = [];
	let showRole: string;
	let cookie: string;
	let zabbixToken: string;

	import PageContainer from '../../../components/containers/page.svelte';
	import Fieldset from '../../../components/fieldset/fieldset.svelte';
	import KeyValueField from '../../../components/fieldset/key-value-field.svelte';

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

<PageContainer Title="Perfil de usuario {showName}">
	<Fieldset Legend="Información de usuario" Type="key__value">
		<KeyValueField Key="Nombre completo" Value="{showName} {showSurname}" />
		<KeyValueField Key="IP de conexión" Value={showIP} />
		<KeyValueField Key="Email" Value={showEmail} />
		<KeyValueField Key="Grupos" Value={showUserGroups.map((group) => group.name).toString()} />
		<KeyValueField Key="Rol" Value={showRole} />
	</Fieldset>
	<Fieldset Legend="Información de sesión">
		<KeyValueField Key="Nombre de usuario" Value={showUsername} />
		<KeyValueField Key="Token de Zabbix" Value={zabbixToken} />
	</Fieldset>
</PageContainer>
