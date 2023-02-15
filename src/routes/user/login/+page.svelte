<script lang="ts">
	import { onMount } from 'svelte';
	import { FieldsetProps, ButtonProps, Fields, PageProps } from './../../../data/page-user-login';
	import { Page, Fieldset, Input, Button } from '../../../imports/pages';
	import { OnMount_CheckLogin } from './../../../functions/pages';
	const { Title, HeadTitle } = PageProps;
	onMount(OnMount_CheckLogin);
</script>

<Page {Title} {HeadTitle}>
	<Fieldset Properties={FieldsetProps}>
		{#each Fields as FieldProps}
			<Input Properties={FieldProps} />
		{/each}
		<Button Properties={ButtonProps} />
	</Fieldset>
</Page>
