<template>
<Banner
  :title="$t('welcome')"
  :subtitle="$t('lead')"
  :buttons="bannerButtons"
  backgroundImage="/images/banner.jpg"
>
  <template #navbar>
    <Navbar :theme="theme" @toggle-theme="toggleTheme" />
  </template>
</Banner>
<main class="container my-5">
  <Carousel class="my-5" :items="items" />

  <Accordion class="m-5" />
</main>
</template
