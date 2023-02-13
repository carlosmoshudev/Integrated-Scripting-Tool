<script lang="ts">
	import { onMount } from 'svelte';
	import { Fields, Legend, Title } from './data';
	import { On_MountEvent, On_LoginButtonClick } from './methods';
	import PageContainer from './../../../framework/containers/page.svelte';
	import FieldsetContainer from '../../../framework/containers/fieldset.svelte';
	import Field from '../../../framework/field.svelte';
	import Button from '../../../framework/button/button.svelte';
	onMount(On_MountEvent);
</script>

<PageContainer {Title}>
	<FieldsetContainer {Legend}>
		{#each Fields as field}
			<Field ID={field.ID} Type={field.Type} Label={field.Label} />
		{/each}
		<Button
			Label="Iniciar sesión"
			OnClickCallback={On_LoginButtonClick}
			ColorClass="button__yellow"
			BorderClass="button__outline"
		/>
	</FieldsetContainer>
</PageContainer>
