<!-- Path: src\components\controls\header\main-menu-link.svelte -->
<script lang="ts">
	export let Properties: IMenuLinkWithIconProps;

	const { Href, Icon, Text } = Properties;

	import type { IMenuLinkWithIconProps } from './../../../types/components/header';
</script>

<li>
	<a href={Href} class="animated__underline">
		<i class="fas {Icon}" />
		{Text}
	</a>
</li>
