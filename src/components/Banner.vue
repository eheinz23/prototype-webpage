<template>
  <section class="banner-section text-start py-5 position-relative" :style="{ backgroundImage: `url(${backgroundImage})` }">
    <div class="overlay position-absolute top-0 start-0 w-100">
      <slot name="navbar"></slot>
    </div>
    <div class="container mt-5 pt-5 text-light">
      <div class="row">
        <div class="col-md-8">
          <h1 class="display-4">{{ title }}</h1>
          <p class="lead">{{ subtitle }}</p>
          <div class="mt-4">
            <button v-for="(btn, index) in buttons" :key="index"
                    class="btn btn-outline-light btn-lg me-2"
                    @click="btn.action">
              <router-link :to="buttonLink">
                {{ btn.text }}
              </router-link>
            </button>
          </div>
        </div>
      </div>
    </div>
    <div class="source-text">
      {{ $t('sourcePhoto') }}
    </div>
  </section>
</template>

<script setup>
import { useI18n } from 'vue-i18n'
const { t } = useI18n()

defineProps({
  title: String,
  subtitle: String,
  buttons: Array,
  backgroundImage: {
    type: String,
    default: '/images/banner1.jpg'
  },
  buttonText: String,
  buttonLink: String,
})
</script>

<style scoped>
.banner-section {
  background-size: cover;
  background-position: center;
  min-height: 400px;
  position: relative;
}
.overlay {
  z-index: 10;
}

.source-text {
  position: absolute;
  bottom: 1rem;
  right: 1rem;
  font-size: 0.9rem;
  opacity: 0.8;
}
</style>
