// Path: src\data\header.ts
import type { NotLoggedMenuItems, LoggedMenuItems } from './../types/components/header';

export const CSS = {
	MenuButton: 'menu__button base__formatting',
	DefaultIcon: 'fa-bars',
	AlternateIcon: 'fa-times'
};

const LoggedMenuItems: LoggedMenuItems = {
	logout: {
		Text: 'Desconectarse',
		Href: '/user/logout',
		Icon: 'fa-sign-out-alt'
	},
	profile: {
		Text: 'Mi perfil',
		Href: '/user/profile',
		Icon: 'fa-user'
	},
	settings: {
		Text: 'Ajustes',
		Href: '/user/settings',
		Icon: 'fa-cog'
	},
	loadScript: {
		Text: 'Importar script',
		Href: '/load-script',
		Icon: 'fa-file-upload'
	},
	manageScripts: {
		Text: 'Repositorio',
		Href: '/manage-scripts',
		Icon: 'fa-file-code'
	}
};

const NotLoggedMenuItems: NotLoggedMenuItems = {
	login: {
		Text: 'Conectarse',
		Href: '/user/login',
		Icon: 'fa-sign-in-alt'
	},
	register: {
		Text: 'Darse de alta',
		Href: '/user/register',
		Icon: 'fa-user-plus'
	}
};

export const Collections = {
	LoggedMenuItems,
	NotLoggedMenuItems
};
