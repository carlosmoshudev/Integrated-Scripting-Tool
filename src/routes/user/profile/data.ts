import type { IUser } from '../../../types/global';

export function UserFields(user: IUser) {
	return [
		{
			Key: 'Nombre completo',
			Value: `${user.name} ${user.surname}`
		},
		{
			Key: 'IP',
			Value: user.ip
		},
		{
			Key: 'Email',
			Value: user.email
		},
		{
			Key: 'Grupos',
			Value: user.groups.map((group) => group.name).toString()
		},
		{
			Key: 'Rol',
			Value: user.role
		}
	];
}
