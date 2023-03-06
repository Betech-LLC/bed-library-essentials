<template>
    <li class="mr-2">
        <a
            href="#"
            class="inline-block p-4 border-b-2 rounded-t-lg"
            :class="
                isActive
                    ? 'text-blue-600 border-blue-600 active'
                    : 'border-transparent hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300'
            "
        >
            Profile
        </a>
    </li>
</template>
<script>
export default {
    props: ["isActive"],
};
</script>
