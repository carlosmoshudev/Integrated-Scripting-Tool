<!-- Path: src\components\controls\header\navigation-link.svelte -->
<script lang="ts">
	export let Properties: INavLinkWithIconProps;

	const { Href, Icon, Text } = Properties;

	import type { INavLinkWithIconProps } from '../../../types/components/header';

	import { page } from '$app/stores';
</script>

<li>
	<a
		href={Href}
		class="animated__underline"
		aria-current={$page.url.pathname === Href ? 'page' : undefined}
	>
		<i class={'fas ' + Icon} />{Text}
	</a>
</li>
