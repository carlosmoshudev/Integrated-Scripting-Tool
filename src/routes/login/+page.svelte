<script lang="ts">
	function Login() {
		localStorage.clear();
		let username = document.getElementById('username')?.innerHTML;
		let password = document.getElementById('password')?.innerHTML;
	}
	function cypherPassword(password: string) {
		let cypheredPassword = '';
		for (let i = 0; i < password.length; i++) {
			let cypheredChar = password.charCodeAt(i) + 1;
			let secondCypheredChar = password.charCodeAt(i) - 7;
			let thirdCypheredChar = password.charCodeAt(i) + 3;
			cypheredPassword += String.fromCharCode(cypheredChar, secondCypheredChar, thirdCypheredChar);
		}
		cypheredPassword = btoa(cypheredPassword);
		return cypheredPassword;
	}
	console.log(cypherPassword(cypherPassword('Tr1s0nPRO')));
</script>

<h1>Login page</h1>
