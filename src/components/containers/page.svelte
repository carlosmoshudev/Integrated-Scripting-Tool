<!-- Path: src\components\containers\page.svelte -->
<script lang="ts">
	export let Title: string = ' ';
	export let HeadTitle: string = 'Main';
	export let PageType: 'page__container' | 'split50' | 'split33' | 'split25' = 'page__container';
</script>

<svelte:head>
	<title>TIST - {HeadTitle}</title>
</svelte:head>

<section class="base__formatting {PageType}">
	<h2 class="page__title">{Title}</h2>
	<slot />
</section>

<style lang="css" scoped>
	@import '../../styles/components/page.css';
</style>
