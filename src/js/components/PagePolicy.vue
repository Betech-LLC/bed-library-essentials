<template>
  <section class="policy">
    <div class="policy-head">Hỗ trợ khách hàng</div>

    <div class="policy-body">
      <ul class="policy-nav">
        <li
          class="nav-item"
          v-for="(policy, index) in list_sidebar"
          :key="index"
        >
          <a
            :href="`${policy.slug}`"
            class="nav-link"
            :class="{
              active: checkActive(policy.slug),
            }"
          >
            <div v-if="policy.icon" class="nav-icon" v-html="policy.icon"></div>
            <IconPolicyDefault v-else />
            <div>
              {{ policy.title }}
            </div>
          </a>
        </li>
      </ul>

      <div class="policy-content">
        <h1 class="policy-title">
          {{ currentPolicy.title }}
        </h1>
        <div v-html="currentPolicy.content" class="policy-prose" />
      </div>
    </div>
  </section>
</template>
<script>
export default {
  props: ["list_sidebar", "full_path"],
  data() {
    return {
      isOpenMobile: false,
      currentPolicy: "",
    };
  },
  watch: {
    isOpenMobile: function () {
      if (this.isOpenMobile) {
        document.body.classList.add("overflow-hidden");
      } else {
        document.body.classList.remove("overflow-hidden");
      }
    },
  },
  methods: {
    togglePolicyMobile() {
      this.isOpenMobile = !this.isOpenMobile;
    },
    checkActive(url) {
      const arrPath = this.full_path.split("/");
      this.currentPolicy = this.list_sidebar[0];
      return url == arrPath[arrPath.length - 1];
    },
  },
};
</script>
