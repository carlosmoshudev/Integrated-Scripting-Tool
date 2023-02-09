<script lang="ts">
	import { onMount } from 'svelte';
	import { LogOut } from '../../../services/zabbix-api/actions';

	onMount(() => {
		LogOut();
		localStorage.removeItem('token');
		localStorage.removeItem('username');
		localStorage.removeItem('cookie');
		location.href = '/user/login';
	});
</script>
