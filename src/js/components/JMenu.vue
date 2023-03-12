<template>
    <div class="jam-menu">
        <ul>
            <slot />
        </ul>
    </div>
</template>

<style lang="scss">
.jam-menu {
    @apply bg-white;

    &::-webkit-scrollbar {
        @apply w-2;
    }
    &::-webkit-scrollbar-track {
        @apply bg-white;
    }
    &::-webkit-scrollbar-thumb {
        @apply bg-gray-200 rounded-lg;
    }
    .jam-menu-item {
        @apply block px-3.5 py-2.5 cursor-pointer text-gray-900 hover:bg-gray-50 duration-150;
    }
}
</style>
