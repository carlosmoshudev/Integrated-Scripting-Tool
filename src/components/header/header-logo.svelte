<script lang="ts">
	import type { HeaderLogo } from '../framework';
	export let LogoProperties: HeaderLogo;
</script>

<div class="top__bar__logo base__formatting">
	{#if LogoProperties.Href}
		<a href={LogoProperties.Href}>
			<img src={LogoProperties.Source} alt={LogoProperties.Alternative_Text} />
		</a>
	{:else}
		<img src={LogoProperties.Source} alt={LogoProperties.Alternative_Text} />
	{/if}
</div>
