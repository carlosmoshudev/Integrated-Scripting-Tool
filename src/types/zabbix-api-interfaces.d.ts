// Responses
export interface IZabbixUserLoginResponse {
	jsonrpc: string;
	result: string;
	id: number;
}

export interface IZabbixUserGetResponse {
	jsonrpc: string;
	result: Zabbix_User[];
	id: number;
}

export interface IZabbixHostGetResponse {
	jsonrpc: string;
	result: Zabbix_Host[];
	id: number;
}

export interface IZabbixScriptGetResponse {
	jsonrpc: string;
	result: Zabbix_Script[];
	id: number;
}

export interface IZabbixHostGroupGetResponse {
	jsonrpc: string;
	result: Zabbix_HostGroup[];
	id: number;
}
// Types
export type Zabbix_User = {
	userid: string;
	username: string;
	name: string;
	surname: string;
	attempt_ip: string;
	usrgrps: Zabbix_UserGroup[];
	medias: (Zabbix_UserMedias | Zabbix_UserMediasAlt)[];
	role: Zabbix_UserRole;
};

type Zabbix_UserRole = {
	name: string;
};

type Zabbix_UserMediasAlt = {
	sendto: string[];
};

type Zabbix_UserMedias = {
	sendto: string[] | string;
};

type Zabbix_UserGroup = {
	usrgrpid: string;
	name: string;
};

export type Zabbix_Host = {
	hostid: string;
	name: string;
	items: Zabbix_HostItem[];
	groups: Zabbix_HostGroup[];
	interfaces: Zabbix_HostInterface[];
};

type Zabbix_HostInterface = {
	ip: string;
};

export type Zabbix_HostGroup = {
	groupid: string;
	name: string;
};

type Zabbix_HostItem = {
	name: string;
	lastvalue: string;
};

export type Zabbix_Script = {
	scriptid: string;
	name: string;
	command: string;
	description: string;
	usrgrpid: string;
	host_access: string;
	timeout: string;
	authtype: string;
	parameters: string[];
	groups: Zabbix_HostGroup[];
};
