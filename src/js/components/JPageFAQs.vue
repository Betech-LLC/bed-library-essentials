<template>
    <JPagePolicy
        class="page-faqs"
        :list_sidebar="list_sidebar"
        :content="content"
        :breadcrumb="breadcrumb"
        :currentPath="currentPath"
        :staticContent="staticContent"
    >
        <template #content>
            <JAccordion v-if="content" class="accordion-faqs">
                <JAccordionItem
                    v-for="(item, index) in content.questions"
                    :key="index"
                    :item="{
                        title: `${index + 1}. ${item.question}`,
                    }"
                    :index="item.id"
                >
                    <div>
                        {{ item.answer }}
                    </div>
                </JAccordionItem>
            </JAccordion></template
        >
    </JPagePolicy>
</template>
<script>
import JPagePolicy from '@core/components/JPagePolicy.vue'
import JAccordion from '@core/components/JAccordion/index.vue'
import JAccordionItem from '@core/components/JAccordion/Item.vue'
export default {
    components: { JAccordion, JAccordionItem, JPagePolicy },
    props: {
        list_sidebar: {
            type: Array,
        },
        content: {
            type: Object,
        },
        breadcrumb: {
            type: Array,
        },
        currentPath: {
            type: String,
        },
        staticContent: {
            type: Object,
            default: () => {
                return {
                    title: 'Câu hỏi thường gặp',
                    emptyContent: 'Chúng tôi đang cập nhật câu hỏi, <br /> quý khách vui lòng quay lại sau.',
                }
            },
        },
    },
}
</script>
