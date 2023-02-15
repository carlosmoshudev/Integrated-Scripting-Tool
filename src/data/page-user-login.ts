// Path: src\data\page-user-login.ts
import type { IFieldsetProps } from '../types/components/fieldset';
import type { IButtonProps } from '../types/components/button';
import { TryLogin } from '../services/login';

export const Fields = [
	{
		ID: 'user',
		Type: 'text',
		Label: 'Usuario'
	},
	{
		ID: 'password',
		Type: 'password',
		Label: 'Contraseña'
	}
];
export const FieldsetProps: IFieldsetProps = {
	Legend: 'Inicio de sesión con Zabbix',
	Behaviour: 'form'
};
export const ButtonProps: IButtonProps = {
	Label: 'Iniciar sesión',
	ColorClass: 'button__purple',
	BorderClass: 'button__outline',
	OnClickCallback: async () => {
		const username = document.getElementById('user') as HTMLInputElement;
		const password = document.getElementById('password') as HTMLInputElement;
		TryLogin(username.value, password.value).then(() => {
			window.location.href = '/';
		});
	}
};
const Title = 'Inicio de sesión con Zabbix';
const HeadTitle = 'Login';

export const PageProps = {
	Title,
	HeadTitle
};
