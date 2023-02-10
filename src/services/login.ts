import { GetZabbixToken } from './zabbix-api/getters';

function cypherPassword(password: string, username: string, zabbix: boolean): string {
	let cypheredPassword = '';
	for (let i = 0; i < password.length; i++) {
		const cypheredChar = password.charCodeAt(i) + 1;
		const secondCypheredChar = password.charCodeAt(i) - 7;
		const thirdCypheredChar = password.charCodeAt(i) + 3;
		cypheredPassword += String.fromCharCode(cypheredChar, secondCypheredChar, thirdCypheredChar);
	}
	const zabbixLogged = zabbix ? 'zL0gg1n' : 'zL0gg0ut';
	cypheredPassword = `${zabbixLogged}_${btoa(cypheredPassword)}_${btoa(username)};`;
	return cypheredPassword;
}

export async function TryLogin(username: string, password: string): Promise<void> {
	await GetZabbixToken(username, password).then((response) => {
		const isLoggedInZabbix = response.result !== undefined ? true : false;
		const cookie = cypherPassword(password, username, isLoggedInZabbix);
		localStorage.clear();
		localStorage.setItem('token', response.result);
		localStorage.setItem('username', username);
		localStorage.setItem('cookie', cookie);
		console.log(window.localStorage);
	});
}

export default { TryLogin };
