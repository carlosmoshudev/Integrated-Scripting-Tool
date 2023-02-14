export type Border =
	| 'button__border__none'
	| 'button__outline'
	| 'button__fill__background'
	| 'button__underline';
export type Color =
	| 'button__color__primary'
	| 'button__red'
	| 'button__orange'
	| 'button__yellow'
	| 'button__green'
	| 'button__blue'
	| 'button__purple';

export interface IButtonProps {
	Label: string;
	BorderClass: Border = 'button__border__none';
	ColorClass: Color = 'button__color__primary';
	OnClickCallback: () => void;
}
