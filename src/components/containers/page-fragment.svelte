<script lang="ts">
	export let FragmentPosition: 'left' | 'right';
</script>

<div class="page__{FragmentPosition}">
	<slot />
</div>

<style>
	@import '../../styles/components/page.css';
</style>
