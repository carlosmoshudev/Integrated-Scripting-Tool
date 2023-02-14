<script lang="ts">
	export let Properties: NavLinkWithIcon;
	const { Href, Icon, Text } = Properties;
	const CSS = 'animated__underline';
	import type { NavLinkWithIcon } from '../../../types/components/header';
	import { page } from '$app/stores';
</script>

<li>
	<a href={Href} class={CSS} aria-current={$page.url.pathname === Href ? 'page' : undefined}>
		<i class={'fas ' + Icon} />{Text}
	</a>
</li>
