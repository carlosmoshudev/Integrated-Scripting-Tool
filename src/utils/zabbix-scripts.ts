export const Scripts = {
	1: {
		name: '[Server] Ping',
		command: 'ping -c 3 {HOST.CONN}; case $? in [01]) true;; *) false;; esac',
		description: 'Comprueba que el dispositivo está online en este momento.',
		timeout: '30s',
		type: 0
	},
	2: {
		name: '[Server] Traceroute',
		command: '/usr/bin/traceroute {HOST.CONN}',
		description: 'Comprueba la ruta de red hacia el dispositivo.',
		timeout: '30s',
		type: 0
	},
	3: {
		name: '[Server] Detectar distribución SO',
		command: 'sudo /usr/bin/nmap -O {HOST.CONN}',
		description: 'Comprueba la distribución del sistema operativo.',
		timeout: '30s',
		type: 0
	},
	4: {
		name: '[Linux] Reboot',
		command: 'sudo /sbin/reboot',
		description: 'Reinicia el dispositivo.',
		timeout: '30s',
		type: 1
	},
	5: {
		name: '[Windows] Reboot',
		command: 'shutdown /r /t 0 /f',
		description: 'Reinicia el dispositivo.',
		timeout: '30s',
		type: 1
	}
};
