<script lang="ts">
	export let links: HeaderNavLink[];

	import { page } from '$app/stores';
	import type { HeaderNavLink } from '../../types/types';

	const css = 'animated__underline';
</script>

<ul class="nav__links base__formatting">
	{#each links as link}
		<li>
			<a
				href={link.href}
				class={css}
				aria-current={$page.url.pathname === link.href ? 'page' : undefined}
			>
				<i class={'fas ' + link.icon} />
				{link.title}
			</a>
		</li>
	{/each}
</ul>
