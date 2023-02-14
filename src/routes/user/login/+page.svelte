<script lang="ts">
	import { onMount } from 'svelte';
	import { FieldsetProps, ButtonProps, Fields, Title } from './data';
	import { PageContainer, FieldsetContainer, Field, Button } from './components';
	import { On_MountEvent } from './methods';
	onMount(On_MountEvent);
</script>

<PageContainer {Title} HeadTitle="Iniciar sesión">
	<FieldsetContainer Properties={FieldsetProps}>
		{#each Fields as FieldProps}
			<Field Properties={FieldProps} />
		{/each}
		<Button Properties={ButtonProps} />
	</FieldsetContainer>
</PageContainer>
