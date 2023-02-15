<!-- Path: src\components\controls\fieldset\input-field.svelte -->
<script lang="ts">
	export let Properties: IInputFieldProps;

	const { ID, Label, Type } = Properties;

	import type { IInputFieldProps } from './../../../types/components/fieldset';
</script>

<div class="fieldset__field__input">
	<label for={ID}>{Label}</label>
	<input type={Type} id={ID} />
</div>
