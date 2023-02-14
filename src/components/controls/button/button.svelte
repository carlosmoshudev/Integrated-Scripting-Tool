<script lang="ts">
	export let Properties: IButtonProps;
	const { BorderClass, ColorClass, Label, OnClickCallback } = Properties;
	const CSS = 'button__framework';
	import type { IButtonProps } from '../../../types/components/button';
	import '../../../styles/components/button.css';
</script>

<button class="{CSS} {BorderClass} {ColorClass}" on:click={OnClickCallback}>
	{Label}
</button>
