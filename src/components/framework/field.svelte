<script lang="ts">
	export let ID: string;
	export let Type: string;
	export let Label: string;
</script>

<div class="fieldset__field">
	<label for={ID}>{Label}</label>
	<input type={Type} id={ID} />
</div>
