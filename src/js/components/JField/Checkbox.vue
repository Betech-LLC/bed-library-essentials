<template>
  <div>
    <label class="checkbox">
      <input
        type="checkbox"
        :name="field.name"
        :id="field.id"
        :value="modelValue"
        @change="onchange"
      />
      <div class="checkmark">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="10"
          height="8"
          viewBox="0 0 10 8"
          fill="none"
        >
          <path
            d="M9 1L3.5 6.5L1 4"
            stroke="currentColor"
            stroke-width="1.6666"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
      </div>
      {{ field.label }}
    </label>
    <p v-if="field.hint" class="hint pl-[24px]">{{ field.hint }}</p>
  </div>
</template>
<script>
export default {
  props: ['field', 'modelValue'],
  emits: ['update:modelValue', 'pushToUrl'],

  methods: {
    onchange(e) {
      this.$emit('update:modelValue', e.target.checked)
      this.$emit('pushToUrl')
    },
  },
}
</script>
<style lang="scss" scoped>
.checkbox {
  @apply pl-6 relative cursor-pointer inline-flex;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
}
.checkbox input {
  @apply absolute opacity-0 cursor-pointer h-0 w-0;
}
.checkmark {
  @apply absolute w-4 h-4 left-0 top-1/2 transform -translate-y-1/2 border border-gray-300 rounded bg-white duration-150 flex justify-center items-center text-[#1570EF];
  > * {
    @apply hidden;
  }
}

/* On mouse-over, add a grey background color */
.checkbox:hover input ~ .checkmark {
  @apply bg-[#D1E9FF] border-[#1570EF];
}

/* When the checkbox is checked, add a blue background */
.checkbox input:checked ~ .checkmark {
  @apply bg-[#EFF8FF] border-[#1570EF];
  > * {
    @apply block;
  }
}

.checkbox input:focus ~ .checkmark {
  @apply bg-[#EFF8FF] border-[#1570EF];
  box-shadow: 0px 0px 0px 4px #d1e9ff;
}

/* Create the checkmark/indicator (hidden when not checked) */
// .checkmark:after {
//   content: '-';
//   position: absolute;
//   display: none;
// }
/* Show the checkmark when checked */
// .checkbox input:checked ~ .checkmark:after {
//   display: block;
// }

// /* Style the checkmark/indicator */
// .checkbox .checkmark:after {
//   left: 9px;
//   top: 5px;
//   width: 5px;
//   height: 10px;
//   border: solid white;
//   border-width: 0 3px 3px 0;
//   -webkit-transform: rotate(45deg);
//   -ms-transform: rotate(45deg);
//   transform: rotate(45deg);
// }
</style>
