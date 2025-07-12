<template>
  <div id="carouselSlider" class="carousel slide" data-bs-ride="carousel">
    <div class="carousel-inner">
      <div
        class="carousel-item"
        :class="{ active: i === 0 }"
        v-for="(slide, i) in groupedSlides"
        :key="i"
      >
        <div class="d-flex justify-content-center gap-3 px-3">
          <div class="card slider-card" v-for="item in slide" :key="item.id">
            <img :src="item.image" class="card-img-top" :alt="item.title">
            <div class="card-body border-top-0 rounded-bottom">
              <h5 class="card-title">{{ item.title }}</h5>
              <p class="card-text">{{ item.text }}</p>
            </div>
          </div>
        </div>
      </div>
    </div>

    <button class="carousel-control-prev" type="button" data-bs-target="#carouselSlider" data-bs-slide="prev">
      <span class="carousel-control-prev-icon" aria-hidden="true" />
      <span class="visually-hidden">Zurück</span>
    </button>

    <button class="carousel-control-next" type="button" data-bs-target="#carouselSlider" data-bs-slide="next">
      <span class="carousel-control-next-icon" aria-hidden="true" />
      <span class="visually-hidden">Weiter</span>
    </button>
  </div>
</template>

<script setup>
const props = defineProps({
  items: {
    type: Array,
    required: true
  }
})

const groupedSlides = []
for (let i = 0; i < props.items.length; i += 3) {
  groupedSlides.push(props.items.slice(i, i + 3))
}
</script>

<style scoped>

.slider-card {
  flex: 0 0 30%;
  max-width: 30%;
  max-height: 50vh;
  text-align: center;
  overflow: hidden;
  background-color: var(--card-background);
  color: var(--text-color);
}

.slider-card .card-body {
  border: 1px solid var(--border-color);
}

.carousel-control-prev-icon, .carousel-control-next-icon {
  filter: invert(0);
}

.card-img-top {
  object-fit: cover;
  height: 200px;
}

</style>
