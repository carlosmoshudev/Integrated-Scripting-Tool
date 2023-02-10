<script lang="ts">
	import API from '../../../services/trison-api/getters';
	import { onMount } from 'svelte';

	let data: any = null;

	onMount(async () => {
		API.GetRoot();
	});
</script>
