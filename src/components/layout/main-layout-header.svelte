<script lang="ts">
	export let navLinks: HeaderNavLink[];
	import type { HeaderNavLink } from '../../types/types';
	import HeaderLogo from './header-logo.svelte';
	import HeaderNavigationLinks from './header-navigation-links.svelte';
	import HeaderMenu from './header-menu.svelte';
</script>

<div class="main__layout__header">
	<HeaderLogo />
	<HeaderNavigationLinks links={navLinks} />
	<HeaderMenu />
</div>
