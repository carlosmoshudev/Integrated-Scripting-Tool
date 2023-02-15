<script lang="ts">
	import { onMount } from 'svelte';
	import { ButtonProps, PageProps } from './../../../data/page-user-login';
	import { Page, Button, FilledTextField } from '../../../imports/pages';
	import { OnMount_CheckLogin } from './../../../functions/pages';

	const { Title, HeadTitle } = PageProps;
	onMount(OnMount_CheckLogin);
</script>

<Page {Title} {HeadTitle}>
	<div class="login__form">
		<FilledTextField Properties={{ Label: 'Usuario', ID: 'user', Type: 'text' }} />
		<FilledTextField Properties={{ Label: 'Contraseña', ID: 'password', Type: 'password' }} />
		<Button Properties={ButtonProps} />
	</div>
</Page>

<style lang="text/css" scoped>
	.login__form {
		margin: 32px auto;
	}
</style>
