import type { HeaderNavLink, NotLoggedMenuItems, LoggedMenuItems } from '../types/types';

export const headerLinks: Array<HeaderNavLink> = [
	{
		title: 'AV API REST',
		href: '/av-api-rest',
		icon: 'fa-code'
	},
	{
		title: 'Zabbix',
		href: '/zabbix',
		icon: 'fa-server'
	},
	{
		title: 'IPAM & Racks',
		href: '/ipam',
		icon: 'fa-network-wired'
	},
	{
		title: 'Remote APs',
		href: '/remote-aps',
		icon: 'fa-wifi'
	},
	{
		title: 'Mesh Central & Commander',
		href: '/mesh-central',
		icon: 'fa-laptop'
	},
	{
		title: 'Radius',
		href: '/radius',
		icon: 'fa-user'
	},
	{
		title: 'ZTP tools',
		href: '/ztp-tools',
		icon: 'fa-microchip'
	}
];

export const loggedMenuItems: LoggedMenuItems = {
	logout: {
		title: 'Cerrar sesión',
		href: '/logout',
		icon: 'fa-sign-out-alt'
	},
	profile: {
		title: 'Mi perfil',
		href: '/profile',
		icon: 'fa-user'
	},
	settings: {
		title: 'Configuración',
		href: '/settings',
		icon: 'fa-cog'
	},
	loadScript: {
		title: 'Cargar nuevo script',
		href: '/load-script',
		icon: 'fa-file-upload'
	},
	manageScripts: {
		title: 'Administrar scripts',
		href: '/manage-scripts',
		icon: 'fa-file-code'
	}
};

export const notLoggedMenuItems: NotLoggedMenuItems = {
	login: {
		title: 'Iniciar sesión',
		href: '/login',
		icon: 'fa-sign-in-alt'
	},
	register: {
		title: 'Registrarse',
		href: '/register',
		icon: 'fa-user-plus'
	}
};
