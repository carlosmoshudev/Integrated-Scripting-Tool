<script lang="ts">
	export let Legend: string;
	export let Type: 'form' | 'key__value' = 'form';
</script>

<fieldset class="fieldset__{Type}">
	<legend>{Legend}</legend>
	<slot />
</fieldset>
