<!-- Path: src\components\controls\header\header-logo.svelte -->
<script lang="ts">
	export let Properties: IHeaderLogoProps;

	const { Href, Source, Alternative_Text } = Properties;

	import type { IHeaderLogoProps } from './../../../types/components/header';
</script>

<div class="top__bar__logo base__formatting">
	{#if Href}
		<a href={Href}>
			<img src={Source} alt={Alternative_Text} />
		</a>
	{:else}
		<img src={Source} alt={Alternative_Text} />
	{/if}
</div>
