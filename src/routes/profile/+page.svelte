<script>
	export let user: {
		name: string;
		email: string;
		zabbixApiKey: string;
	};
</script>

<h1>Perfil de usuario</h1>

<h2>Datos de usuario</h2>
<ul>
	<li>Nombre: {user.name}</li>
	<li>Correo: {user.email}</li>
	<li>Zabbix Api Key: {user.zabbixApiKey}</li>
</ul>
