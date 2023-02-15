// Path: src\functions\pages.ts
import { profile, login, token } from '../data/layout';

function Set_Location(target: string): void {
	location.href = target;
}

export function Check_Token(): void {
	localStorage.getItem(token) ? Set_Location(profile) : Set_Location(login);
}

export function OnMount_CheckLogin(): void {
	if (localStorage.getItem('token')) {
		location.href = '/';
	}
}
