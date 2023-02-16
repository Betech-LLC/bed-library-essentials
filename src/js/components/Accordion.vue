<template>
  <div class="accordion">
    <div
      v-for="(item, index) in items"
      :key="index"
      class="accordion-item"
      :class="{ active: index === currentActive }"
    >
      <div class="accordion-header">
        <button @click="toggleItem(index)">
          <span class="accordion-title">{{ item.title }}</span>
          <span v-if="item.active" class="accordion-icon">&#x25B2;</span>
          <span v-else class="accordion-icon">&#x25BC;</span>
        </button>
      </div>
      <div class="accordion-content">
        <div v-html="item.content" class="accordion-content-inner"></div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    items: {
      type: Array,
      required: true,
    },
  },
  data() {
    return {
      currentActive: this.items.findIndex(x => !!x.active),
    };
  },
  mounted() {
    document
      .querySelectorAll(".accordion .accordion-content")
      .forEach(function (el) {
        el.style.maxHeight = el.scrollHeight + "px";
      });
  },
  methods: {
    toggleItem(index) {
      this.currentActive = this.currentActive !== index ? index : null;
    },
  },
};
</script>
