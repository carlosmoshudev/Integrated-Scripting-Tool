<script lang="ts">
	import PageContainer from '../../../components/containers/page.svelte';
</script>

<PageContainer Title="Zabbix" HeadTitle="Zabbix" PageType="page__container">
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
		<div class="container">
			<slot />
		</div>
	</div>
</PageContainer>

<style>
	* {
		box-sizing: border-box;
		color: var(--dark-blue);
	}
	.subpage {
		position: relative;
		display: grid;
		grid-template-columns: 1fr 5fr;
		grid-template-areas: 'menu content';
		grid-gap: 1rem;
	}
	.zabbix__widget__menu {
		position: sticky;
		top: 0;
		left: 0;
		grid-area: menu;
		overflow: scroll;
	}
	.container {
		position: relative;

		overflow-y: scroll;
		grid-area: content;
	}
</style>
