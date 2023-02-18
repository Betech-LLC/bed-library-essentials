<template>
  <main>
    <Breadcrumb
      :items="[
        {
          title: 'Accordion Item 1',
          link: 'Accordion Item 1',
        },
        {
          title: 'Accordion Item 1',
          link: 'Accordion Item 1',
        },
        {
          title: 'Accordion Item 1',
          link: 'Accordion Item 1',
        },
      ]"
    />
    <div class="container">
      <h1 class="headline-1">Hỗ trợ khách hàng</h1>
      <div class="flex">
        <div class="w-1/4 px-4 py-6 bg-gray-200">
          <ul class="tabs">
            <li class="tab is-active"><a>Pictures</a></li>
            <li class="tab"><a>Pictures</a></li>
            <li class="tab"><a>Pictures</a></li>
            <li class="tab"><a>Pictures</a></li>
            <li class="tab"><a>Pictures</a></li>
          </ul>
        </div>
        <div class="flex-1 px-4 py-6 bg-white">content</div>
      </div>
    </div>
  </main>
</template>
