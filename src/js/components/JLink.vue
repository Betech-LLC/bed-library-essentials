<template>
    <CoreLink v-bind="$attrs">
        <slot></slot>
    </CoreLink>
</template>

<script>
import CoreLink from '@framework/components/CoreLink.vue'
export default {
    components: { CoreLink },
}
</script>
