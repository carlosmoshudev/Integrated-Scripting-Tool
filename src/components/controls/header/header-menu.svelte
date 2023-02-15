<!-- Path: src\components\controls\header\header-menu.svelte -->
<script lang="ts">
	import { Menu_Links, Menu_Link } from './../../../imports/header';
	import { CSS, Collections } from './../../../data/header';

	const { MenuButton, DefaultIcon, AlternateIcon } = CSS;

	const { LoggedMenuItems, NotLoggedMenuItems } = Collections;

	let iconCss = DefaultIcon;

	function Swap_MenuIcon() {
		iconCss === DefaultIcon ? (iconCss = AlternateIcon) : (iconCss = DefaultIcon);
	}
</script>

<div class={MenuButton} on:click={Swap_MenuIcon} on:keyup={() => {}}>
	<i class="fas {iconCss}" />
</div>
{#if iconCss !== DefaultIcon}
	<Menu_Links>
		{#if !localStorage.getItem('token')}
			{#each Object.entries(NotLoggedMenuItems) as [_Key, Properties]}
				<Menu_Link {Properties} />
			{/each}
		{:else}
			{#each Object.entries(LoggedMenuItems) as [_Key, Properties]}
				<Menu_Link {Properties} />
			{/each}
		{/if}
	</Menu_Links>
{/if}
