<script lang="ts">
	export let Title: string = 'Prueba';
</script>

<section class="page__container base__formatting">
	<h2 class="page__title">{Title}</h2>
	<slot />
</section>
