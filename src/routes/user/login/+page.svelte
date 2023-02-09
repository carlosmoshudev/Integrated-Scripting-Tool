<script lang="ts">
	import { onMount } from 'svelte';
	import { TryLogin } from '../../../services/login';

	onMount(() => {
		if (localStorage.getItem('token')) {
			location.href = '/';
		}
	});

	async function loginEvent() {
		const username = document.getElementById('user') as HTMLInputElement;
		const password = document.getElementById('password') as HTMLInputElement;
		TryLogin(username.value, password.value).then(() => {
			window.location.href = '/';
		});
	}
</script>

<fieldset class="form">
	<legend>Inicio de sesión con Zabbix</legend>
	<div class="field">
		<label for="user">Usuario</label>
		<input type="text" id="user" />
	</div>
	<div class="field">
		<label for="password">Contraseña</label>
		<input type="password" id="password" />
	</div>
	<button on:click={loginEvent}>Iniciar sesión</button>
</fieldset>

<style>
	* {
		box-sizing: border-box;
		font-family: 'Montserrat', sans-serif;
	}
	.form {
		display: flex;
		flex-direction: column;
		align-items: center;
	}
	.field {
		display: flex;
		flex-direction: row;
		align-items: center;
		margin: 0.5rem 2rem;
		justify-content: space-between;
		width: 100%;
	}
	.field label {
		margin-right: 10px;
	}

	input {
		-webkit-appearance: none;
		-moz-appearance: none;
		-ms-appearance: none;
		-o-appearance: none;
		appearance: none;
		outline: none;
		border: none;
		background-color: #f2f2f2;
	}

	button {
		margin-top: 10px;
		width: 95%;
		letter-spacing: 0.1rem;
	}

	legend {
		font-size: 1.5em;
	}

	@media (min-width: 768px) {
		.form {
			width: 20%;
			margin: 0 auto;
		}
	}
</style>
