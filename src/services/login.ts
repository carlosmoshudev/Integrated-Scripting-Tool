import type {
	IZabbixUserLoginResponse,
	IZabbixUserGetResponse
} from '../types/zabbix-api-interfaces';

async function GetZabbixToken(
	username: string,
	password: string
): Promise<IZabbixUserLoginResponse> {
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

function cypherPassword(password: string, username: string, zabbix: boolean): string {
	let cypheredPassword = '';
	for (let i = 0; i < password.length; i++) {
		const cypheredChar = password.charCodeAt(i) + 1;
		const secondCypheredChar = password.charCodeAt(i) - 7;
		const thirdCypheredChar = password.charCodeAt(i) + 3;
		cypheredPassword += String.fromCharCode(cypheredChar, secondCypheredChar, thirdCypheredChar);
	}
	const zabbixLogged = zabbix ? '1' : '0';
	cypheredPassword = `${zabbixLogged}_${btoa(cypheredPassword)}_${btoa(username)};`;
	return cypheredPassword;
}

export async function TryLogin(username: string, password: string) {
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

export async function GetZabbixUserInfo(): Promise<IZabbixUserGetResponse> {
	return fetch('http://20.229.182.95:9080/api_jsonrpc.php', {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json'
		},
		body: JSON.stringify({
			jsonrpc: '2.0',
			method: 'user.get',
			params: {
				output: ['username', 'name', 'surname', 'attempt_ip'],
				selectMedias: ['sendto'],
				selectUsrgrps: ['name'],
				selectRole: ['name']
			},
			auth: localStorage.getItem('token'),
			id: 1
		})
	}).then((response) => response.json());
}

export default { TryLogin, GetZabbixUserInfo };
