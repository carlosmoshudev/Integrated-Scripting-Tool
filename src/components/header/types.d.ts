export type HeaderNavLink = {
	Text: string;
	Href: string;
	Icon: string;
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
