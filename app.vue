<template>
  <div class="bg-slate-50 min-h-svh">
    <!-- header info -->
    <header class="px-12 flex flex-row items-center justify-between bg-white">
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
    <header class="px-12 flex flex-row items-center justify-center bg-white">
      <section class="py-2 logo h-16 w-16">
        <img src="/images/logotype.svg" alt="" />
      </section>

      <menu class="mx-auto flex flex-row items-center justify-center gap-0">
        <ul class="list-none flex flex-row items-center justify-center gap-0">
          <li><a class="px-4 py-2 hover:text-blue-600" href="">Menu item</a></li>
          <li><a class="px-4 py-2 hover:text-blue-600" href="">Menu item</a></li>
          <li><a class="px-4 py-2 hover:text-blue-600" href="">Menu item</a></li>
          <li><a class="px-4 py-2 hover:text-blue-600" href="">Menu item</a></li>
          <li><a class="px-4 py-2 hover:text-blue-600" href="">Menu item</a></li>
        </ul>
      </menu>

      <section>
        <button
          type="button"
          class="px-4 py-2 bg-blue-600 hover:bg-blue-500 text-white rounded-lg hover:shadow-sm shadow"
        >
          Подать заявку
        </button>
      </section>
    </header>
  </div>
</template>

<script>
export default {
  name: "App",
};
</script>

<style></style>
