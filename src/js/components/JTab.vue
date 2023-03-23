<template>
    <div class="tabs">
        <div v-for="index in 5" :key="index" class="tab" :class="{ active: index === 1 }">Tất cả</div>
    </div>
</template>
