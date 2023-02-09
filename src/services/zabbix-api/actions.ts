const ZabbixApiUrl = 'http://20.229.182.95:9080/api_jsonrpc.php';
const headers = { 'Content-Type': 'application/json' };

export function LogOut(): Promise<unknown> {
	return fetch(ZabbixApiUrl, {
		method: 'POST',
		headers: headers,
		body: JSON.stringify({
			jsonrpc: '2.0',
			method: 'user.logout',
			params: [],
			auth: localStorage.getItem('token'),
			id: 1
		})
	}).then((response) =>
		response.json().then((data) => {
			localStorage.removeItem('token');
			return data;
		})
	);
}
