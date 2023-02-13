import type { NotLoggedMenuItems, LoggedMenuItems } from './types';

export const menuIconContainer_CSS = 'menu__button base__formatting';

export const defaultMenuIcon_CSS = 'fa-bars';
export const alternateMenuIcon_CSS = 'fa-times';

export const MenuItemCollectionOnLoggedIn: LoggedMenuItems = {
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

export const MenuItemCollectionOnLoggedOut: NotLoggedMenuItems = {
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
