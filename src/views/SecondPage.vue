<template>
<Banner
  :title="$t('title_secondpage')"
  :subtitle="$t('text_secondpage')"
  :buttons="bannerButtons"
  backgroundImage="/images/banner1.jpg"
>
</Banner>
<main class="container  my-5 px-5">
  <Accordion />
  <div class="row">
    <div class="col-md-6">
      <CardDetail id="cardId_a1234" class="my-5"/>
      <CardDetail id="cardId_d1234" class="my-5"/>
    </div>
    <div class="col-md-6">
      <CardDetail id="cardId_b5678" class="my-5"/>
      <CardDetail id="cardId_c6789" class="my-5"/>
    </div>
  </div>
</main>

</template>

<script setup>
import { useRoute } from 'vue-router'
import Banner from '@/components/Banner.vue'
import Accordion from '@/components/Accordion.vue'
import CardDetail from '@/components/CardDetail.vue'
</script>
