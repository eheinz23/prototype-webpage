<template>
<Banner
  :title="$t('title_homepage')"
  :subtitle="$t('text_homepage')"
  :buttons="bannerButtons"
  backgroundImage="/images/banner1.jpg"
  >
  </Banner>
  <main class="container  my-5 px-5">
    <Accordion />
  </main>
</template>

<script setup>
import { useRoute } from 'vue-router'
import Banner from '@/components/Banner.vue'
import Accordion from '@/components/Accordion.vue'

</script>
