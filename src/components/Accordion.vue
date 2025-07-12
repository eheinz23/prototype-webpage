<template>
  <div class="accordion" id="accordionExample">
    <div class="accordion-item" v-for="(item, index) in items" :key="item.id">
      <h2 class="accordion-header" :id="`heading${index}`">
        <button class="accordion-button" type="button" data-bs-toggle="collapse"
                :data-bs-target="`#collapse${index}`" :aria-controls="`collapse${index}`">
        {{ $t(`accordion.${item.id}.title`) }}
        </button>
      </h2>
      <div :id="`collapse${index}`" class="accordion-collapse collapse"
           :aria-labelledby="`heading${index}`" data-bs-parent="#accordionExample">
        <div class="accordion-body">
          {{ $t(`accordion.${item.id}.body`) }}
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      items: [
        { id: "item_1" },
        { id: "item_2" },
        { id: "item_3" },
        { id: "item_4" },
        { id: "item_5" }
      ]
    };
  }
};
</script>

<style scoped>

.accordion-button:focus {
  background-color: var(--bg-accordion);
  color: var(--text-accordion);
  box-shadow: none;
}

.accordion-button:not(.collapsed) {
  color: var(--text-accordion);
  background-color: var(--bg-accordion);
}

.accordion-button::after {
  filter: invert(0.5);
}

</style>
