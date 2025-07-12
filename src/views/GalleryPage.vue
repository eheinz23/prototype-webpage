<template>
<Banner
  :title="$t('gallery.title')"
  :subtitle="$t('gallery.description')"
  :buttons="bannerButtons"
  backgroundImage="/images/banner1.jpg"
>
</Banner>
<ParallaxGallery />
</template>

<script setup>
import { useRoute } from 'vue-router'
import Banner from '@/components/Banner.vue'
import ParallaxGallery from '@/components/ParallaxGallery.vue'

</script>
