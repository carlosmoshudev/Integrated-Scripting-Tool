<script lang="ts">
	import PageContainer from '../../../components/containers/page.svelte';
</script>

<PageContainer Title="Zabbix">
	<div class="subpage">
		<div class="zabbix__widget__menu base__formatting">
			<fieldset>
				<legend> Equipos</legend>
				<ul>
					<li>
						<a href="/services/zabbix/hosts" class="animated__underline">
							<i class="fas fa-desktop" />
							Listado
						</a>
					</li>
					<li>
						<a href="/services/zabbix/host-groups" class="animated__underline">
							<i class="fas fa-grip-horizontal" />
							Grupos
						</a>
					</li>
					<li>
						<a href="/services/zabbix/templates" class="animated__underline">
							<i class="fas fa-clone" />
							Plantillas
						</a>
					</li>
					<li>
						<a href="/services/zabbix/applications" class="animated__underline">
							<i class="fas fa-cubes" />
							Aplicaciones
						</a>
					</li>
					<li>
						<a href="/services/zabbix/items" class="animated__underline">
							<i class="fas fa-cube" />
							Items
						</a>
					</li>
				</ul>
			</fieldset>
			<fieldset>
				<legend> Usuarios</legend>
				<ul>
					<li>
						<a href="/services/zabbix/users" class="animated__underline">
							<i class="fas fa-users" />
							Usuarios
						</a>
					</li>

					<li>
						<a href="/services/zabbix/user-groups" class="animated__underline">
							<i class="fas fa-address-book" />
							Grupos
						</a>
					</li>

					<li>
						<a href="/services/zabbix/roles" class="animated__underline">
							<i class="fas fa-user-tag" />
							Roles
						</a>
					</li>
				</ul>
			</fieldset>
			<fieldset>
				<legend> Control</legend>
				<ul>
					<li>
						<a href="/services/zabbix/problems" class="animated__underline">
							<i class="fas fa-exclamation-triangle" />
							Problemas
						</a>
					</li>
					<li>
						<a href="/services/zabbix/services" class="animated__underline">
							<i class="fas fa-server" />
							Servicios
						</a>
					</li>
					<li>
						<a href="/services/zabbix/tasks" class="animated__underline">
							<i class="fas fa-tasks" />
							Tareas
						</a>
					</li>
					<li>
						<a href="/services/zabbix/scripts" class="animated__underline">
							<i class="fas fa-code" /> Scripts
						</a>
					</li>
				</ul>
			</fieldset>
		</div>
		<main>
			<slot />
		</main>
	</div>
</PageContainer>

<style>
	.subpage {
		position: relative;
		left: -1.7rem;
		top: -1rem;
		display: grid;
		grid-template-columns: 1fr 5fr;
		grid-template-rows: 1fr;
		grid-template-areas: 'menu main';
	}

	.zabbix__widget__menu {
		position: sticky;
		top: 0rem;
		grid-area: menu;
		background-image: linear-gradient(to right, #1e3c72, #2a5298, #3366b2);
		padding: 10px;
		font-weight: 600;
		max-height: 100vh;
	}

	.zabbix__widget__menu ul {
		list-style: none;
		padding: 0;
		margin: 0;
	}

	.zabbix__widget__menu li {
		padding: 0.5rem;
	}

	.zabbix__widget__menu li a {
		text-decoration: none;
		color: #ffffffcc;
	}

	.zabbix__widget__menu li a:hover {
		color: #ffffff;
	}

	.zabbix__widget__menu li a i {
		font-size: 1rem;
	}

	main {
		grid-area: main;
	}

	main > * {
		padding: 20px;
	}

	@media (max-width: 768px) {
		.zabbix__widget__menu {
			display: none;
		}
	}
</style>
