<!-- Path: src\components\controls\fieldset\key-value-field.svelte -->
<script lang="ts">
	export let Properties: IKeyValueFieldProps;

	const { Key, Value } = Properties;

	import type { IKeyValueFieldProps } from './../../../types/components/fieldset';
</script>

<div class="fieldset__field__kv">
	<div class="field__key">{Key}:</div>
	<div class="field__value">{Value}</div>
</div>
