<template>
    <nav v-if="items && items.length > 0" class="breadcrumb">
        <template v-for="(item, index) in items">
            <template v-if="item.link">
                <JLink :href="item.link" class="breadcrumb-item">
                  <span v-html="item.title"></span>
                </JLink>
                <span class="icon">
                  <slot name="icon">
                    <JIconSlash />
                  </slot>
                </span>
            </template>
            <template v-else>
              <template  v-if="items.length === index + 1">
                <h1 v-if="isH1" class="breadcrumb-item" v-html="item.title"></h1>
                <span v-else class="breadcrumb-item" v-html="item.title"> </span>
              </template>
              <template v-else>
                <span class="breadcrumb-item" v-html="item.title"></span>
                <span class="icon">
                  <slot name="icon">
                      <JIconSlash />
                  </slot>
                </span>
              </template>
           </template>
        </template>
    </nav>
</template>

<script>
import JIconSlash from '@core/components/JIcon/Slash.vue'
import JLink from '@core/components/JLink.vue'
export default {
    components: { JIconSlash, JLink },
    props: {
        items: {
            type: Array,
            required: true,
        },
        isH1: {
            type: Boolean,
            default: false,
        },
    },
    components: {
        JLink,
    },
}
</script>
