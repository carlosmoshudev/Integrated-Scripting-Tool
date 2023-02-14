<script lang="ts">
	export let Title: string = ' ';
	export let HeadTitle: string = 'Main';
</script>

<svelte:head>
	<title>TIST - {HeadTitle}</title>
</svelte:head>
<section class="page__container base__formatting">
	<h2 class="page__title">{Title}</h2>
	<slot />
</section>
