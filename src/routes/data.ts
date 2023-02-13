import type { HeaderNavLink } from '../components/header/types';

export const HeaderLinkCollection: Array<HeaderNavLink> = [
	{
		Text: 'Integración',
		Href: '/services/av-api-rest',
		Icon: 'fa-code'
	},
	{
		Text: 'Zabbix',
		Href: '/services/zabbix',
		Icon: 'fa-server'
	},
	{
		Text: 'IPAM',
		Href: '/services/ipam',
		Icon: 'fa-network-wired'
	},
	{
		Text: 'APs',
		Href: '/services/remote-aps',
		Icon: 'fa-wifi'
	},
	{
		Text: 'Mesh Central',
		Href: '/services/mesh-central',
		Icon: 'fa-laptop'
	},
	{
		Text: 'Radius',
		Href: '/services/radius',
		Icon: 'fa-user'
	},
	{
		Text: 'Provisión',
		Href: '/services/ztp-tools',
		Icon: 'fa-microchip'
	}
];
