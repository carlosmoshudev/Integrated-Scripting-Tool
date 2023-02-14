<script lang="ts">
	export let Properties: IFieldsetProps;
	const { Legend, Behaviour } = Properties;
	const CSS = 'fieldset__';
	import type { IFieldsetProps } from '../../../types/components/fieldset';
	import '../../../styles/components/fieldset.css';
</script>

<fieldset class="{CSS}{Behaviour}">
	<legend>{Legend}</legend>
	<slot />
</fieldset>
