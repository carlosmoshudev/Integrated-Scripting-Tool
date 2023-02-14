<script lang="ts">
	export let Properties: IInputFieldProps;
	const { ID, Label, Type } = Properties;
	const CSS = 'fieldset__field__input';
	import type { IInputFieldProps } from '../../../types/components/fieldset';
</script>

<div class={CSS}>
	<label for={ID}>{Label}</label>
	<input type={Type} id={ID} />
</div>
