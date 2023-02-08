export type HeaderNavLink = {
	title: string;
	href: string;
	icon: string;
	isExternal?: boolean;
};

export interface IUserLoginData {
	username: string;
	cypherPassword: string;
	zabbixToken: string;
}
