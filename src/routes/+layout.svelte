<script lang="ts">
	import MainLayoutHeader from '../Components/Layout/MainLayoutHeader.svelte';
	import '../styles/global.css';
	const headerLinks = [
		{
			Text: 'AV API REST',
			Route: '/',
			FaIcon: 'fa-code'
		},
		{
			Text: 'Zabbix',
			Route: '/zabbix',
			FaIcon: 'fa-server'
		},
		{
			Text: 'IPAM & Racks',
			Route: '/ipam',
			FaIcon: 'fa-network-wired'
		},
		{
			Text: 'Remote APs',
			Route: '/remote-aps',
			FaIcon: 'fa-wifi'
		},
		{
			Text: 'Mesh Central & Commander',
			Route: '/mesh-central',
			FaIcon: 'fa-laptop'
		},
		{
			Text: 'Radius',
			Route: '/radius',
			FaIcon: 'fa-user'
		},
		{
			Text: 'ZTP tools',
			Route: '/ztp-tools',
			FaIcon: 'fa-microchip'
		}
	];
</script>

<header>
	<MainLayoutHeader links={headerLinks} />
</header>
<main>
	<slot />
</main>

<style>
	header {
		width: 102%;
		margin-left: -1%;
		margin-top: -0.4%;
		height: 3rem;
	}
</style>
