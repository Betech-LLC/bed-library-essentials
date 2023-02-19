<template>
  <div class="tabs">
  <ul>
    <li class="is-active"><a>Pictures</a></li>
    <li><a>Music</a></li>
    <li><a>Videos</a></li>
    <li><a>Documents</a></li>
  </ul>
</div>
    <div class="tab-panels">
      <template v-for="(tab, index) of tabs">
        <div
          v-if="isCurrentTab(tab, index)"
          v-bind="tab.props"
          class="tab-panel"
          :class="{ 'is-active': isCurrentTab(tab, index) }"
          :index="index"
        >
          <component :is="tab"></component>
        </div>
      </template>
    </div>
  </div>
</template>
<script>
import { toSlug } from "@core/utils";
export default {
  props: {
    activeIndex: {
      type: Number,
      default: null,
    },
  },
  emits: ["update:activeIndex"],
  data() {
    return {
      currentTabIndex: this.activeIndex,
    };
  },
  computed: {
    tabs() {
      return this.$slots.default() ?? [];
    },
  },
  watch: {
    activeIndex(newValue) {
      this.currentTabIndex = newValue;
    },
  },
  methods: {
    onTabClick(index) {
      this.currentTabIndex = index;
      this.$emit("update:activeIndex", index);
    },
    isCurrentTab(tab, index) {
      if (this.currentTabIndex !== null) return this.currentTabIndex === index;

      return window.location.hash === `#${toSlug(tab.props.header)}`;
    },
  },
};
</script>
