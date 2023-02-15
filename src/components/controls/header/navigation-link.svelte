<!-- Path: src\components\controls\header\navigation-link.svelte -->
<script lang="ts">
	export let Properties: INavLinkWithIconProps;

	const { Href, Icon, Text } = Properties;

	import type { INavLinkWithIconProps } from '../../../types/components/header';

	import { page } from '$app/stores';
</script>

<li class="navigation__link__button">
	<a href={Href} aria-current={$page.url.pathname === Href ? 'page' : undefined}>
		<i class="material-icons">{Icon}</i>{Text}
	</a>
</li>

<style>
	@import 'material-design-icons-iconfont/dist/material-design-icons.css';
</style>
