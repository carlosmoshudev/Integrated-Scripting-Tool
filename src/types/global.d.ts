export interface IUser {
	username: string;
	name: string;
	surname: string;
	ip: string;
	email: string;
	groups: IGroup[];
	role: string;
}

interface IGroup {
	name: string;
}

export interface IUserLoginData {
	username: string;
	cypherPassword: string;
	zabbixToken: string;
}
