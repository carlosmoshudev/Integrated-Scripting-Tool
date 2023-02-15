<!-- Path: src\components\containers\page.svelte -->
<script lang="ts">
	export let Title: string = ' ';
	export let HeadTitle: string = 'Main';
	export let PageType: 'page__container' | 'split50' | 'split33' | 'split25' = 'page__container';
</script>

<svelte:head>
	<title>TIST - {HeadTitle}</title>
</svelte:head>

{#if PageType === 'page__container'}
	<section class="page__container base__formatting">
		<h2 class="page__title">{Title}</h2>
		<slot />
	</section>
{:else}
	<section class="base__formatting page__split__container">
		<h2 class="page__title">{Title}</h2>
		<div class={PageType}>
			<slot />
		</div>
	</section>
{/if}

<style lang="css" scoped>
	@import '../../styles/components/page.css';
</style>
