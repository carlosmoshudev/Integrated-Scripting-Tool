<script lang="ts">
	export let Properties: HeaderLogo;
	const { Href, Source, Alternative_Text } = Properties;
	const CSS = 'top__bar__logo base__formatting';
	import type { HeaderLogo } from '../../../types/components/header';
</script>

<div class={CSS}>
	{#if Href}
		<a href={Href}>
			<img src={Source} alt={Alternative_Text} />
		</a>
	{:else}
		<img src={Source} alt={Alternative_Text} />
	{/if}
</div>
