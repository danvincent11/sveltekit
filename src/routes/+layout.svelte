<script>
  // import {page} from '$app/stores'
  import '../app.scss';
  import '../app.postcss';

  const APP_NAME = 'Nuxify';
  const APP_DESCRIPTION = "Writing Software Like It's Ours";
  const APP_URL = 'localhost:3000';
  const APP_KEYWORDS = 'nuxify, web, mobile';
  const TITLE = 'Nuxify';
</script>

<svelte:head>
  <title>{TITLE}</title>
  <meta name="description" content={APP_DESCRIPTION} />
  <meta property="og:site_name" content={APP_NAME} />
  <meta property="og:description" content={APP_DESCRIPTION} />
  <meta property="og:url" content={APP_URL} />
  <meta property="og:title" content={APP_NAME} />
  <meta property="og:keywords" content={APP_KEYWORDS} />
  <meta property="og:locale" content="en" />
  <meta property="og:type" content="website" />
  <meta property="og:image" content="{APP_URL}/icon.png" />
  <meta property="og:image:alt" content="{APP_NAME} Logo" />
  <meta property="og:image:width" content="300" />
  <meta property="og:image:height" content="auto" />
</svelte:head>

<slot />
