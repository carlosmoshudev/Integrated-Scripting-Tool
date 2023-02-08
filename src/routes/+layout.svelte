<script lang="ts">
	import MainLayoutHeader from '../Components/layout/MainLayoutHeader.svelte';
	import { headerLinks } from '../models/header';
	import '../styles/root.css';
	import '../styles/fonts.css';
</script>

<header>
	<MainLayoutHeader links={headerLinks} />
</header>
<main>
	<slot />
</main>
