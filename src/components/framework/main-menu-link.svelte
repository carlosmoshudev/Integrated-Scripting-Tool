<script lang="ts">
	export let MenuItemLink: MenuLinkWithIcon;
	import type { MenuLinkWithIcon } from './framework';
	const mainMenuLink_CSS = 'animated__underline';
</script>

<li>
	<a href={MenuItemLink.Href} class={mainMenuLink_CSS}>
		<i class="fas {MenuItemLink.Icon}" />
		{MenuItemLink.Text}
	</a>
</li>
