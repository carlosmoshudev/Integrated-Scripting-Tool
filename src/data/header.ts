// Path: src\data\header.ts
import type { NotLoggedMenuItems, LoggedMenuItems } from './../types/components/header';

export const CSS = {
	MenuButton: 'menu__button base__formatting',
	DefaultIcon: 'dashboard_customize',
	AlternateIcon: 'grid_view'
};

const LoggedMenuItems: LoggedMenuItems = {
	logout: {
		Text: 'Desconectarse',
		Href: '/user/logout',
		Icon: 'logout'
	},
	profile: {
		Text: 'Mi perfil',
		Href: '/user/profile',
		Icon: 'account_box'
	},
	settings: {
		Text: 'Ajustes',
		Href: '/user/settings',
		Icon: 'settings'
	},
	loadScript: {
		Text: 'Importar script',
		Href: '/load-script',
		Icon: 'upload_file'
	},
	manageScripts: {
		Text: 'Repositorio',
		Href: '/manage-scripts',
		Icon: 'folder'
	}
};

const NotLoggedMenuItems: NotLoggedMenuItems = {
	login: {
		Text: 'Conectarse',
		Href: '/user/login',
		Icon: 'login'
	},
	register: {
		Text: 'Darse de alta',
		Href: '/user/register',
		Icon: 'person_add'
	}
};

export const Collections = {
	LoggedMenuItems,
	NotLoggedMenuItems
};
