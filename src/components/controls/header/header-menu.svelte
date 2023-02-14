<script lang="ts">
	import { Menu_Links, Menu_Link } from './components';
	import {
		menuIconContainer_CSS,
		defaultMenuIcon_CSS,
		alternateMenuIcon_CSS,
		MenuItemCollectionOnLoggedIn,
		MenuItemCollectionOnLoggedOut
	} from './data';
	let menuIcon_CSS = defaultMenuIcon_CSS;
	function Swap_MenuIcon() {
		menuIcon_CSS === defaultMenuIcon_CSS
			? (menuIcon_CSS = alternateMenuIcon_CSS)
			: (menuIcon_CSS = defaultMenuIcon_CSS);
	}
</script>

<div class={menuIconContainer_CSS} on:click={Swap_MenuIcon} on:keyup={() => {}}>
	<i class="fas {menuIcon_CSS}" />
</div>
{#if menuIcon_CSS !== defaultMenuIcon_CSS}
	<Menu_Links>
		{#if !localStorage.getItem('token')}
			{#each Object.entries(MenuItemCollectionOnLoggedOut) as [_Key, Properties]}
				<Menu_Link {Properties} />
			{/each}
		{:else}
			{#each Object.entries(MenuItemCollectionOnLoggedIn) as [_Key, Properties]}
				<Menu_Link {Properties} />
			{/each}
		{/if}
	</Menu_Links>
{/if}
