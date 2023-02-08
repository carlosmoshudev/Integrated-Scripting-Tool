<script lang="ts">
	import { onMount } from 'svelte';

	const t = 'token';
	const ok = '/profile';
	const ko = '/login';

	onMount(() => {
		localStorage.getItem(t) ? href(ok) : href(ko);
	});

	function href(target: string): void {
		location.href = target;
	}
</script>

<h1>Redirecting...</h1>
