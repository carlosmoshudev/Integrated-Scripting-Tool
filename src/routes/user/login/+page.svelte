<script lang="ts">
	import { onMount } from 'svelte';
	import { Fields, Legend, Title } from './data';
	import { On_MountEvent, On_LoginButtonClick } from './methods';
	import { PageContainer, FieldsetContainer, Field, Button } from './components';
	onMount(On_MountEvent);
</script>

<PageContainer {Title}>
	<FieldsetContainer {Legend}>
		{#each Fields as field}
			<Field ID={field.ID} InputType={field.Type} Label={field.Label} />
		{/each}
		<Button
			Label="Iniciar sesión"
			OnClickCallback={On_LoginButtonClick}
			ColorClass="button__yellow"
			BorderClass="button__outline"
		/>
	</FieldsetContainer>
</PageContainer>
