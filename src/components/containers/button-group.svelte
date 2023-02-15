<script lang="ts">
	export let Display: 'vertical' | 'horizontal' = 'horizontal';
</script>

<section class="button__group_{Display} button__group">
	<slot />
</section>

<style lang="css" scoped>
	.button__group_horizontal {
		display: flex;
		flex-direction: row;
		justify-content: space-evenly;
	}

	.button__group_vertical {
		display: flex;
		flex-direction: column;
		justify-content: space-evenly;
	}

	.button__group {
		margin: 16px auto;
	}

	.button__group > * {
		display: none;
	}
</style>
