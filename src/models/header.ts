import type { HeaderNavLink, NotLoggedMenuItems, LoggedMenuItems } from '../types/types';

export const headerLinks: Array<HeaderNavLink> = [
	{
		title: 'Integración',
		href: '/services/av-api-rest',
		icon: 'fa-code'
	},
	{
		title: 'Zabbix',
		href: '/services/zabbix',
		icon: 'fa-server'
	},
	{
		title: 'IPAM',
		href: '/services/ipam',
		icon: 'fa-network-wired'
	},
	{
		title: 'APs',
		href: '/services/remote-aps',
		icon: 'fa-wifi'
	},
	{
		title: 'Mesh Central',
		href: '/services/mesh-central',
		icon: 'fa-laptop'
	},
	{
		title: 'Radius',
		href: '/services/radius',
		icon: 'fa-user'
	},
	{
		title: 'Provisión',
		href: '/services/ztp-tools',
		icon: 'fa-microchip'
	}
];

export const loggedMenuItems: LoggedMenuItems = {
	logout: {
		title: 'Desconectarse',
		href: '/user/logout',
		icon: 'fa-sign-out-alt'
	},
	profile: {
		title: 'Mi perfil',
		href: '/user/profile',
		icon: 'fa-user'
	},
	settings: {
		title: 'Ajustes',
		href: '/user/settings',
		icon: 'fa-cog'
	},
	loadScript: {
		title: 'Importar script',
		href: '/load-script',
		icon: 'fa-file-upload'
	},
	manageScripts: {
		title: 'Repositorio',
		href: '/manage-scripts',
		icon: 'fa-file-code'
	}
};

export const notLoggedMenuItems: NotLoggedMenuItems = {
	login: {
		title: 'Conectarse',
		href: '/user/login',
		icon: 'fa-sign-in-alt'
	},
	register: {
		title: 'Darse de alta',
		href: '/user/register',
		icon: 'fa-user-plus'
	}
};
