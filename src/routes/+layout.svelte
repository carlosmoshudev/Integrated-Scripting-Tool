<script lang="ts">
	import MainLayoutHeader from '../components/header/header.svelte';
	import { HeaderLinkCollection } from './data';

	import '../styles/root.css';
	import '../styles/framework.css';
	import '../styles/components/header.css';
</script>

<header>
	<MainLayoutHeader NavigationLinkCollection={HeaderLinkCollection} />
</header>
<main>
	<slot />
</main>
