<script lang="ts">
	export let Properties: IKeyValueFieldProps;
	const { Key, Value } = Properties;
	const CSS = {
		Field: 'fieldset__field__kv',
		Key: 'field__key',
		Value: 'field__value'
	};
	import type { IKeyValueFieldProps } from '../../../types/components/fieldset';
</script>

<div class={CSS.Field}>
	<div class={CSS.Key}>{Key}:</div>
	<div class={CSS.Value}>{Value}</div>
</div>
