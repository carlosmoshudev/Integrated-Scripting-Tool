import { profile, login, token } from './data';

function Set_Location(target: string): void {
	location.href = target;
}

export function Check_Token(): void {
	localStorage.getItem(token) ? Set_Location(profile) : Set_Location(login);
}
