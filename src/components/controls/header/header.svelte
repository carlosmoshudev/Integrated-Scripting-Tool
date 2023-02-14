<script lang="ts">
	export let Properties: IHeaderProps;
	const { NavigationLinkCollection, LogoProperties } = Properties;
	const CSS = 'main__layout__header';
	import type { IHeaderProps } from '../../../types/components/header';
	import { Logotype, Header_Menu, Header_NavLinks } from './components';
	import '../../../styles/components/header.css';
</script>

<div class={CSS}>
	<Logotype Properties={LogoProperties} />
	<Header_NavLinks {NavigationLinkCollection} />
	<Header_Menu />
</div>
