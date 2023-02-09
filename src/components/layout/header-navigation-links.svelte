<script lang="ts">
	import { page } from '$app/stores';
	import type { HeaderNavLink } from '../../types/types';

	export let links: HeaderNavLink[];
</script>

<ul class="nav__links base__formatting">
	{#each links as link}
		<li>
			<a
				href={link.href}
				class="animated__underline"
				aria-current={$page.url.pathname === link.href ? 'page' : undefined}
			>
				<i class={'fas ' + link.icon} />
				{link.title}
			</a>
		</li>
	{/each}
</ul>
