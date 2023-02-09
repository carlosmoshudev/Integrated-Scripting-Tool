<script lang="ts">
	import { onMount } from 'svelte';
	import { GetZabbixProblems } from '../../../../services/zabbix-api/getters';

	let problems: any = [];

	onMount(async () => {
		problems = await GetZabbixProblems();
		console.log(problems);
	});
</script>

<section />
