export type HeaderLogo = {
	Source: string;
	Alternative_Text: string;
	Href?: string | null;
};
export type NavLinkWithIcon = {
	Icon: string;
	Text: string;
	Href: string;
};
export type MenuLinkWithIcon = {
	Icon: string;
	Text: string;
	Href: string;
};

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
	LogoProperties: HeaderLogo;
}
