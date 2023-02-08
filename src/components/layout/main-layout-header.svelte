<script lang="ts">
	export let links: HeaderNavLink[];
	import { page, getStores } from '$app/stores';
	import type { HeaderNavLink } from '../../types/types';

	getStores().page.subscribe((value) => {
		console.log(value);
	});
</script>

<div class="header">
	<div class="logo">
		<img src="/logo_white.png" alt="Trison" />
	</div>

	<ul>
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
	<div class="menu__button">
		<i class="fas fa-bars" />
	</div>
</div>

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
		padding: 0.5rem 0 1rem 0;
	}
	ul {
		display: flex;
		margin: 0;
		height: 100%;
		justify-content: space-between;
		align-items: space-between;
		list-style: none;
	}

	li {
		margin-right: 1rem;
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
