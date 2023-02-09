<script>
</script>

<section>
	<div class="zabbix__widget__menu base__formatting">
		<ul>
			<li>
				<a href="/services/zabbix/hosts">Equipos</a>
			</li>
			<li>
				<a href="/services/zabbix/host-groups">Grupos</a>
			</li>
			<li>
				<a href="/services/zabbix/templates">Plantillas</a>
			</li>
			<li>
				<a href="/services/zabbix/users">Usuarios</a>
			</li>
			<li>
				<a href="/services/zabbix/scripts">Scripts</a>
			</li>
		</ul>
	</div>
	<main>
		<slot />
	</main>
</section>

<style>
	* {
		box-sizing: border-box;
		font-family: 'Montserrat', sans-serif;
	}

	section {
		position: relative;
		left: -26px;
		top: -5px;
		display: grid;
		grid-template-columns: 1fr 4fr;
		grid-template-rows: 1fr;
		grid-template-areas: 'menu main';
		height: 1000vh;
	}

	.zabbix__widget__menu {
		grid-area: menu;
		background-image: linear-gradient(to top right, #fff, #752525);
		padding: 20px;
		font-size: large;
	}

	.zabbix__widget__menu ul {
		position: sticky;
		top: 60px;
		left: -20px;
		list-style: none;
		padding: 0;
		margin: 0;
	}

	.zabbix__widget__menu li {
		padding: 10px;
		border-bottom: 1px solid #ccc;
	}

	.zabbix__widget__menu li a {
		text-decoration: none;
		color: #fff;
	}

	.zabbix__widget__menu li a:hover {
		color: #000;
		text-decoration: underline;
	}

	main {
		grid-area: main;
	}

	main > * {
		padding: 20px;
	}

	@media (max-width: 768px) {
		section {
			display: flex;
			flex-direction: column;
		}

		.zabbix__widget__menu {
			display: none;
		}
	}
</style>
