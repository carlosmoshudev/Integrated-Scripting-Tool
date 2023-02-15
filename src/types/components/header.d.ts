export interface IHeaderLogoProps {
	Source: string;
	Alternative_Text: string;
	Href?: string | null;
}
export interface INavLinkWithIconProps {
	Icon: string;
	Text: string;
	Href: string;
}
export interface IMenuLinkWithIconProps {
	Icon: string;
	Text: string;
	Href: string;
}

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

export interface IHeaderProps {
	NavigationLinkCollection: Array<HeaderNavLink>;
	LogoProperties: IHeaderLogoProps;
}
