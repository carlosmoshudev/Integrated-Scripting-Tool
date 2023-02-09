<script lang="ts">
	import { onMount } from 'svelte';

	onMount(() => {
		localStorage.removeItem('token');
		localStorage.removeItem('username');
		localStorage.removeItem('cookie');
		location.href = '/user/login';
	});
</script>
