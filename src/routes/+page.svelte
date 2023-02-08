<script lamg="ts">
	import { onMount } from 'svelte';

	onMount(() => {
		if (localStorage.getItem('token')) {
			location.href = '/profile';
		} else {
			location.href = '/login';
		}
	});
</script>

<h1>Redirecting...</h1>
