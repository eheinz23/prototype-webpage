<template>
  <div class="gallery-content">
    <div
      v-for="(item, index) in galleryItems"
      :key="index"
      class="gallery-section"
    >
      <!-- Parallax Background Section -->
      <div
        v-if="item.type === 'parallax'"
        class="parallax-section"
        :style="getParallaxStyle(item.src)"
      ></div>

      <!-- Textblock -->
      <p
        v-else-if="item.type === 'text'"
        class="gallery-text"
      >
        {{ $t(item.i18nKey) }}
      </p>

      <!-- Bild -->
      <img
        v-else-if="item.type === 'image'"
        class="gallery-image"
        :src="item.src"
        :alt="item.alt"
      />
    </div>
  </div>
</template>

<script>
import { useRoute } from 'vue-router'
import galleryItems from '@/data/galleryImages.json'

export default {
  name: 'ParallaxGallery',
  data() {
    return {
      galleryItems
    }
  },
  methods: {
    getParallaxStyle(src) {
      return {
        backgroundImage: `url(${src})`
      }
    }
  }
}

</script>

<style scoped>
.gallery-content {
  display: flex;
  flex-direction: column;
}

.parallax-section {
  height: 400px;
  background-size: cover;
  background-attachment: fixed;
  background-position: center;
  margin-bottom: 2rem;
}

.gallery-text {
  padding: 1rem 2rem;
  font-size: 1.1rem;
  text-align: center;
  color: var(--text-color);
}

.gallery-image {
  width: 100%;
  max-height: 400px;
  object-fit: cover;
  margin-bottom: 2rem;
}
</style>
