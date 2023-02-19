<template>
  <div class="preview-wrapper">
    <div class="preview-toolbar">
      <h2>Xem trước</h2>
      <div class="flex space-x-2">
        <div
          class="preview-device-icon"
          :class="{ active: currentDevice === 'desktop' }"
          @click="currentDevice = 'desktop'"
        >
          <svg
            width="20"
            height="20"
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
            xmlns:xlink="http://www.w3.org/1999/xlink"
            x="0px"
            y="0px"
            viewBox="0 0 64 64"
            xml:space="preserve"
          >
            <path
              d="M57,4.1H7c-2.8,0-5,2.2-5,5v31.6c0,2.8,2.2,5,5,5h18.1l-3.3,12.2h-5.6c-0.6,0-1,0.4-1,1s0.4,1,1,1h31.6c0.6,0,1-0.4,1-1
						s-0.4-1-1-1h-5.6l-3.3-12.2H57c2.8,0,5-2.2,5-5V9.1C62,6.4,59.8,4.1,57,4.1z M40.1,57.9H23.9l3.3-12.2h9.6L40.1,57.9z M60,40.7
						c0,1.7-1.3,3-3,3H7c-1.7,0-3-1.3-3-3V9.1c0-1.7,1.3-3,3-3h50c1.7,0,3,1.3,3,3V40.7z"
              fill="currentColor"
            ></path>
          </svg>
        </div>
        <div
          class="preview-device-icon"
          :class="{ active: currentDevice === 'mobile' }"
          @click="currentDevice = 'mobile'"
        >
          <svg
            width="20"
            height="20"
            version="1.1"
            id="lni_lni-mobile"
            xmlns="http://www.w3.org/2000/svg"
            xmlns:xlink="http://www.w3.org/1999/xlink"
            x="0px"
            y="0px"
            viewBox="0 0 64 64"
            xml:space="preserve"
          >
            <g>
              <circle cx="32" cy="51.8" r="2.5" fill="currentColor"></circle>
              <path
                d="M35,10h-6c-0.6,0-1,0.4-1,1s0.4,1,1,1h6c0.6,0,1-0.4,1-1S35.5,10,35,10z"
                fill="currentColor"
              ></path>
              <path
                d="M45,2H19c-2.8,0-5,2.2-5,5v50c0,2.8,2.2,5,5,5h26c2.8,0,5-2.2,5-5V7C50,4.2,47.8,2,45,2z M48,57c0,1.7-1.3,3-3,3H19
								c-1.7,0-3-1.3-3-3V7c0-1.7,1.3-3,3-3h26c1.7,0,3,1.3,3,3V57z"
                fill="currentColor"
              ></path>
            </g>
          </svg>
        </div>
      </div>
    </div>

    <div class="preview-content" :class="currentDevice">
      <div class="preview">
        <div class="preview-url">
          <span>{{ data.url }}</span>
        </div>
        <div class="preview-title">{{ titlePreview }}</div>
        <div class="preview-description">{{ descriptionPreview }}</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["data"],
  data() {
    return {
      currentDevice: "desktop",
    };
  },
  computed: {
    titlePreview() {
      if (this.data.title.length > 60) {
        return this.data.title.substring(0, 60) + "...";
      }
      return this.data.title;
    },
    descriptionPreview() {
      if (this.data.description.length > 160) {
        return this.data.description.substring(0, 160) + "...";
      }
      return this.data.description;
    },
  },
};
</script>

<style lang="scss" scoped>
.preview-wrapper {
  width: calc(600px + 32px * 2);
  @apply space-y-2;
}

.preview-device-icon {
  @apply flex items-center justify-center w-8 h-8 rounded-sm cursor-pointer;
  &.active {
    @apply bg-blue-500 text-white;
  }
  &:not(.active) {
    @apply bg-gray-200 hover:bg-gray-300;
  }
}

.preview-toolbar {
  @apply flex items-center justify-between text-lg text-gray-600;
}
.preview-content {
  @apply shadow-sm border mx-auto;
  border-radius: 10px;
  max-width: 664px;
  padding: 32px;
  &.mobile {
    max-width: 400px;
    padding: 20px;

    .preview-title {
      margin-top: 10px;
      margin-bottom: 10px;
    }
  }
  &.desktop {
    .preview-title {
      white-space: nowrap;
      overflow: hidden;
      margin-top: 5px;
      margin-bottom: 3px;
    }
  }
}
.preview {
  font-family: Arial, sans-serif !important;
}
.preview-url {
  font-size: 14px;
  line-height: 16px;
  overflow: hidden;
  margin: 0 0 5px;
  white-space: nowrap;
  color: #202124;
  @apply border border-transparent border-dashed cursor-pointer;
  &:hover {
    @apply bg-gray-100 border-gray-600 cursor-pointer;
  }
}
.preview-title {
  font-size: 20px;
  font-weight: 500;
  line-height: 1.3;
  margin-bottom: 3px;
  color: #1a0dab;
  @apply border border-transparent border-dashed cursor-pointer;
  &:hover {
    @apply bg-gray-100 border-gray-600 underline;
  }
}
.preview-description {
  font-size: 14px;
  line-height: 1.58;
  clear: left;
  word-wrap: break-word;
  color: #545454;
  @apply border border-transparent border-dashed cursor-pointer;
  &:hover {
    @apply bg-gray-100 border-gray-600 cursor-pointer;
  }
}
</style>
