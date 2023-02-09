import type {
	IZabbixUserGetResponse,
	IZabbixUserLoginResponse
} from '../../types/zabbix-api-interfaces';

const ZabbixApiUrl = 'http://20.229.182.95:9080/api_jsonrpc.php';
const headers = { 'Content-Type': 'application/json' };

export async function GetZabbixToken(
	username: string,
	password: string
): Promise<IZabbixUserLoginResponse> {
	return fetch(ZabbixApiUrl, {
		method: 'POST',
		headers: headers,
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

export async function GetZabbixUserInfo(): Promise<IZabbixUserGetResponse> {
	return fetch(ZabbixApiUrl, {
		method: 'POST',
		headers: headers,
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

export async function GetZabbixScripts() {
	return fetch(ZabbixApiUrl, {
		method: 'POST',
		headers: headers,
		body: JSON.stringify({
			jsonrpc: '2.0',
			method: 'script.get',
			params: {
				output: 'extend'
			},
			auth: localStorage.getItem('token'),
			id: 1
		})
	}).then((response) => response.json());
}
