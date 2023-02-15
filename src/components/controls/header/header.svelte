<!-- Path: src\components\containers\header.svelte -->
<script lang="ts">
	export let Properties: IHeaderProps;

	const { NavigationLinkCollection, LogoProperties } = Properties;
	import { Logotype, Header_Menu, Header_NavLinks } from '../../../imports/header';

	import type { IHeaderProps } from '../../../types/components/header';
</script>

<div class="main__layout__header">
	<Logotype Properties={LogoProperties} />
	<Header_NavLinks {NavigationLinkCollection} />
	<Header_Menu />
</div>

<style lang="text/css" scoped>
	@import '../../../styles/components/header.css';
</style>
