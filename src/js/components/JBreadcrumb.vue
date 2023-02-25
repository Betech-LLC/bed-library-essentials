<template>
  <nav class="container" aria-label="breadcrumb" v-if="items.length">
    <ol class="breadcrumb">
      <template v-for="(item, index) in items" :key="index">
        <li class="breadcrumb-item">
          <a :href="item.link">{{ item.title }}</a>
        </li>
      </template>
    </ol>
  </nav>
</template>

<script>
export default {
  props: {
    items: {
      type: Array,
      required: true,
    },
  },
};
</script>
