<template>
  <main>
    <!-- COVER -->
    <section class="container">
      <div class="h-[70vh]">
        <JamPicture
          src="/assets/images/cover.webp"
          class="picture-contain"
          alt="Nhà thuốc phương chính"
        />
      </div>
    </section>

    <!-- FONT  -->
    <section class="container my-6">
      <div class="space-y-2">
        <!-- Primary -->
        <div class="flex items-center space-x-3">
          <div>Primary Hover:</div>
          <JamButton href="/" class="max-w-[186px] w-full">BUTTON</JamButton>
          <JamButton href="/" class="disable max-w-[186px] w-full"
            >BUTTON</JamButton
          >
        </div>

        <div class="flex items-center space-x-3">
          <div>Primary Click:</div>
          <JamButton as="button" @click="onClick()" class="max-w-[186px] w-full"
            >BUTTON</JamButton
          >
          <JamButton href="/" class="disable max-w-[186px] w-full"
            >BUTTON</JamButton
          >
        </div>

        <!-- Secondary -->
        <div class="flex items-center w-full p-2 space-x-3 bg-green-500">
          <div class="text-white">Secondary Hover:</div>
          <JamButton href="/" class="secondary max-w-[186px] w-full"
            >Xem giới thiệu</JamButton
          >
          <JamButton class="secondary disable max-w-[186px] w-full" as="button"
            >Xem giới thiệu</JamButton
          >
        </div>
        <div class="flex items-center w-full p-2 space-x-3 bg-green-500">
          <div class="text-white">Secondary Click:</div>
          <JamButton
            as="button"
            class="secondary max-w-[186px] w-full"
            @click="onClick()"
            >Xem giới thiệu</JamButton
          >
          <JamButton class="secondary disable max-w-[186px] w-full" as="button"
            >Xem giới thiệu</JamButton
          >
        </div>

        <!-- Tertiary -->
        <div class="flex items-center w-full p-2 space-x-3 bg-green-500">
          <div class="text-white max-w-[220px] w-full">Tertiary Hover:</div>
          <JamButton href="/" class="tertiary max-w-[220px] w-full"
            >CHỌN MUA</JamButton
          >
          <JamButton class="tertiary disable max-w-[220px] w-full" as="button"
            >CHỌN MUA</JamButton
          >
        </div>
        <div
          class="flex flex-wrap items-center w-full p-2 space-x-3 space-y-3 bg-green-500"
        >
          <div class="text-white max-w-[220px] w-full">Tertiary Click:</div>
          <JamButton
            as="button"
            class="tertiary max-w-[220px] w-full"
            @click="onClick()"
            >CHỌN MUA</JamButton
          >
          <JamButton class="tertiary disable max-w-[220px] w-full" as="button"
            >CHỌN MUA</JamButton
          >
        </div>

        <!-- Icon Button -->
        <div class="flex items-center space-x-3">
          <div>Icon Hover:</div>
          <JamButton href="/" :isIcon="true">BUTTON</JamButton>
          <JamButton href="/" :isIcon="true" class="disable">BUTTON</JamButton>
        </div>

        <div class="flex items-center space-x-3">
          <div>Icon Click:</div>
          <JamButton as="button" :isIcon="true" @click="onClick()"
            >BUTTON</JamButton
          >
          <JamButton href="/" :isIcon="true" class="disable">BUTTON</JamButton>
        </div>

        <!-- Label Button -->

        <div class="flex items-center space-x-3">
          <div>Label hover:</div>
          <JamButton as="button" class="label">Giảm đau, hạ sốt</JamButton>
        </div>

        <div class="flex items-center space-x-3">
          <div>Label active:</div>
          <JamButton as="button" class="label active"
            >Giảm đau, hạ sốt</JamButton
          >
        </div>

        <QuantityInput :number="quantity" @change-quanity="changeQuantity" />
      </div>
    </section>
    <section class="container">
      <h1 class="mb-6 display-1">FONT</h1>
      <div class="space-y-2">
        <div class="display-1">Display 1</div>
        <div class="display-2">Display 2</div>
        <div class="display-3">Display 3</div>

        <div class="headline-1">Headline 1</div>
        <div class="headline-2">Headline 2</div>
        <div class="headline-3">Headline 3</div>

        <div class="title-1">Title 1</div>
        <div class="title-2">Title 2</div>
        <div class="title-3">Title 3</div>

        <div class="button-1">Button 1</div>
        <div class="button-2">Button 2</div>

        <div class="body-1">Body 1</div>
        <div class="body-2">Body 2</div>
        <div class="body-3">Body 3</div>

        <div class="label-1">Label 1</div>
        <div class="label-2">Label 2</div>
        <div class="label-3">Label 3</div>
      </div>
    </section>
    <!-- COLOR -->
    <section class="container mt-6">
      <h1 class="h1">COLOR MOSS</h1>
      <div class="mb-6 space-x-2 space-y-2">
        <div class="inline-block bg-moss-25 w-[100px] h-[100px]"></div>
        <div class="inline-block bg-moss-50 w-[100px] h-[100px]"></div>
        <div class="inline-block bg-moss-100 w-[100px] h-[100px]"></div>
        <div class="inline-block bg-moss-200 w-[100px] h-[100px]"></div>
        <div class="inline-block bg-moss-300 w-[100px] h-[100px]"></div>
        <div class="inline-block bg-moss-400 w-[100px] h-[100px]"></div>
        <div class="inline-block bg-moss-500 w-[100px] h-[100px]"></div>
        <div class="inline-block bg-moss-600 w-[100px] h-[100px]"></div>
        <div class="inline-block bg-moss-700 w-[100px] h-[100px]"></div>
        <div class="inline-block bg-moss-800 w-[100px] h-[100px]"></div>
        <div class="inline-block bg-moss-900 w-[100px] h-[100px]"></div>
      </div>

      <h1 class="h1">COLOR GREEN LIGHT</h1>
      <div class="mb-6 space-x-2 space-y-2">
        <div class="inline-block bg-green-light-25 w-[100px] h-[100px]"></div>
        <div class="inline-block bg-green-light-50 w-[100px] h-[100px]"></div>
        <div class="inline-block bg-green-light-100 w-[100px] h-[100px]"></div>
        <div class="inline-block bg-green-light-200 w-[100px] h-[100px]"></div>
        <div class="inline-block bg-green-light-300 w-[100px] h-[100px]"></div>
        <div class="inline-block bg-green-light-400 w-[100px] h-[100px]"></div>
        <div class="inline-block bg-green-light-500 w-[100px] h-[100px]"></div>
        <div class="inline-block bg-green-light-600 w-[100px] h-[100px]"></div>
        <div class="inline-block bg-green-light-700 w-[100px] h-[100px]"></div>
        <div class="inline-block bg-green-light-800 w-[100px] h-[100px]"></div>
        <div class="inline-block bg-green-light-900 w-[100px] h-[100px]"></div>
      </div>

      <h1 class="h1">COLOR GREEN</h1>
      <div class="mb-6 space-x-2 space-y-2">
        <div class="inline-block bg-green-25 w-[100px] h-[100px]"></div>
        <div class="inline-block bg-green-50 w-[100px] h-[100px]"></div>
        <div class="inline-block bg-green-100 w-[100px] h-[100px]"></div>
        <div class="inline-block bg-green-200 w-[100px] h-[100px]"></div>
        <div class="inline-block bg-green-300 w-[100px] h-[100px]"></div>
        <div class="inline-block bg-green-400 w-[100px] h-[100px]"></div>
        <div class="inline-block bg-green-500 w-[100px] h-[100px]"></div>
        <div class="inline-block bg-green-600 w-[100px] h-[100px]"></div>
        <div class="inline-block bg-green-700 w-[100px] h-[100px]"></div>
        <div class="inline-block bg-green-800 w-[100px] h-[100px]"></div>
        <div class="inline-block bg-green-900 w-[100px] h-[100px]"></div>
      </div>

      <h1 class="h1">COLOR TEAL</h1>
      <div class="mb-6 space-x-2 space-y-2">
        <div class="inline-block bg-teal-25 w-[100px] h-[100px]"></div>
        <div class="inline-block bg-teal-50 w-[100px] h-[100px]"></div>
        <div class="inline-block bg-teal-100 w-[100px] h-[100px]"></div>
        <div class="inline-block bg-teal-200 w-[100px] h-[100px]"></div>
        <div class="inline-block bg-teal-300 w-[100px] h-[100px]"></div>
        <div class="inline-block bg-teal-400 w-[100px] h-[100px]"></div>
        <div class="inline-block bg-teal-500 w-[100px] h-[100px]"></div>
        <div class="inline-block bg-teal-600 w-[100px] h-[100px]"></div>
        <div class="inline-block bg-teal-700 w-[100px] h-[100px]"></div>
        <div class="inline-block bg-teal-800 w-[100px] h-[100px]"></div>
        <div class="inline-block bg-teal-900 w-[100px] h-[100px]"></div>
      </div>

      <h1 class="h1">COLOR CYAN</h1>
      <div class="mb-6 space-x-2 space-y-2">
        <div class="inline-block bg-cyan-25 w-[100px] h-[100px]"></div>
        <div class="inline-block bg-cyan-50 w-[100px] h-[100px]"></div>
        <div class="inline-block bg-cyan-100 w-[100px] h-[100px]"></div>
        <div class="inline-block bg-cyan-200 w-[100px] h-[100px]"></div>
        <div class="inline-block bg-cyan-300 w-[100px] h-[100px]"></div>
        <div class="inline-block bg-cyan-400 w-[100px] h-[100px]"></div>
        <div class="inline-block bg-cyan-500 w-[100px] h-[100px]"></div>
        <div class="inline-block bg-cyan-600 w-[100px] h-[100px]"></div>
        <div class="inline-block bg-cyan-700 w-[100px] h-[100px]"></div>
        <div class="inline-block bg-cyan-800 w-[100px] h-[100px]"></div>
        <div class="inline-block bg-cyan-900 w-[100px] h-[100px]"></div>
      </div>

      <h1 class="h1">COLOR BLUE LIGHT</h1>
      <div class="mb-6 space-x-2 space-y-2">
        <div class="inline-block bg-blue-light-25 w-[100px] h-[100px]"></div>
        <div class="inline-block bg-blue-light-50 w-[100px] h-[100px]"></div>
        <div class="inline-block bg-blue-light-100 w-[100px] h-[100px]"></div>
        <div class="inline-block bg-blue-light-200 w-[100px] h-[100px]"></div>
        <div class="inline-block bg-blue-light-300 w-[100px] h-[100px]"></div>
        <div class="inline-block bg-blue-light-400 w-[100px] h-[100px]"></div>
        <div class="inline-block bg-blue-light-500 w-[100px] h-[100px]"></div>
        <div class="inline-block bg-blue-light-600 w-[100px] h-[100px]"></div>
        <div class="inline-block bg-blue-light-700 w-[100px] h-[100px]"></div>
        <div class="inline-block bg-blue-light-800 w-[100px] h-[100px]"></div>
        <div class="inline-block bg-blue-light-900 w-[100px] h-[100px]"></div>
      </div>

      <h1 class="h1">COLOR BLUE</h1>
      <div class="mb-6 space-x-2 space-y-2">
        <div class="inline-block bg-blue-25 w-[100px] h-[100px]"></div>
        <div class="inline-block bg-blue-50 w-[100px] h-[100px]"></div>
        <div class="inline-block bg-blue-100 w-[100px] h-[100px]"></div>
        <div class="inline-block bg-blue-200 w-[100px] h-[100px]"></div>
        <div class="inline-block bg-blue-300 w-[100px] h-[100px]"></div>
        <div class="inline-block bg-blue-400 w-[100px] h-[100px]"></div>
        <div class="inline-block bg-blue-500 w-[100px] h-[100px]"></div>
        <div class="inline-block bg-blue-600 w-[100px] h-[100px]"></div>
        <div class="inline-block bg-blue-700 w-[100px] h-[100px]"></div>
        <div class="inline-block bg-blue-800 w-[100px] h-[100px]"></div>
        <div class="inline-block bg-blue-900 w-[100px] h-[100px]"></div>
      </div>

      <h1 class="h1">COLOR BLUE DARK</h1>
      <div class="mb-6 space-x-2 space-y-2">
        <div class="inline-block bg-blue-dark-25 w-[100px] h-[100px]"></div>
        <div class="inline-block bg-blue-dark-50 w-[100px] h-[100px]"></div>
        <div class="inline-block bg-blue-dark-100 w-[100px] h-[100px]"></div>
        <div class="inline-block bg-blue-dark-200 w-[100px] h-[100px]"></div>
        <div class="inline-block bg-blue-dark-300 w-[100px] h-[100px]"></div>
        <div class="inline-block bg-blue-dark-400 w-[100px] h-[100px]"></div>
        <div class="inline-block bg-blue-dark-500 w-[100px] h-[100px]"></div>
        <div class="inline-block bg-blue-dark-600 w-[100px] h-[100px]"></div>
        <div class="inline-block bg-blue-dark-700 w-[100px] h-[100px]"></div>
        <div class="inline-block bg-blue-dark-800 w-[100px] h-[100px]"></div>
        <div class="inline-block bg-blue-dark-900 w-[100px] h-[100px]"></div>
      </div>

      <h1 class="h1">COLOR INDIGO</h1>
      <div class="mb-6 space-x-2 space-y-2">
        <div class="inline-block bg-indigo-25 w-[100px] h-[100px]"></div>
        <div class="inline-block bg-indigo-50 w-[100px] h-[100px]"></div>
        <div class="inline-block bg-indigo-100 w-[100px] h-[100px]"></div>
        <div class="inline-block bg-indigo-200 w-[100px] h-[100px]"></div>
        <div class="inline-block bg-indigo-300 w-[100px] h-[100px]"></div>
        <div class="inline-block bg-indigo-400 w-[100px] h-[100px]"></div>
        <div class="inline-block bg-indigo-500 w-[100px] h-[100px]"></div>
        <div class="inline-block bg-indigo-600 w-[100px] h-[100px]"></div>
        <div class="inline-block bg-indigo-700 w-[100px] h-[100px]"></div>
        <div class="inline-block bg-indigo-800 w-[100px] h-[100px]"></div>
        <div class="inline-block bg-indigo-900 w-[100px] h-[100px]"></div>
      </div>

      <h1 class="h1">COLOR VIOLET</h1>
      <div class="mb-6 space-x-2 space-y-2">
        <div class="inline-block bg-violet-25 w-[100px] h-[100px]"></div>
        <div class="inline-block bg-violet-50 w-[100px] h-[100px]"></div>
        <div class="inline-block bg-violet-100 w-[100px] h-[100px]"></div>
        <div class="inline-block bg-violet-200 w-[100px] h-[100px]"></div>
        <div class="inline-block bg-violet-300 w-[100px] h-[100px]"></div>
        <div class="inline-block bg-violet-400 w-[100px] h-[100px]"></div>
        <div class="inline-block bg-violet-500 w-[100px] h-[100px]"></div>
        <div class="inline-block bg-violet-600 w-[100px] h-[100px]"></div>
        <div class="inline-block bg-violet-700 w-[100px] h-[100px]"></div>
        <div class="inline-block bg-violet-800 w-[100px] h-[100px]"></div>
        <div class="inline-block bg-violet-900 w-[100px] h-[100px]"></div>
      </div>

      <h1 class="h1">COLOR PURPLE</h1>
      <div class="mb-6 space-x-2 space-y-2">
        <div class="inline-block bg-purple-25 w-[100px] h-[100px]"></div>
        <div class="inline-block bg-purple-50 w-[100px] h-[100px]"></div>
        <div class="inline-block bg-purple-100 w-[100px] h-[100px]"></div>
        <div class="inline-block bg-purple-200 w-[100px] h-[100px]"></div>
        <div class="inline-block bg-purple-300 w-[100px] h-[100px]"></div>
        <div class="inline-block bg-purple-400 w-[100px] h-[100px]"></div>
        <div class="inline-block bg-purple-500 w-[100px] h-[100px]"></div>
        <div class="inline-block bg-purple-600 w-[100px] h-[100px]"></div>
        <div class="inline-block bg-purple-700 w-[100px] h-[100px]"></div>
        <div class="inline-block bg-purple-800 w-[100px] h-[100px]"></div>
        <div class="inline-block bg-purple-900 w-[100px] h-[100px]"></div>
      </div>

      <h1 class="h1">COLOR FUCHSIA</h1>
      <div class="mb-6 space-x-2 space-y-2">
        <div class="inline-block bg-fuchsia-25 w-[100px] h-[100px]"></div>
        <div class="inline-block bg-fuchsia-50 w-[100px] h-[100px]"></div>
        <div class="inline-block bg-fuchsia-100 w-[100px] h-[100px]"></div>
        <div class="inline-block bg-fuchsia-200 w-[100px] h-[100px]"></div>
        <div class="inline-block bg-fuchsia-300 w-[100px] h-[100px]"></div>
        <div class="inline-block bg-fuchsia-400 w-[100px] h-[100px]"></div>
        <div class="inline-block bg-fuchsia-500 w-[100px] h-[100px]"></div>
        <div class="inline-block bg-fuchsia-600 w-[100px] h-[100px]"></div>
        <div class="inline-block bg-fuchsia-700 w-[100px] h-[100px]"></div>
        <div class="inline-block bg-fuchsia-800 w-[100px] h-[100px]"></div>
        <div class="inline-block bg-fuchsia-900 w-[100px] h-[100px]"></div>
      </div>

      <h1 class="h1">COLOR PINK</h1>
      <div class="mb-6 space-x-2 space-y-2">
        <div class="inline-block bg-pink-25 w-[100px] h-[100px]"></div>
        <div class="inline-block bg-pink-50 w-[100px] h-[100px]"></div>
        <div class="inline-block bg-pink-100 w-[100px] h-[100px]"></div>
        <div class="inline-block bg-pink-200 w-[100px] h-[100px]"></div>
        <div class="inline-block bg-pink-300 w-[100px] h-[100px]"></div>
        <div class="inline-block bg-pink-400 w-[100px] h-[100px]"></div>
        <div class="inline-block bg-pink-500 w-[100px] h-[100px]"></div>
        <div class="inline-block bg-pink-600 w-[100px] h-[100px]"></div>
        <div class="inline-block bg-pink-700 w-[100px] h-[100px]"></div>
        <div class="inline-block bg-pink-800 w-[100px] h-[100px]"></div>
        <div class="inline-block bg-pink-900 w-[100px] h-[100px]"></div>
      </div>

      <h1 class="h1">COLOR ROSE</h1>
      <div class="mb-6 space-x-2 space-y-2">
        <div class="inline-block bg-rose-25 w-[100px] h-[100px]"></div>
        <div class="inline-block bg-rose-50 w-[100px] h-[100px]"></div>
        <div class="inline-block bg-rose-100 w-[100px] h-[100px]"></div>
        <div class="inline-block bg-rose-200 w-[100px] h-[100px]"></div>
        <div class="inline-block bg-rose-300 w-[100px] h-[100px]"></div>
        <div class="inline-block bg-rose-400 w-[100px] h-[100px]"></div>
        <div class="inline-block bg-rose-500 w-[100px] h-[100px]"></div>
        <div class="inline-block bg-rose-600 w-[100px] h-[100px]"></div>
        <div class="inline-block bg-rose-700 w-[100px] h-[100px]"></div>
        <div class="inline-block bg-rose-800 w-[100px] h-[100px]"></div>
        <div class="inline-block bg-rose-900 w-[100px] h-[100px]"></div>
      </div>

      <h1 class="h1">COLOR ORANGE DARK</h1>
      <div class="mb-6 space-x-2 space-y-2">
        <div class="inline-block bg-orange-dark-25 w-[100px] h-[100px]"></div>
        <div class="inline-block bg-orange-dark-50 w-[100px] h-[100px]"></div>
        <div class="inline-block bg-orange-dark-100 w-[100px] h-[100px]"></div>
        <div class="inline-block bg-orange-dark-200 w-[100px] h-[100px]"></div>
        <div class="inline-block bg-orange-dark-300 w-[100px] h-[100px]"></div>
        <div class="inline-block bg-orange-dark-400 w-[100px] h-[100px]"></div>
        <div class="inline-block bg-orange-dark-500 w-[100px] h-[100px]"></div>
        <div class="inline-block bg-orange-dark-600 w-[100px] h-[100px]"></div>
        <div class="inline-block bg-orange-dark-700 w-[100px] h-[100px]"></div>
        <div class="inline-block bg-orange-dark-800 w-[100px] h-[100px]"></div>
        <div class="inline-block bg-orange-dark-900 w-[100px] h-[100px]"></div>
      </div>

      <h1 class="h1">COLOR ORANGE</h1>
      <div class="mb-6 space-x-2 space-y-2">
        <div class="inline-block bg-orange-25 w-[100px] h-[100px]"></div>
        <div class="inline-block bg-orange-50 w-[100px] h-[100px]"></div>
        <div class="inline-block bg-orange-100 w-[100px] h-[100px]"></div>
        <div class="inline-block bg-orange-200 w-[100px] h-[100px]"></div>
        <div class="inline-block bg-orange-300 w-[100px] h-[100px]"></div>
        <div class="inline-block bg-orange-400 w-[100px] h-[100px]"></div>
        <div class="inline-block bg-orange-500 w-[100px] h-[100px]"></div>
        <div class="inline-block bg-orange-600 w-[100px] h-[100px]"></div>
        <div class="inline-block bg-orange-700 w-[100px] h-[100px]"></div>
        <div class="inline-block bg-orange-800 w-[100px] h-[100px]"></div>
        <div class="inline-block bg-orange-900 w-[100px] h-[100px]"></div>
      </div>

      <h1 class="h1">COLOR YELLOW</h1>
      <div class="mb-6 space-x-2 space-y-2">
        <div class="inline-block bg-yellow-25 w-[100px] h-[100px]"></div>
        <div class="inline-block bg-yellow-50 w-[100px] h-[100px]"></div>
        <div class="inline-block bg-yellow-100 w-[100px] h-[100px]"></div>
        <div class="inline-block bg-yellow-200 w-[100px] h-[100px]"></div>
        <div class="inline-block bg-yellow-300 w-[100px] h-[100px]"></div>
        <div class="inline-block bg-yellow-400 w-[100px] h-[100px]"></div>
        <div class="inline-block bg-yellow-500 w-[100px] h-[100px]"></div>
        <div class="inline-block bg-yellow-600 w-[100px] h-[100px]"></div>
        <div class="inline-block bg-yellow-700 w-[100px] h-[100px]"></div>
        <div class="inline-block bg-yellow-800 w-[100px] h-[100px]"></div>
        <div class="inline-block bg-yellow-900 w-[100px] h-[100px]"></div>
      </div>

      <h1 class="h1">COLOR GRAY BLUE</h1>
      <div class="mb-6 space-x-2 space-y-2">
        <div class="inline-block bg-gray-blue-25 w-[100px] h-[100px]"></div>
        <div class="inline-block bg-gray-blue-50 w-[100px] h-[100px]"></div>
        <div class="inline-block bg-gray-blue-100 w-[100px] h-[100px]"></div>
        <div class="inline-block bg-gray-blue-200 w-[100px] h-[100px]"></div>
        <div class="inline-block bg-gray-blue-300 w-[100px] h-[100px]"></div>
        <div class="inline-block bg-gray-blue-400 w-[100px] h-[100px]"></div>
        <div class="inline-block bg-gray-blue-500 w-[100px] h-[100px]"></div>
        <div class="inline-block bg-gray-blue-600 w-[100px] h-[100px]"></div>
        <div class="inline-block bg-gray-blue-700 w-[100px] h-[100px]"></div>
        <div class="inline-block bg-gray-blue-800 w-[100px] h-[100px]"></div>
        <div class="inline-block bg-gray-blue-900 w-[100px] h-[100px]"></div>
      </div>

      <h1 class="h1">COLOR GRAY COOL</h1>
      <div class="mb-6 space-x-2 space-y-2">
        <div class="inline-block bg-gray-cool-25 w-[100px] h-[100px]"></div>
        <div class="inline-block bg-gray-cool-50 w-[100px] h-[100px]"></div>
        <div class="inline-block bg-gray-cool-100 w-[100px] h-[100px]"></div>
        <div class="inline-block bg-gray-cool-200 w-[100px] h-[100px]"></div>
        <div class="inline-block bg-gray-cool-300 w-[100px] h-[100px]"></div>
        <div class="inline-block bg-gray-cool-400 w-[100px] h-[100px]"></div>
        <div class="inline-block bg-gray-cool-500 w-[100px] h-[100px]"></div>
        <div class="inline-block bg-gray-cool-600 w-[100px] h-[100px]"></div>
        <div class="inline-block bg-gray-cool-700 w-[100px] h-[100px]"></div>
        <div class="inline-block bg-gray-cool-800 w-[100px] h-[100px]"></div>
        <div class="inline-block bg-gray-cool-900 w-[100px] h-[100px]"></div>
      </div>

      <h1 class="h1">COLOR GRAY MODERN</h1>
      <div class="mb-6 space-x-2 space-y-2">
        <div class="inline-block bg-gray-modern-25 w-[100px] h-[100px]"></div>
        <div class="inline-block bg-gray-modern-50 w-[100px] h-[100px]"></div>
        <div class="inline-block bg-gray-modern-100 w-[100px] h-[100px]"></div>
        <div class="inline-block bg-gray-modern-200 w-[100px] h-[100px]"></div>
        <div class="inline-block bg-gray-modern-300 w-[100px] h-[100px]"></div>
        <div class="inline-block bg-gray-modern-400 w-[100px] h-[100px]"></div>
        <div class="inline-block bg-gray-modern-500 w-[100px] h-[100px]"></div>
        <div class="inline-block bg-gray-modern-600 w-[100px] h-[100px]"></div>
        <div class="inline-block bg-gray-modern-700 w-[100px] h-[100px]"></div>
        <div class="inline-block bg-gray-modern-800 w-[100px] h-[100px]"></div>
        <div class="inline-block bg-gray-modern-900 w-[100px] h-[100px]"></div>
      </div>

      <h1 class="h1">COLOR GRAY NEUTRAL</h1>
      <div class="mb-6 space-x-2 space-y-2">
        <div class="inline-block bg-gray-neutral-25 w-[100px] h-[100px]"></div>
        <div class="inline-block bg-gray-neutral-50 w-[100px] h-[100px]"></div>
        <div class="inline-block bg-gray-neutral-100 w-[100px] h-[100px]"></div>
        <div class="inline-block bg-gray-neutral-200 w-[100px] h-[100px]"></div>
        <div class="inline-block bg-gray-neutral-300 w-[100px] h-[100px]"></div>
        <div class="inline-block bg-gray-neutral-400 w-[100px] h-[100px]"></div>
        <div class="inline-block bg-gray-neutral-500 w-[100px] h-[100px]"></div>
        <div class="inline-block bg-gray-neutral-600 w-[100px] h-[100px]"></div>
        <div class="inline-block bg-gray-neutral-700 w-[100px] h-[100px]"></div>
        <div class="inline-block bg-gray-neutral-800 w-[100px] h-[100px]"></div>
        <div class="inline-block bg-gray-neutral-900 w-[100px] h-[100px]"></div>
      </div>

      <h1 class="h1">COLOR GRAY IRON</h1>
      <div class="mb-6 space-x-2 space-y-2">
        <div class="inline-block bg-gray-iron-25 w-[100px] h-[100px]"></div>
        <div class="inline-block bg-gray-iron-50 w-[100px] h-[100px]"></div>
        <div class="inline-block bg-gray-iron-100 w-[100px] h-[100px]"></div>
        <div class="inline-block bg-gray-iron-200 w-[100px] h-[100px]"></div>
        <div class="inline-block bg-gray-iron-300 w-[100px] h-[100px]"></div>
        <div class="inline-block bg-gray-iron-400 w-[100px] h-[100px]"></div>
        <div class="inline-block bg-gray-iron-500 w-[100px] h-[100px]"></div>
        <div class="inline-block bg-gray-iron-600 w-[100px] h-[100px]"></div>
        <div class="inline-block bg-gray-iron-700 w-[100px] h-[100px]"></div>
        <div class="inline-block bg-gray-iron-800 w-[100px] h-[100px]"></div>
        <div class="inline-block bg-gray-iron-900 w-[100px] h-[100px]"></div>
      </div>

      <h1 class="h1">COLOR GRAY TRUE</h1>
      <div class="mb-6 space-x-2 space-y-2">
        <div class="inline-block bg-gray-true-25 w-[100px] h-[100px]"></div>
        <div class="inline-block bg-gray-true-50 w-[100px] h-[100px]"></div>
        <div class="inline-block bg-gray-true-100 w-[100px] h-[100px]"></div>
        <div class="inline-block bg-gray-true-200 w-[100px] h-[100px]"></div>
        <div class="inline-block bg-gray-true-300 w-[100px] h-[100px]"></div>
        <div class="inline-block bg-gray-true-400 w-[100px] h-[100px]"></div>
        <div class="inline-block bg-gray-true-500 w-[100px] h-[100px]"></div>
        <div class="inline-block bg-gray-true-600 w-[100px] h-[100px]"></div>
        <div class="inline-block bg-gray-true-700 w-[100px] h-[100px]"></div>
        <div class="inline-block bg-gray-true-800 w-[100px] h-[100px]"></div>
        <div class="inline-block bg-gray-true-900 w-[100px] h-[100px]"></div>
      </div>

      <h1 class="h1">COLOR GRAY WARM</h1>
      <div class="mb-6 space-x-2 space-y-2">
        <div class="inline-block bg-gray-warm-25 w-[100px] h-[100px]"></div>
        <div class="inline-block bg-gray-warm-50 w-[100px] h-[100px]"></div>
        <div class="inline-block bg-gray-warm-100 w-[100px] h-[100px]"></div>
        <div class="inline-block bg-gray-warm-200 w-[100px] h-[100px]"></div>
        <div class="inline-block bg-gray-warm-300 w-[100px] h-[100px]"></div>
        <div class="inline-block bg-gray-warm-400 w-[100px] h-[100px]"></div>
        <div class="inline-block bg-gray-warm-500 w-[100px] h-[100px]"></div>
        <div class="inline-block bg-gray-warm-600 w-[100px] h-[100px]"></div>
        <div class="inline-block bg-gray-warm-700 w-[100px] h-[100px]"></div>
        <div class="inline-block bg-gray-warm-800 w-[100px] h-[100px]"></div>
        <div class="inline-block bg-gray-warm-900 w-[100px] h-[100px]"></div>
      </div>

      <h1 class="h1">COLOR GRAY</h1>
      <div class="mb-6 space-x-2 space-y-2">
        <div class="inline-block bg-gray-25 w-[100px] h-[100px]"></div>
        <div class="inline-block bg-gray-50 w-[100px] h-[100px]"></div>
        <div class="inline-block bg-gray-100 w-[100px] h-[100px]"></div>
        <div class="inline-block bg-gray-200 w-[100px] h-[100px]"></div>
        <div class="inline-block bg-gray-300 w-[100px] h-[100px]"></div>
        <div class="inline-block bg-gray-400 w-[100px] h-[100px]"></div>
        <div class="inline-block bg-gray-500 w-[100px] h-[100px]"></div>
        <div class="inline-block bg-gray-600 w-[100px] h-[100px]"></div>
        <div class="inline-block bg-gray-700 w-[100px] h-[100px]"></div>
        <div class="inline-block bg-gray-800 w-[100px] h-[100px]"></div>
        <div class="inline-block bg-gray-900 w-[100px] h-[100px]"></div>
      </div>

      <h1 class="h1">COLOR ERROR</h1>
      <div class="mb-6 space-x-2 space-y-2">
        <div class="inline-block bg-error-25 w-[100px] h-[100px]"></div>
        <div class="inline-block bg-error-50 w-[100px] h-[100px]"></div>
        <div class="inline-block bg-error-100 w-[100px] h-[100px]"></div>
        <div class="inline-block bg-error-200 w-[100px] h-[100px]"></div>
        <div class="inline-block bg-error-300 w-[100px] h-[100px]"></div>
        <div class="inline-block bg-error-400 w-[100px] h-[100px]"></div>
        <div class="inline-block bg-error-500 w-[100px] h-[100px]"></div>
        <div class="inline-block bg-error-600 w-[100px] h-[100px]"></div>
        <div class="inline-block bg-error-700 w-[100px] h-[100px]"></div>
        <div class="inline-block bg-error-800 w-[100px] h-[100px]"></div>
        <div class="inline-block bg-error-900 w-[100px] h-[100px]"></div>
      </div>

      <h1 class="h1">COLOR WARNING</h1>
      <div class="mb-6 space-x-2 space-y-2">
        <div class="inline-block bg-warning-25 w-[100px] h-[100px]"></div>
        <div class="inline-block bg-warning-50 w-[100px] h-[100px]"></div>
        <div class="inline-block bg-warning-100 w-[100px] h-[100px]"></div>
        <div class="inline-block bg-warning-200 w-[100px] h-[100px]"></div>
        <div class="inline-block bg-warning-300 w-[100px] h-[100px]"></div>
        <div class="inline-block bg-warning-400 w-[100px] h-[100px]"></div>
        <div class="inline-block bg-warning-500 w-[100px] h-[100px]"></div>
        <div class="inline-block bg-warning-600 w-[100px] h-[100px]"></div>
        <div class="inline-block bg-warning-700 w-[100px] h-[100px]"></div>
        <div class="inline-block bg-warning-800 w-[100px] h-[100px]"></div>
        <div class="inline-block bg-warning-900 w-[100px] h-[100px]"></div>
      </div>

      <h1 class="h1">COLOR SUCCESS</h1>
      <div class="mb-6 space-x-2 space-y-2">
        <div class="inline-block bg-success-25 w-[100px] h-[100px]"></div>
        <div class="inline-block bg-success-50 w-[100px] h-[100px]"></div>
        <div class="inline-block bg-success-100 w-[100px] h-[100px]"></div>
        <div class="inline-block bg-success-200 w-[100px] h-[100px]"></div>
        <div class="inline-block bg-success-300 w-[100px] h-[100px]"></div>
        <div class="inline-block bg-success-400 w-[100px] h-[100px]"></div>
        <div class="inline-block bg-success-500 w-[100px] h-[100px]"></div>
        <div class="inline-block bg-success-600 w-[100px] h-[100px]"></div>
        <div class="inline-block bg-success-700 w-[100px] h-[100px]"></div>
        <div class="inline-block bg-success-800 w-[100px] h-[100px]"></div>
        <div class="inline-block bg-success-900 w-[100px] h-[100px]"></div>
      </div>

      <h1 class="h1">Shadow</h1>
      <div class="mb-6 space-x-4 space-y-10">
        <div class="inline-block w-[130px] h-[130px] shadow-xs"></div>
        <div class="inline-block w-[130px] h-[130px] shadow-sm"></div>
        <div class="inline-block w-[130px] h-[130px] shadow-md"></div>
        <div class="inline-block w-[130px] h-[130px] shadow-lg"></div>
        <div class="inline-block w-[130px] h-[130px] shadow-xl"></div>
        <div class="inline-block w-[130px] h-[130px] shadow-2xl"></div>
        <div class="inline-block w-[130px] h-[130px] shadow-3xl"></div>
      </div>
    </section>
  </main>
</template>
<script>
import { validateForm } from "@/lib/validator";
export default {
  data() {
    return {
      quantityCart: 1,
      // START DATA FORM
      isSubmit: false,
      rules: {
        fullname: "required",
        phone: "required|phone|min:10|max:10",
        email: "email",
        note: "",
      },
      form: {
        fullname: "",
        phone: "",
        email: "",
        note: "",
      },
      errors: {},
      // END DATA FORM
      quantity: 1,
    };
  },
  methods: {
    // START DATA FORM
    setIsSubmit(newVal) {
      console.log("setIsSubmit run", newVal);
      this.isSubmit = newVal;
    },
    onSubmitForm() {
      this.errors = validateForm(this.form, this.rules);

      if (Object.keys(this.errors).length > 0) {
        console.log("on error", this.errors);
        return;
      }
      console.log("on success");
    },
    // END DATA FORM
    onClick() {
      alert("Hello world");
    },
    changeQuantity(quantity) {
      this.quantity = quantity;
    },
  },
};
</script>
