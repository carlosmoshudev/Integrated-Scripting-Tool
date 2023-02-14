export function On_MountEvent() {
	if (localStorage.getItem('token')) {
		location.href = '/';
	}
}

export default { On_MountEvent };
