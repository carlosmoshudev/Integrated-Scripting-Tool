const url = 'http://localhost:3000/api/v1';

async function GetRoot() {
	try {
		const response = await fetch(url, {
			method: 'GET'
		});

		if (response.ok) {
			const result = await response.json();
			console.log(result);
			return result;
		} else console.log(response);
	} catch (err) {
		console.error('Error ', err);
		return err;
	}
}

export default { GetRoot };
