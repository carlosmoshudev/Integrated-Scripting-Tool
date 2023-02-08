import type { IUserLoginData } from '../types/types';

type res = {
	result: string;
};

async function GetZabbixToken(username: string, password: string): Promise<res> {
	return fetch('http://20.229.182.95:9080/api_jsonrpc.php', {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json'
		},
		body: JSON.stringify({
			jsonrpc: '2.0',
			method: 'user.login',
			params: {
				user: username,
				password: password
			},
			id: 1,
			auth: null
		})
	}).then((response) => response.json());
}

function cypherPassword(password: string): string {
	let cypheredPassword = '';
	for (let i = 0; i < password.length; i++) {
		const cypheredChar = password.charCodeAt(i) + 1;
		const secondCypheredChar = password.charCodeAt(i) - 7;
		const thirdCypheredChar = password.charCodeAt(i) + 3;
		cypheredPassword += String.fromCharCode(cypheredChar, secondCypheredChar, thirdCypheredChar);
	}
	cypheredPassword = btoa(cypheredPassword);
	return cypheredPassword;
}

export async function TryLogin(username: string, password: string) {
	await GetZabbixToken(username, password).then((response) => {
		const cookie = cypherPassword(password + username);
		localStorage.clear();
		localStorage.setItem('token', response.result);
		localStorage.setItem('username', username);
		localStorage.setItem('cookie', cookie);
		console.log(window.localStorage);
	});
}
