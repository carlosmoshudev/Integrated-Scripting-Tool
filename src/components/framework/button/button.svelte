<script lang="ts">
	export let Label: string;
	export let BorderClass: Border = 'button__border__none';
	export let ColorClass: Color = 'button__color__primary';
	export let OnClickCallback: () => void;
	import type { Border, Color } from './button';
	import './button.css';
</script>

<button class="button__framework {BorderClass} {ColorClass}" on:click={OnClickCallback}>
	{Label}
</button>
