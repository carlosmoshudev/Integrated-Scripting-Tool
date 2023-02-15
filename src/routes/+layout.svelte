<script lang="ts">
	import { MainLayoutHeader } from './../imports/layout';
	import { HeaderLinkCollection, HeaderLogoProperties } from './../data/layout';
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
