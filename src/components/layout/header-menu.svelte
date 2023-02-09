<script lang="ts">
	let menuIcon = 'fa-bars';

	import { loggedMenuItems, notLoggedMenuItems } from '../../models/header';

	function swapMenuIcon() {
		menuIcon = menuIcon === 'fa-bars' ? 'fa-times' : 'fa-bars';
	}
</script>

<div class="menu__button base__formatting" on:click={swapMenuIcon} on:keyup={() => {}}>
	<i class="fas {menuIcon}" />
</div>
{#if menuIcon === 'fa-times'}
	<div class="top__left__menu base__formatting">
		<ul class="menu__links">
			{#if !localStorage.getItem('token')}
				{#each Object.entries(notLoggedMenuItems) as [_K, menuItem]}
					<li>
						<a href={menuItem.href} class="animated__underline">
							<i class="fas {menuItem.icon}" />
							{menuItem.title}
						</a>
					</li>
				{/each}
			{:else}
				{#each Object.entries(loggedMenuItems) as [_K, menuItem]}
					<li>
						<a href={menuItem.href} class="animated__underline">
							<i class="fas {menuItem.icon}" />
							{menuItem.title}
						</a>
					</li>
				{/each}
			{/if}
		</ul>
	</div>
{/if}
