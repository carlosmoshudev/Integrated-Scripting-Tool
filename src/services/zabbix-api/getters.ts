import type {
	IZabbixHostGetResponse,
	IZabbixHostGroupGetResponse,
	IZabbixScriptGetResponse,
	IZabbixUserGetResponse,
	IZabbixUserLoginResponse
} from '../../types/zabbix-api-interfaces';

const Url = 'http://20.229.182.95:9080/api_jsonrpc.php';
const Headers = { 'Content-Type': 'application/json' };

export async function GetZabbixToken(
	username: string,
	password: string
): Promise<IZabbixUserLoginResponse> {
	return fetch(Url, {
		method: 'POST',
		headers: Headers,
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
	return fetch(Url, {
		method: 'POST',
		headers: Headers,
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

export async function GetZabbixScripts(): Promise<IZabbixScriptGetResponse> {
	return fetch(Url, {
		method: 'POST',
		headers: Headers,
		body: JSON.stringify({
			jsonrpc: '2.0',
			method: 'script.get',
			params: {
				output: 'extend',
				selectGroups: 'extend'
			},
			auth: localStorage.getItem('token'),
			id: 1
		})
	}).then((response) => response.json());
}

export async function GetZabbixHosts(): Promise<IZabbixHostGetResponse> {
	return fetch(Url, {
		method: 'POST',
		headers: Headers,
		body: JSON.stringify({
			jsonrpc: '2.0',
			method: 'host.get',
			params: {
				output: ['hostid', 'name'],
				selectInterfaces: ['ip'],
				selectItems: ['name', 'lastvalue'],
				selectGroups: ['name']
			},
			auth: localStorage.getItem('token'),
			id: 1
		})
	}).then((response) => response.json());
}

export async function GetZabbixHostGroups(): Promise<IZabbixHostGroupGetResponse> {
	return fetch(Url, {
		method: 'POST',
		headers: Headers,
		body: JSON.stringify({
			jsonrpc: '2.0',
			method: 'hostgroup.get',
			params: {
				output: 'extend'
			},
			auth: localStorage.getItem('token'),
			id: 1
		})
	}).then((response) => response.json());
}

export async function GetZabbixTemplates() {
	return fetch(Url, {
		method: 'POST',
		headers: Headers,
		body: JSON.stringify({
			jsonrpc: '2.0',
			method: 'template.get',
			params: {
				output: 'extend'
			},
			auth: localStorage.getItem('token'),
			id: 1
		})
	}).then((response) => response.json());
}

export async function GetZabbixProblems() {
	return fetch(Url, {
		method: 'POST',
		headers: Headers,
		body: JSON.stringify({
			jsonrpc: '2.0',
			method: 'problem.get',
			params: {
				output: 'extend',
				selectAcknowledges: 'extend',
				selectTags: 'extend',
				selectSuppressionData: 'extend',
				selectHosts: 'extend',
				selectItems: 'extend',
				selectTriggers: 'extend',
				selectEvents: 'extend',
				selectApplication: 'extend',
				selectInventory: 'extend',
				selectLatestEvent: 'extend',
				selectLatestEventProblem: 'extend',
				selectLatestEventUnacknowledged: 'extend',
				selectLatestEventAcknowledged: 'extend',
				selectGroup: 'extend',
				selectHost: 'extend',
				selectHostGroup: 'extend',
				selectHostPrototypes: 'extend',
				selectHttpTest: 'extend',
				selectItem: 'extend'
			},
			auth: localStorage.getItem('token'),
			id: 1
		})
	}).then((response) => response.json());
}

export default {
	GetZabbixToken,
	GetZabbixUserInfo,
	GetZabbixScripts,
	GetZabbixHosts,
	GetZabbixHostGroups,
	GetZabbixTemplates,
	GetZabbixProblems
};
