<script lang="ts">
	export let NavigationLinkCollection: Array<HeaderNavLink>;
	import type { HeaderNavLink } from '../../../types/components/header';
	import { Nav_Links, Nav_Link } from './components';
</script>

<Nav_Links>
	{#each NavigationLinkCollection as LinkProperties}
		<Nav_Link Properties={LinkProperties} />
	{/each}
</Nav_Links>
