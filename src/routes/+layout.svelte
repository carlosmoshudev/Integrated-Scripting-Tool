<script lang="ts">
	import MainLayoutHeader from '../components/layout/main-layout-header.svelte';
	import { headerLinks } from '../models/header';
	import '../styles/root.css';
	import '../styles/fonts.css';
	import '../styles/components/header.css';
	import '../styles/framework/global.css';
</script>

<header>
	<MainLayoutHeader navLinks={headerLinks} />
</header>
<main>
	<slot />
</main>
