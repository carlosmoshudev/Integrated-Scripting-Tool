<!-- Path: src\components\controls\header\header-navigation-links.svelte -->
<script lang="ts">
	export let NavigationLinkCollection: Array<HeaderNavLink>;

	import { Nav_Links, Nav_Link } from './../../../imports/header';

	import type { HeaderNavLink } from './../../../types/components/header';
</script>

<Nav_Links>
	{#each NavigationLinkCollection as Properties}
		<Nav_Link {Properties} />
	{/each}
</Nav_Links>
