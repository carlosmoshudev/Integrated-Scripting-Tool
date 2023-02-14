<script lang="ts">
	export let Properties: MenuLinkWithIcon;
	const { Href, Icon, Text } = Properties;
	import type { MenuLinkWithIcon } from '../../../types/components/header';
	const mainMenuLink_CSS = 'animated__underline';
</script>

<li>
	<a href={Href} class={mainMenuLink_CSS}>
		<i class="fas {Icon}" />
		{Text}
	</a>
</li>
