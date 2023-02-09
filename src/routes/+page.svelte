<script lang="ts">
	import { onMount } from 'svelte';

	const t = 'token';
	const ok = '/user/profile';
	const ko = '/user/login';

	onMount(() => {
		localStorage.getItem(t) ? href(ok) : href(ko);
	});

	function href(target: string): void {
		location.href = target;
	}
</script>

<h1>Redirecting...</h1>
