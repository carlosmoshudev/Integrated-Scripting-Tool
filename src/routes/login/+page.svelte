<script lang="ts">
	import { TryLogin } from '../../services/login';
	async function loginEvent() {
		// get the inputed text on input fields
		const username = document.getElementById('u') as HTMLInputElement;
		const password = document.getElementById('p') as HTMLInputElement;
		TryLogin(username.value, password.value).then(() => {
			console.log('localStorage: ', localStorage.getItem('token'));
		});
	}
</script>

<h1>Login page</h1>
<div class="form">
	<input type="text" placeholder="Username" id="u" />
	<input type="password" placeholder="Password" id="p" />
	<button on:click={loginEvent}>Login</button>

	<div class="register">
		<p>Don't have an account?</p>
		<a href="/register">Register</a>
	</div>
</div>
