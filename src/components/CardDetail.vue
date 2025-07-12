<template>
  <div class="card-detail" v-if="card">
    <img :src="card.image" alt="Bild" class="card-image" />
    <div class="card-content">
      <h2>{{ $t(`cards.${id}.title`) }}</h2>
      <p>{{ $t(`cards.${id}.text`) }}</p>
      <div class="tags">
        <span class="tag" v-for="tag in card.tags" :key="tag">{{ tag }}</span>
      </div>
      <router-link to="/" class="btn btn-secondary mt-3">Zurück</router-link>
    </div>
  </div>
</template>

<script>
import cardData from '@/data/cardDetailData.json'

export default {
  name: 'CardDetail',
  props: {
    id: {
      type: String,
      required: true,
      default: "cardId_b5678"
    }
  },
  data() {
    return {
      card: null
    };
  },
  mounted() {
    this.loadCard();
  },
  methods: {
    async loadCard() {
      const res = await fetch('/src/data/cardDetailData.json');
      const cards = await res.json();
      this.card = cardData.find(c => c.id === this.id);
    }
  }
};

</script>

<style scoped>
.card-detail {
  max-width: 800px;
  margin: 2rem auto;
  padding: 1rem;
  background: var(--background);
  color: var(--text);
  box-shadow: 0 2px 10px rgba(0,0,0,0.2);
  border-radius: 12px;
}

.card-image {
  width: 100%;
  height: auto;
  border-radius: 8px;
}

.card-content {
  margin-top: 1rem;
}

.tags {
  margin-top: 1rem;
}

.tag {
  display: inline-block;
  background: #ddd;
  color: #333;
  padding: 0.3rem 0.6rem;
  margin: 0.2rem;
  border-radius: 5px;
  font-size: 0.8rem;
}
</style>
