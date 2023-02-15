<!-- Path: src\components\controls\button\button.svelte -->
<script lang="ts">
	export let Properties: IButtonProps;

	const { BorderClass, ColorClass, Label, OnClickCallback } = Properties;

	import type { IButtonProps } from './../../../types/components/button';
</script>

<button class="button__framework {BorderClass} {ColorClass}" on:click={OnClickCallback}>
	{Label}
</button>

<style lang="text/css" scoped>
	@import './../../../styles/components/button.css';
</style>
