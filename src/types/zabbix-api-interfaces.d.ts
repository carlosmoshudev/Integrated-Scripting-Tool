export interface IZabbixUserLoginResponse {
	jsonrpc: string;
	result: string;
	id: number;
}

export interface IZabbixUserGetResponse {
	jsonrpc: string;
	result: IZabbixUserGetResult[];
	id: number;
}

interface IZabbixUserGetResult {
	userid: string;
	username: string;
	name: string;
	surname: string;
	attempt_ip: string;
	usrgrps: IZabbixUserGroup[];
	medias: (IZabbixUserMedias | IZabbixUserMediasAlt)[];
	role: IZabbixUserRole;
}

interface IZabbixUserRole {
	name: string;
}

interface IZabbixUserMediasAlt {
	sendto: string[];
}

interface IZabbixUserMedias {
	sendto: string[] | string;
}

interface IZabbixUserGroup {
	usrgrpid: string;
	name: string;
}

export interface IZabbixHostGetResponse {
	jsonrpc: string;
	result: IZabbixHostGetResult[];
	id: number;
}

interface IZabbixHostGetResult {
	hostid: string;
	name: string;
	items: IZabbixHostItem[];
	groups: IZabbixHostGroup[];
	interfaces: IZabbixHostInterface[];
}

interface IZabbixHostInterface {
	ip: string;
}

interface IZabbixHostGroup {
	name: string;
}

interface IZabbixHostItem {
	name: string;
	lastvalue: string;
}
