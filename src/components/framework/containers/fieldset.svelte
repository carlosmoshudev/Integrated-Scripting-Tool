<script lang="ts">
	export let Legend: string;
</script>

<fieldset class="fieldset__container">
	<legend>{Legend}</legend>
	<slot />
</fieldset>
