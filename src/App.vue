<template>
<div class="app-wrapper">
  <Navbar />
  <router-view />
  <div class="d-flex">
    <main class="container my-5">
      <Carousel class="my-5" :items="items" />

    </main>
  </div>

  <Footer />
</div>
</template>

<script setup>
import { ref, onMounted, watch } from 'vue'
import { useRouter  } from 'vue-router'
import { computed } from 'vue'
import Navbar from '@/components/Navbar.vue'
import Carousel from './components/Carousel.vue'
import Footer from './components/Footer.vue'
import { useI18n } from 'vue-i18n'

const router = useRouter()
const { t } = useI18n()


// Dynamische Texte je nach Route
const bannerTitle = computed(() => {
  return route.path === '/second-page' ? t('title_secondpage') : t('title_homepage')
})
const bannerSubtitle = computed(() => {
  return route.path === '/second-page' ? t('text_secondpage') : t('text_homepage')
})
const bannerButtonText = computed(() => {
  return route.path === '/second-page' ? t('backToHome') : t('secondPage')
})
const bannerButtonLink = computed(() => {
  return route.path === '/second-page' ? '/' : '/second-page'
})

function generateRandomId() {
  return Math.floor(10000 + Math.random() * 90000).toString();
}

const itemId = generateRandomId();

const items = [
  { id: itemId, image: 'images/stockphoto1.jpg', title: t('carousel.title1'), text: t('carousel.desc1') },
  { id: itemId, image: 'images/stockphoto4.jpg', title: t('carousel.title2'), text: t('carousel.desc2') },
  { id: itemId, image: 'images/stockphoto3.jpg', title: t('carousel.title3'), text: t('carousel.desc3') },
  { id: itemId, image: 'images/stockphoto2.jpg', title: t('carousel.title4'), text: t('carousel.desc4') },
  { id: itemId, image: 'images/stockphoto5.jpg', title: t('carousel.title5'), text: t('carousel.desc5') },
  { id: itemId, image: 'images/stockphoto6.jpg', title: t('carousel.title6'), text: t('carousel.desc6') }
]

</script>

<style scoped>

.app-wrapper {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}

.btn {
  color: white;
}

.buttons {
  margin-top: 1.5rem;
  display: flex;
  gap: 1rem;
}

@media (max-width: 767px) {
  .hero-content {
    text-align: center;
    padding-top: 2rem;
  }

  .buttons {
    flex-direction: column;
    align-items: center;
  }

  .buttons a {
    width: 100%;
    max-width: 250px;
  }
}
</style>
