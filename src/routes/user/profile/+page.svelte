<script lang="ts">
	import { onMount } from 'svelte';
	import { GetZabbixUserInfo } from './functions';
	import type { IUser, KeyValue } from './profile';
	import { UserFields } from './data';
	import { PageContainer, Fieldset, KeyValueField } from './components';

	let userData: IUser = {
		username: '',
		name: '',
		surname: '',
		ip: '',
		email: '',
		groups: [],
		role: ''
	};
	let fields: Array<KeyValue> = [];

	onMount(() => {
		if (localStorage.getItem('token')) {
			let currentUser = localStorage.getItem('username') || ' ';
			GetZabbixUserInfo().then((response) => {
				response.result.forEach((element) => {
					if (element.username === currentUser) {
						userData.username = element.username;
						userData.name = element.name;
						userData.surname = element.surname;
						userData.ip = element.attempt_ip;
						userData.email = element.medias[0].sendto[0];
						userData.groups = element.usrgrps;
						userData.role = element.role.name;
						fields = UserFields(userData);
					}
				});
			});
		} else {
			location.href = '/';
		}
	});
</script>

<PageContainer Title="Perfil de usuario {userData.name}">
	<Fieldset Properties={{ Legend: 'Información de usuario', Behaviour: 'key__value' }}>
		{#each fields as field}
			<KeyValueField Properties={{ Key: field.Key, Value: field.Value }} />
		{/each}
	</Fieldset>
</PageContainer>
