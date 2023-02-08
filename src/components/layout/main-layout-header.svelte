<script lang="ts">
	export let links: HeaderNavLink[];
	import { page } from '$app/stores';
	import type { HeaderNavLink } from '../../types/types';

	let menuIcon = 'fa-bars';
</script>

<div class="header">
	<div class="logo">
		<img src="/logo_white.png" alt="Trison" />
	</div>
	<ul class="nav__links">
		{#each links as link}
			<li>
				<a
					href={link.href}
					class="animated__underline"
					aria-current={$page.url.pathname === link.href ? 'page' : undefined}
				>
					<i class={'fas ' + link.icon} />
					{link.title}
				</a>
			</li>
		{/each}
	</ul>
	<div
		class="menu__button"
		on:click={(e) => {
			if (menuIcon === 'fa-bars') {
				menuIcon = 'fa-times';
			} else {
				menuIcon = 'fa-bars';
			}
		}}
		on:keyup={() => {}}
	>
		<i class="fas {menuIcon}" />
	</div>
</div>
{#if menuIcon === 'fa-times'}
	<div class="conditional_menu">
		<ul class="menu__links">
			{#if !localStorage.getItem('token')}
				<li>
					<a href="/login" class="animated__underline">
						<i class="fas fa-sign-in-alt" />
						Login
					</a>
				</li>
				<li>
					<a href="/register" class="animated__underline">
						<i class="fas fa-user-plus" />
						Register
					</a>
				</li>
			{:else}
				<li>
					<a href="/logout" class="animated__underline">
						<i class="fas fa-sign-out-alt" />
						Logout
					</a>
				</li>
				<li class="separator" />
				<li>
					<a href="/profile" class="animated__underline">
						<i class="fas fa-user" />
						Profile
					</a>
				</li>
				<li>
					<a href="/settings" class="animated__underline">
						<i class="fas fa-cog" />
						Settings
					</a>
				</li>
				<li class="separator" />
				<li>
					<a href="/load-script" class="animated__underline">
						<i class="fas fa-file-code" />
						Load Script
					</a>
				</li>
			{/if}
		</ul>
	</div>
{/if}

<style>
	* {
		box-sizing: border-box;
	}

	.header {
		display: flex;
		background-image: linear-gradient(90deg, #ff6060 0%, #ff8989 50%, #ff6060 100%);
		font-family: 'Montserrat', sans-serif;
		justify-content: space-around;
		align-items: center;
		padding: 1rem 0 1rem 0;
	}
	.nav__links {
		display: flex;
		margin: 0;
		height: 100%;
		justify-content: space-between;
		align-items: space-between;
		list-style: none;
	}

	li {
		margin-right: 2rem;
		position: relative;
		height: 100%;
	}

	a[aria-current='page'] {
		border-bottom: 2px solid #fff;
	}

	.logo {
		width: 6rem;
		height: 1rem;
	}

	.logo img {
		width: 100%;
		height: 100%;
	}

	i {
		margin-right: 0.5rem;
	}

	.animated__underline {
		position: relative;
		color: #fff;
		text-decoration: none;
		padding: 0.5rem 0;
	}

	.animated__underline::after {
		content: '';
		position: absolute;
		width: 100%;
		height: 2px;
		background: #fff;
		bottom: 0;
		left: 0;
		transition: transform 0.3s ease;
		transform: scaleX(0);
	}

	.animated__underline:hover::after {
		transform: scaleX(1);
	}

	.menu__button {
		cursor: pointer;
	}

	.menu__button i {
		font-size: 1.5rem;
		color: #fff;
	}

	.conditional_menu {
		position: absolute;
		top: 48px;
		right: 0;
		display: block;
		flex-direction: row;
		justify-content: center;
		background-attachment: fixed;
		background-image: linear-gradient(90deg, #ff6060 0%, #ff8989 50%, #ff6060 100%);
		font-family: 'Montserrat', sans-serif;
		justify-content: space-around;
		align-items: center;
		padding: 0.5rem 0 1rem 0;
		max-width: 300px;
	}

	.menu__links {
		margin: 0;
		height: 100%;
		justify-content: space-between;
		align-items: space-between;
		list-style: none;
	}

	.menu__links i {
		margin-right: 0.5rem;
	}

	.menu__links a {
		color: #fff;
		text-decoration: none;
		padding: 0.5rem 0;
		font-weight: 600;
	}

	.menu__links li {
		margin: 1rem 4rem 1rem 0;
		position: relative;
		height: 100%;
	}

	.menu__links li.separator {
		border-bottom: 1px dashed #fff;
		margin: 1rem 0;
	}
	@media (max-width: 768px) {
		.header {
			flex-direction: column;
			padding: 0.5rem 0 1rem 0;
		}

		ul {
			flex-direction: column;
			align-items: center;
			width: 100%;
			padding: 0;
		}

		li {
			margin: 0.5rem 0;
		}

		.menu__button {
			display: block;
			cursor: pointer;
		}

		.menu__button i {
			font-size: 1.5rem;
			color: #fff;
		}
	}
</style>
