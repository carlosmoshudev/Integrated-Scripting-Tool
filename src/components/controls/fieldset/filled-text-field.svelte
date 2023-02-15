<script lang="ts">
	export let Properties: {
		ID: string;
		Label: string;
		Type: string;
	};
	const { ID, Label, Type } = Properties;
</script>

<div class="input__container">
	<input
		type={Type}
		id={ID}
		name={Label}
		value=""
		aria-labelledby="label__{Label}"
		placeholder=" "
	/>
	<label id="label__{Label}" for={ID} class="label">
		<div class="text">
			{Label}
		</div>
	</label>
</div>

<style lang="css" scoped>
	:root {
		--page-background-color: var(--dark-blue);
	}
	input:-webkit-autofill,
	input:-webkit-autofill:hover,
	input:-webkit-autofill:focus,
	input:-webkit-autofill:active {
		-webkit-box-shadow: 0 0 0 30px var(--page-background-color) inset !important;
		-webkit-text-fill-color: var(--dark-blue) inset !important;
	}
	.input__container {
		position: relative;
	}

	input {
		width: 100%;
		height: 2rem;
		padding: 16px;
		margin: 8px 0;
		border: 1px solid var(--dark-blue);
		border-radius: 4px;
		box-sizing: border-box;
		background-color: var(--page-background-color);
		filter: drop-shadow(0 0 0.2rem rgba(0, 0, 0, 0.5));
	}
	.label {
		position: absolute;
		top: 0;
		bottom: 0;
		left: 16px;
		display: flex;
		align-items: center;
		pointer-events: none;
	}
	input,
	.label .text {
		font-family: 'Montserrat', 'Segoe UI', sans-serif;
		font-size: 16px;
		color: var(--dark-blue);
	}
	input:focus {
		outline: none;
		border: 2px solid var(--dark-blue);
	}
	input:focus + .label .text {
		font-size: 12px;
		transform: translateY(-100%);
		padding: 0 4px;
		color: var(--blue);
		font-weight: 600;
		background-color: var(--page-background-color);
	}
	.label .text {
		transition: all 0.3s ease-out;
	}

	/* If input value is not empty */
	input:not(:placeholder-shown) + .label .text {
		font-size: 12px;
		transform: translateY(-100%);
		padding: 0 4px;
		color: var(--blue);
		font-weight: 600;
		background-color: var(--page-background-color);
	}
</style>
