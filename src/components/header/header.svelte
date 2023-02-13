<script lang="ts">
	export let NavigationLinkCollection: HeaderNavLink[];
	import type { HeaderNavLink } from './types';
	import { Logotype, Header_Menu, Header_NavLinks } from './components';
</script>

<div class="main__layout__header">
	<Logotype
		LogoProperties={{
			Source: '/logo_white.png',
			Alternative_Text: 'Trison Logo',
			Href: '/'
		}}
	/>
	<Header_NavLinks {NavigationLinkCollection} />
	<Header_Menu />
</div>
