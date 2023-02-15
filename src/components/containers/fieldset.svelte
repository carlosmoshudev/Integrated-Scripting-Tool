<!-- Path: src\components\containers\fieldset.svelte -->
<script lang="ts">
	export let Properties: IFieldsetProps;

	const { Legend, Behaviour } = Properties;

	import type { IFieldsetProps } from './../../types/components/fieldset';
</script>

<fieldset class="fieldset__{Behaviour}">
	<legend>{Legend}</legend>
	<slot />
</fieldset>

<style lang="text/css" scoped>
	@import './../../styles/components/fieldset.css';
</style>
