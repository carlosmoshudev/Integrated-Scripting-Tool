<script lang="ts">
	export let LinkProperties: NavLinkWithIcon;
	import { page } from '$app/stores';
	import type { NavLinkWithIcon } from './framework';
	const linkAnimation_CSS = 'animated__underline';
</script>

<li>
	<a
		href={LinkProperties.Href}
		class={linkAnimation_CSS}
		aria-current={$page.url.pathname === LinkProperties.Href ? 'page' : undefined}
	>
		<i class={'fas ' + LinkProperties.Icon} />{LinkProperties.Text}
	</a>
</li>
