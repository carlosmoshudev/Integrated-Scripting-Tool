export type HeaderNavLink = {
	title: string;
	href: string;
	icon: string;
	isExternal?: boolean;
};

export type NotLoggedMenuItems = {
	login: HeaderNavLink;
	register: HeaderNavLink;
};

export type LoggedMenuItems = {
	logout: HeaderNavLink;
	profile: HeaderNavLink;
	settings: HeaderNavLink;
	loadScript: HeaderNavLink;
	manageScripts: HeaderNavLink;
};
export interface IUserLoginData {
	username: string;
	cypherPassword: string;
	zabbixToken: string;
}
