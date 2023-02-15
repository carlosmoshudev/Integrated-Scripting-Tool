// Path: src\data\layout.ts
import type { HeaderNavLink, IHeaderLogoProps } from '../types/components/header';

export const HeaderLinkCollection: Array<HeaderNavLink> = [
	{
		Text: 'Integración',
		Href: '/services/av-api-rest',
		Icon: 'view_in_ar'
	},
	{
		Text: 'Zabbix',
		Href: '/services/zabbix',
		Icon: 'monitor_heart'
	},
	{
		Text: 'IPAM',
		Href: '/services/ipam',
		Icon: 'warehouse'
	},
	{
		Text: 'APs',
		Href: '/services/remote-aps',
		Icon: 'wifi'
	},
	{
		Text: 'Mesh Central',
		Href: '/services/mesh-central',
		Icon: 'settings_remote'
	},
	{
		Text: 'Radius',
		Href: '/services/radius',
		Icon: 'https'
	},
	{
		Text: 'Provisión',
		Href: '/services/ztp-tools',
		Icon: 'display_settings'
	}
];
export const HeaderLogoProperties: IHeaderLogoProps = {
	Source: '/logo_white.png',
	Alternative_Text: 'Trison Logo',
	Href: '/'
};

export const token = 'token';
export const profile = '/user/profile';
export const login = '/user/login';
