<script lang="ts">
	export let ID: string;
	export let InputType: string;
	export let Label: string;
</script>

<div class="fieldset__field__input">
	<label for={ID}>{Label}</label>
	<input type={InputType} id={ID} />
</div>
