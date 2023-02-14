<script lang="ts">
	import { MainLayoutHeader } from './components';
	import { HeaderLinkCollection, HeaderLogoProperties } from './data';
	import '../styles/global-vars.css';
	import '../styles/root.css';
	import '../styles/framework.css';
</script>

<header>
	<MainLayoutHeader
		Properties={{
			NavigationLinkCollection: HeaderLinkCollection,
			LogoProperties: HeaderLogoProperties
		}}
	/>
</header>
<main>
	<slot />
</main>
