const Url = 'http://20.229.182.95:9080/api_jsonrpc.php';
const Headers = { 'Content-Type': 'application/json' };
const Body = {
	jsonrpc: '2.0',
	method: 'user.login',
	params: [],
	auth: localStorage.getItem('token'),
	id: 1
};

export async function LogOut(): Promise<unknown> {
	return fetch(Url, {
		method: 'POST',
		headers: Headers,
		body: JSON.stringify(Body)
	}).then((response) =>
		response.json().then((data) => {
			localStorage.removeItem('token');
			return data;
		})
	);
}
