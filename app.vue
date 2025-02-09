<template>
  <div class="relative min-h-svh bg-slate-50">
    <div
      class="fixed z-0 right-[7%] md:right-[20%] h-full w-[167px] bg-repeat-y bg-[url(/images/pattern-oyu.svg)]"
    ></div>
    <!-- header info -->
    <header class="px-3 md:px-12 flex flex-row items-center justify-between bg-white">
      <section class="py-2 flex gap-2">
        <Icon name="ph:map-pin" size="18px" />
        <div>г.Алматы</div>
      </section>

      <section class="py-2 flex gap-2">
        <Icon name="ph:phone-call" size="18px" class="text-primary" />
        <div>+ 7 778 777 88 88</div>
      </section>
    </header>
    <!-- Header -->
    <header
      class="sticky top-0 px-3 md:px-12 flex flex-row items-center justify-between md:justify-center bg-white"
    >
      <section class="py-2 logo h-16 w-16">
        <img src="/images/logotype.svg" alt="" />
      </section>

      <menu class="mx-auto hidden md:flex flex-row items-center justify-center gap-0">
        <ul class="list-none flex flex-row items-center justify-center gap-0">
          <li><a class="px-4 py-2 hover:text-blue-600" href="">Menu item</a></li>
          <li><a class="px-4 py-2 hover:text-blue-600" href="">Menu item</a></li>
          <li><a class="px-4 py-2 hover:text-blue-600" href="">Menu item</a></li>
          <li><a class="px-4 py-2 hover:text-blue-600" href="">Menu item</a></li>
          <li><a class="px-4 py-2 hover:text-blue-600" href="">Menu item</a></li>
        </ul>
      </menu>

      <section>
        <UButton color="primary" variant="solid">Подать заявку</UButton>
      </section>
    </header>

    <!-- hero section -->
    <section class="py-16 px-3 md:px-12">
      <div class="flex flex-col md:flex-row justify-between">
        <div class="md:w-2/4 flex flex-col items-start">
          <img class="mb-2 h-5" src="/images/logotype-text.svg" alt="" />
          <h1 class="mb-6 text-4xl font-bold">
            Заголовок для сайта обучения которое призовет к действию
          </h1>
          <h3 class="mb-4">
            Подзаголовок для сайта обучения которое призовет к действию помимо основного
            заголовка и еще скажет что то типо запиши номер мы перезвоним
          </h3>
          <div class="flex flex-row items-center gap-2">
            <UInput
              class="w-64"
              color="gray"
              variant="outline"
              placeholder="+7 (---) -- --"
            />
            <UButton color="primary" variant="solid">Подать заявку</UButton>
          </div>
        </div>
        <div class="md:w-2/4 hidden md:flex flex-col items-start">
          <img class="" src="/images/hero-image.svg" alt="" />
        </div>
      </div>
    </section>

    <!-- about section -->
    <section class="py-16 px-3 md:px-12">
      <div class="flex flex-col md:flex-row justify-between">
        <div class="md:w-2/4 hidden md:flexflex flex-col items-start">
          <img class="" src="/images/about-image.svg" alt="" />
        </div>
        <div class="md:w-2/4 items-start flex flex-col">
          <h2 class="text-xl font-bold">Этапы чего либо</h2>
          <!-- items step 1 -->
          <div class="relative w-9/12 flex flex-col bg-white rounded-lg p-4 mt-6">
            <h4 class="font-semibold">Первый этап этого списка</h4>
            <p>Детальное или неполное описание первого элемента нашего списка</p>

            <div
              class="absolute right-3 -top-4 flex justify-center items-center h-8 w-8 rounded-lg bg-blue-400 text-white font-black"
            >
              1
            </div>
          </div>
          <!-- items step 2 -->
          <div class="relative w-9/12 flex flex-col bg-white rounded-lg p-4 ml-14 mt-6">
            <h4 class="font-semibold">Первый этап этого списка</h4>
            <p>Детальное или неполное описание первого элемента нашего списка</p>

            <div
              class="absolute right-3 -top-4 flex justify-center items-center h-8 w-8 rounded-lg bg-blue-400 text-white font-black"
            >
              2
            </div>
          </div>
          <!-- items step 3 -->
          <div class="relative w-9/12 flex flex-col bg-white rounded-lg p-4 mt-6">
            <h4 class="font-semibold">Первый этап этого списка</h4>
            <p>Детальное или неполное описание первого элемента нашего списка</p>

            <div
              class="absolute right-3 -top-4 flex justify-center items-center h-8 w-8 rounded-lg bg-blue-400 text-white font-black"
            >
              3
            </div>
          </div>
        </div>
      </div>
    </section>

    <footer
      class="relatie pb-12 px-3 md:px-12 py-7 bg-slate-900 text-white rounded-tl-2xl rounded-tr-2xl"
    >
      <img
        class="absolute right-3 md:right-16 -top-16 animate-bounce h-44 md:h-72"
        src="/images/roket-footer.svg"
        alt=""
      />
      <div class="flex flex-col md:flex-row">
        <div class="flex flex-col items-start md:w-2/4 gap-4">
          <img class="h-7 md:h-11" src="/images/logotype-text-white.svg" alt="" />
          <p class="mt-2 max-w-80">
            Подзаголовок для сайта обучения которое призовет к действию помимо основного
            заголовка и еще скажет что то типо запиши номер мы перезвоним
          </p>
          <ul
            class="flex flex-col md:flex-row items-start md:items-center md:justify-center gap-0 font-bold"
          >
            <li><a class="py-4 hover:text-blue-600" href="">Главная</a></li>
            <li><a class="py-4 hover:text-blue-600" href="">Курсы</a></li>
            <li><a class="py-4 hover:text-blue-600" href="">Процесс обучения</a></li>
            <li><a class="py-4 hover:text-blue-600" href="">Вопросы и ответы</a></li>
          </ul>
        </div>
        <div class="flex flex-col items-start md:w-2/4 gap-4 mt-6 md:mt-0">
          <p class="mt-2 max-w-80 font-bold">
            Остались вопросы?<br />
            Свяжитесь с нами!
          </p>
          <div class="flex flex-row items-center gap-2">
            <UInput
              class="w-64"
              color="gray"
              variant="outline"
              placeholder="+7 (---) -- --"
            />
            <UButton color="blue" variant="solid">Подать заявку</UButton>
          </div>
          <p class="mt-2 max-w-80 font-bold">Мы в социальных сетях</p>
          <ul class="list-none flex flex-row items-center justify-center gap-4 font-bold">
            <li>
              <a
                class="h-11 w-11 rounded-lg border border-white text-white bg-transparent hover:bg-slate-500 hover:text-secondary hover:transition-all flex items-center justify-center"
                href=""
              >
                <Icon name="ph:instagram-logo" size="24px" />
              </a>
            </li>
            <li>
              <a
                class="h-11 w-11 rounded-lg border border-white text-white bg-transparent hover:bg-slate-500 hover:text-secondary hover:transition-all flex items-center justify-center"
                href=""
              >
                <Icon name="ph:telegram-logo" size="24px" />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  </div>
</template>

<script>
export default {
  name: "App",
};
</script>

<style>
header {
  position: relative;
  z-index: 20;
}
section,
footer {
  position: relative;
  z-index: 10;
}
</style>
