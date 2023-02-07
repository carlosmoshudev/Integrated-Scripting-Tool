<script lang="ts">
	export let links: { Text: string; Route: string; FaIcon: string }[] = [];
	import { page } from '$app/stores';
	import logo_trison from '/logo_white.png';
</script>

<header>
	<ul>
		<li>
			<div class="logo">
				<img src={logo_trison} alt="Trison" />
			</div>
		</li>
		<li>
			<p>TRISON Integrated Scripting Tool</p>
		</li>
		{#each links as link}
			<li aria-current={$page.url.pathname === link.Route ? 'page' : undefined}>
				<a href={link.Route} class="header-link">
					<i class={'fas ' + link.FaIcon} />
					{link.Text}
				</a>
			</li>
		{/each}
	</ul>
</header>

<style>
	@import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500;600;700&display=swap');

	* {
		box-sizing: border-box;
	}

	ul {
		background-image: linear-gradient(90deg, #ff6060 0%, #ff8989 50%, #ff6060 100%);
		font-family: 'Montserrat', sans-serif;
		display: flex;
		list-style: none;
		padding: 0.5rem 2.5rem;
		margin: 0;
		height: 100%;
		display: flex;
		justify-content: space-between;
		align-items: center;
	}

	li {
		margin-right: 1rem;
		position: relative;
		height: 100%;
	}

	li[aria-current='page'] {
		border-radius: 0.25rem;
		border-bottom: 2px solid #ff6060bb;
	}

	li[aria-current='page']::before {
		content: '';
		margin-right: 0.5rem;
		width: 0;
		height: 0;
		position: absolute;
		top: -1rem;
		left: calc(50% - 6px);
		border: 6px solid transparent;
		border-top: 6px solid #ff8989;
	}

	.header-link {
		color: #fff;
		text-decoration: none;
	}

	.header-link:hover {
		color: #ff6060;
	}

	.logo {
		width: 6rem;
		height: 1rem;
	}

	.logo img {
		width: 100%;
		height: 100%;
	}

	p {
		color: #fff;
		font-size: 1rem;
		font-weight: 600;
	}

	i {
		margin-right: 0.5rem;
	}
	@media (max-width: 768px) {
		ul {
			flex-direction: column;
			align-items: flex-start;
		}

		li {
			margin-right: 0;
			margin-bottom: 0.5rem;
		}

		li[aria-current='page']::before {
			top: -0.5rem;
		}
	}
</style>
