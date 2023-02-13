import { TryLogin } from '../../../services/login';

export function On_MountEvent() {
	if (localStorage.getItem('token')) {
		location.href = '/';
	}
}

export async function On_LoginButtonClick() {
	const username = document.getElementById('user') as HTMLInputElement;
	const password = document.getElementById('password') as HTMLInputElement;
	TryLogin(username.value, password.value).then(() => {
		window.location.href = '/';
	});
}

export default { On_MountEvent, On_LoginButtonClick };
