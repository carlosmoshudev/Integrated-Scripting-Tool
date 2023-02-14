type Behaviour = 'form' | 'key__value';

export interface IInputFieldProps {
	ID: string;
	Type: string;
	Label: string;
}

export interface IKeyValueFieldProps {
	Key: string;
	Value: string;
}

export interface IFieldsetProps {
	Legend: string;
	Behaviour: Behaviour;
}
