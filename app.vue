<script setup>
import { vMaska } from "maska/vue";
import { ref } from "vue";

useSeoMeta({
  title: "ZymyranAcademy - школа программирования",
  ogTitle: "ZymyranAcademy - школа программирования",
  description: "Онлайн обучение — онлайн, спринт-курсы для быстрого старта.",
  ogDescription: "Онлайн обучение — онлайн, спринт-курсы для быстрого старта.",
  ogImage: "https://zymyran-academy.kz/images/thumb.png",
});

const phoneNumber = ref("");
const baseWhatsappUrl = "https://wa.me/77771749630";

const sendMessage = (message) => {
  const formattedMessage = encodeURIComponent(message);
  window.open(`${baseWhatsappUrl}?text=${formattedMessage}`, "_blank");
};

const handleSubmit = () => {
  let message = `Добрый день! Обращение с сайта.
Прошу проконсультировать по курсам программирования`;
  if (phoneNumber.value.trim()) {
    message += `\n\nот: ${phoneNumber.value}`;
  }
  sendMessage(message);
};

const requestPriceLaravel = () => {
  const message = `Добрый день! Обращение с сайта.
Прошу проконсультировать по спринт-курсу 'Laravel'`;
  sendMessage(message);
};
const requestPriceVue = () => {
  const message = `Добрый день! Обращение с сайта.
Прошу проконсультировать по спринт-курсу 'VueJS'`;
  sendMessage(message);
};

const requestContact = () => {
  const message = `Добрый день! Обращение с сайта.
Прошу проконсультировать курсу программирования.`;
  sendMessage(message);
};

const teamList = [
  {
    name: "Тагзым Наурыз Атанбекулы",
    role: "Academic Lead",
    experience: "10 лет в IT-образовании, старший преподаватель SDU University",
  },
  {
    name: "Матвей Ефимов",
    role: "Senior Backend & AI Instructor",
    experience: "Методист Hexlet, Нетология и Skillbox",
  },
  {
    name: "Наурызбаев Аян",
    role: "Senior Full Stack Instructor",
    experience: "Team Lead в АО «МФО KMF»",
  },
  {
    name: "Дмитрий Печагин",
    role: "Senior Full Stack Instructor",
    experience: "Инженер Python/FastAPI + React",
  },
  {
    name: "Ramin Nasraddinzade",
    role: "AI Integration Mentor",
    experience: "Frontend архитектор, преподаватель в IT STEP",
  },
  {
    name: "Азиз Алдиярбеков",
    role: "Data Science Mentor",
    experience: "CVM менеджер Tele2, MSc Data Science",
  },
  {
    name: "Каракойшы Аббас",
    role: "Backend Coach",
    experience: "Senior PHP/Bitrix разработчик в АО «МФО KMF»",
  },
  {
    name: "Maxim Nosov",
    role: "DevOps Mentor",
    experience: "Full Stack инженер (React/Next, Node, Docker, CI/CD)",
  },
  {
    name: "Патдыев Эмра",
    role: "Teaching Assistant",
    experience: "Frontend разработчик Jussplay",
  },
  {
    name: "Нуралы Ортай",
    role: "ML Assistant",
    experience: "Младший ML-инженер, консультант по машинному обучению",
  },
  {
    name: "Борис Соболев",
    role: "Product Director",
    experience: "Руководитель продуктового направления в Т Банке",
  },
  {
    name: "Никита Юртаев",
    role: "Senior Product Manager",
    experience: "6+ лет в AI-стартапах",
  },
  {
    name: "Антон Конохов",
    role: "Product Manager",
    experience: "6+ лет опыта, запуск ERP, CRM и AI-решений",
  },
  {
    name: "Анелия Калиева",
    role: "Product Manager",
    experience: "8 лет в fintech проектах Beeline KZ и Home Credit",
  },
  {
    name: "Олжас Досайбек",
    role: "Project Manager",
    experience: "4 года, управление распределёнными командами",
  },
  {
    name: "Темирлан Хаххазов",
    role: "Product Manager",
    experience: "Halyk Insurance, запуск AI-сервисов",
  },
  {
    name: "Илияс Серикбай",
    role: "Product Manager & Startup Founder",
    experience: "Магистр из Манчестера, более 100 интервью с пользователями",
  },
  {
    name: "Ассем Амантаева",
    role: "Project & Youth Initiatives Manager",
    experience: "EdTech и публичные выступления, наставничество",
  },
];
</script>

<template>
  <div class="relative min-h-svh bg-slate-50">
    <div
      class="fixed z-0 right-[7%] md:right-[20%] h-full w-[167px] bg-repeat-y bg-contain bg-[url(/images/webp/pattern-oyu.webp)]"
    ></div>
    <!-- header contacts -->
    <header class="px-3 md:px-12 flex flex-row items-center justify-between bg-white">
      <div class="py-2 flex gap-2 items-center">
        <Icon name="ph:map-pin" size="18px" />
        <div>г.Кызылорда</div>
      </div>

      <div class="py-2 flex gap-2 items-center">
        <Icon name="ph:phone-call" size="18px" class="text-primary" />
        <div>+7 777 174 9630</div>
      </div>
    </header>
    <!-- header -->
    <header
      class="sticky top-0 px-3 md:px-12 flex flex-row items-center justify-between md:justify-center bg-white"
    >
      <section class="py-2 logo h-16 w-16">
        <img src="/images/webp/logotype.webp" alt="" />
      </section>

      <menu class="mx-auto hidden md:flex flex-row items-center justify-center gap-0">
        <ul class="list-none flex flex-row items-center justify-center gap-0">
          <li><a class="px-4 py-2 hover:text-blue-600" href="#courses">Курсы</a></li>
          <li>
            <a class="px-4 py-2 hover:text-blue-600" href="#class">Процесс обучения</a>
          </li>
          <li><a class="px-4 py-2 hover:text-blue-600" href="#team">Команда</a></li>
          <li><a class="px-4 py-2 hover:text-blue-600" href="#contacts">Контакты</a></li>
        </ul>
      </menu>

      <section>
        <UButton color="primary" variant="solid" @click="requestContact"
          >Подать заявку</UButton
        >
      </section>
    </header>

    <!-- hero section -->
    <section class="py-16 px-3 md:px-12">
      <div class="flex flex-col md:flex-row justify-between">
        <div class="md:w-2/4 flex flex-col items-start">
          <img class="mb-2 h-5" src="/images/webp/logotype-text.webp" alt="" />
          <h1 class="mb-6 text-4xl font-bold">
            🚀 Освой веб-разработку и стань востребованным специалистом!
          </h1>
          <h3 class="mb-4">
            Курсы, которые помогут вам с нуля освоить современную разработку и уверенно
            войти в IT. Обучение у нас — онлайн, спринт-курсы для быстрого старта.
          </h3>
          <div class="flex flex-row items-center gap-2">
            <UInput
              class="w-64"
              color="gray"
              variant="outline"
              placeholder="+7 (---) --- -- --"
              v-model="phoneNumber"
              v-maska="'+7 (###) ### ## ##'"
            />
            <UButton color="primary" variant="solid" @click="handleSubmit"
              >Подать заявку</UButton
            >
          </div>
        </div>
        <div class="md:w-2/4 hidden md:flex flex-col items-center">
          <img width="554" src="/images/webp/hero-image.webp" alt="" />
        </div>
      </div>
    </section>

    <!-- about section -->
    <section class="py-16 px-3 md:px-12">
      <div class="relative flex flex-col md:flex-row justify-between">
        <div
          class="md:w-2/4 top-14 -left-24 md:top-0 md:left-0 absolute md:relative opacity-40 md:opacity-100 md:flex flex-col items-center"
        >
          <img
            width="448"
            src="/images/webp/about-image.webp"
            alt=""
            class="w-80 sm:w-[448px]"
          />
        </div>
        <div class="md:w-2/4 items-start flex flex-col">
          <h2 class="text-xl font-bold">🔥 Почему выбирают нас?</h2>
          <!-- items step 1 -->
          <div class="relative w-9/12 flex flex-col bg-white rounded-lg p-4 mt-6">
            <h4 class="font-semibold">Онлайн обучение</h4>
            <p>Интерактивные прямые эфиры в Zoom / Teams</p>

            <div
              class="absolute right-3 -top-4 flex justify-center items-center h-8 w-8 rounded-lg bg-blue-400 text-white font-black"
            >
              1
            </div>
          </div>
          <!-- items step 2 -->
          <div class="relative w-9/12 flex flex-col bg-white rounded-lg p-4 ml-14 mt-6">
            <h4 class="font-semibold">Практика с первого дня</h4>
            <p>Минимум теории, максимум кода и работы над реальными проектами.</p>

            <div
              class="absolute right-3 -top-4 flex justify-center items-center h-8 w-8 rounded-lg bg-blue-400 text-white font-black"
            >
              2
            </div>
          </div>
          <!-- items step 3 -->
          <div class="relative w-9/12 flex flex-col bg-white rounded-lg p-4 mt-6">
            <h4 class="font-semibold">Наставники – практикующие разработчики</h4>
            <p>Обучение у экспертов, которые ежедневно работают в IT.</p>

            <div
              class="absolute right-3 -top-4 flex justify-center items-center h-8 w-8 rounded-lg bg-blue-400 text-white font-black"
            >
              3
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- sprint courses section -->
    <section class="py-8 px-3 md:px-12" id="courses">
      <div class="flex flex-col gap-4">
        <!-- title -->
        <div class="flex flex-col gap-2 text-primary-dark">
          <h3 class="text-3xl font-bold">Курсы</h3>
          <p>⚡ Быстрый старт в IT за 28 недель</p>
        </div>
        <!-- content -->
        <div class="flex flex-col gap-4">
          <!-- Product Management with AI -->
          <div class="flex flex-col md:flex-row rounded-xl bg-[#FFEACC]">
            <div
              class="relative w-full sm:min-w-56 md:max-w-56 overflow-hidden self-stretch max-h-44 sm:max-h-none"
            >
              <img
                src="/images/manager.png"
                alt=""
                class="object-cover -translate-y-40 sm:translate-y-0 h-full"
              />
            </div>
            <div class="w-full md:w-2/4 px-4 py-4 flex flex-col gap-2 text-primary-dark">
              <h4 class="text-xl font-bold">Product Management with AI</h4>
              <p class="text-sm">
                Программа шаг за шагом раскрывает полный цикл управления цифровым
                продуктом — от исследования рынка и формулировки проблемы до вывода MVP и
                последующего масштабирования. На протяжении курса системно используются
                инструменты искусственного интеллекта (ChatGPT, Notion AI, Miro AI и др.)
                для анализа данных, генерации идей и автоматизации рутины.
              </p>
              <p class="text-slate-700 font-bold">28 недель (261 академических часов)</p>
              <p class="text-slate-700 font-bold">Командный финальный проект</p>
              <p class="text-2xl font-extrabold text-slate-700">
                400&nbsp;000&nbsp;<span class="text-xl font-semibold align-center"
                  >₸</span
                >
              </p>

              <UButton
                color="primary"
                class="w-fit px-6"
                variant="solid"
                @click="requestPricePM"
              >
                Хочу пройти курс!
              </UButton>
            </div>
          </div>

          <!-- Frontend with AI -->
          <div class="flex flex-col md:flex-row rounded-xl bg-[#DDF3FF]">
            <div
              class="relative w-full sm:min-w-56 md:max-w-56 overflow-hidden self-stretch max-h-44 sm:max-h-none"
            >
              <img
                src="/images/front.png"
                alt=""
                class="object-cover -translate-y-40 sm:translate-y-0 h-full"
              />
            </div>
            <div class="w-full md:w-2/4 px-4 py-4 flex flex-col gap-2 text-primary-dark">
              <h4 class="text-xl font-bold">Frontend Development with AI</h4>
              <p class="text-sm">
                Курс Frontend Development with AI — это 28-недельная программа для
                новичков, желающих освоить веб-разработку с нуля. Студенты изучают HTML,
                CSS, JavaScript и React, осваивают Git и GitHub, и публикуют собственные
                проекты. С первых недель используются AI-инструменты: GitHub Copilot,
                генераторы дизайна, AI API. Программа делает упор на практику, пошаговое
                освоение и визуальные объяснения. Выпускники умеют создавать современные
                веб-интерфейсы с элементами AI и получают прочную базу для начала карьеры.
              </p>
              <p class="text-slate-700 font-bold">28 недель (261 академических часов)</p>
              <p class="text-slate-700 font-bold">Командный финальный проект</p>
              <p class="text-2xl font-extrabold text-slate-700">
                400&nbsp;000&nbsp;<span class="text-xl font-semibold align-center"
                  >₸</span
                >
              </p>

              <UButton
                color="primary"
                class="w-fit px-6"
                variant="solid"
                @click="requestPriceFrontend"
              >
                Хочу пройти курс!
              </UButton>
            </div>
          </div>

          <!-- Backend with AI -->
          <div class="flex flex-col md:flex-row rounded-xl bg-[#E1E6E8]">
            <div
              class="relative w-full sm:min-w-56 md:max-w-56 overflow-hidden self-stretch max-h-44 sm:max-h-none"
            >
              <img
                src="/images/back.png"
                alt=""
                class="object-cover -translate-y-40 sm:translate-y-0 h-full"
              />
            </div>
            <div class="w-full md:w-2/4 px-4 py-4 flex flex-col gap-2 text-primary-dark">
              <h4 class="text-xl font-bold">Backend Development with AI</h4>
              <p class="text-sm">
                Курс Backend Development with AI — это 28-недельная практическая
                программа, где студенты осваивают Python, Flask, базы данных и API с
                интеграцией ИИ-инструментов (ChatGPT, Copilot, OpenAI API). С нуля
                участники учатся разрабатывать и развёртывать backend-сервисы с элементами
                искусственного интеллекта. Финальный командный проект — полноценный
                микросервис с AI-функциями. Выпускники получают сертификат Junior Backend
                Engineer AI Specialization.
              </p>
              <p class="text-slate-700 font-bold">28 недель (261 академических часов)</p>
              <p class="text-slate-700 font-bold">Командный финальный проект</p>
              <p class="text-2xl font-extrabold text-slate-700">
                400&nbsp;000&nbsp;<span class="text-xl font-semibold align-center"
                  >₸</span
                >
              </p>

              <UButton
                color="primary"
                class="w-fit px-6"
                variant="solid"
                @click="requestPriceBackend"
              >
                Хочу пройти курс!
              </UButton>
            </div>
          </div>

          <!-- Competitive Programming with AI -->
          <div class="flex flex-col md:flex-row rounded-xl bg-[#FFF5D1]">
            <div
              class="relative w-full sm:min-w-56 md:max-w-56 overflow-hidden self-stretch max-h-44 sm:max-h-none"
            >
              <img
                src="/images/act.png"
                alt=""
                class="object-cover -translate-y-40 sm:translate-y-0 h-full"
              />
            </div>
            <div class="w-full md:w-2/4 px-4 py-4 flex flex-col gap-2 text-primary-dark">
              <h4 class="text-xl font-bold">Спортивное программирование с AI</h4>
              <p class="text-sm">
                Спортивное программирование с AI — это 28-недельный курс для новичков,
                обучающий решению алгоритмических задач с помощью Python, C++ и Java.
                Студенты проходят базовые структуры данных и алгоритмы (поиск, сортировки,
                жадные алгоритмы, динамика, графы) и учатся использовать AI-инструменты
                (ChatGPT, Copilot, Python Tutor) для обучения, отладки и автоматической
                проверки решений. Курс включает регулярную практику на Codeforces, парное
                программирование и финальный контест. Выпускники получают уверенные навыки
                Junior Competitive Programmer с акцентом на эффективное применение ИИ.
              </p>
              <p class="text-slate-700 font-bold">28 недель (261 академических часов)</p>
              <p class="text-slate-700 font-bold">Индивидуальный контест-проект</p>
              <p class="text-2xl font-extrabold text-slate-700">
                400&nbsp;000&nbsp;<span class="text-xl font-semibold align-center"
                  >₸</span
                >
              </p>

              <UButton
                color="primary"
                class="w-fit px-6"
                variant="solid"
                @click="requestPriceCP"
              >
                Хочу пройти курс!
              </UButton>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- student works section -->
    <section class="py-8 px-3 md:px-12">
      <div class="flex flex-col gap-4">
        <!-- title -->
        <div class="flex flex-col gap-2 text-primary-dark">
          <h3 class="text-3xl font-bold">Работы наших студентов</h3>
          <p>Посмотрите реальные проекты, которые студенты сделали во время обучения.</p>
        </div>

        <!-- content -->
        <div class="flex flex-col">
          <div class="flex flex-row max-h-72">
            <div class="w-2/4 p-2">
              <img
                src="/images/studworks/1.jpg"
                alt=""
                class="h-full w-full rounded-lg object-cover"
              />
            </div>
            <div class="w-2/4 p-2">
              <img
                src="/images/studworks/2.jpg"
                alt=""
                class="h-full w-full rounded-lg object-cover"
              />
            </div>
          </div>
          <div class="flex flex-row max-h-72">
            <div class="w-2/4 p-2">
              <img
                src="/images/studworks/3.jpg"
                alt=""
                class="h-full w-full rounded-lg object-cover"
              />
            </div>
            <div class="w-2/4 p-2">
              <img
                src="/images/studworks/4.jpg"
                alt=""
                class="h-full w-full rounded-lg object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- course ways section -->
    <section class="py-8 px-3 md:px-12" id="class">
      <div class="flex flex-col gap-4">
        <!-- title -->
        <div class="flex flex-col gap-2 text-primary-dark">
          <h3 class="text-3xl font-bold">Как проходят курсы</h3>
        </div>

        <!-- content -->
        <div class="flex flex-col md:flex-row">
          <div class="md:w-2/6 p-2">
            <div
              class="flex flex-col justify-start gap-2 bg-white rounded-lg overflow-hidden"
            >
              <div class="font-bold text-lg p-2 px-4">Лекции</div>
              <div class="text-md p-2 px-4">
                Интерактивные занятия, на которых преподаватели объясняют ключевые
                концепции и принципы разработки.
              </div>
              <img
                src="/images/way-2.png"
                alt=""
                class="object-cover h-full w-full mt-auto"
              />
            </div>
          </div>
          <div class="md:w-2/6 p-2">
            <div
              class="flex flex-col justify-start gap-2 bg-white rounded-lg overflow-hidden"
            >
              <div class="font-bold text-lg p-2 px-4">Семинары</div>
              <div class="text-md p-2 px-4">
                Разбор реальных задач, практика, обсуждение сложных вопросов и обратная
                связь от экспертов.
              </div>
              <img src="/images/way-0.png" alt="" class="object-contain w-full mt-auto" />
            </div>
          </div>
          <div class="md:w-2/6 p-2">
            <div
              class="flex flex-col justify-start gap-2 bg-white rounded-lg overflow-hidden"
            >
              <div class="font-bold text-lg p-2 px-4">Проект</div>
              <div class="text-md p-2 px-4">
                Создание собственного проекта в портфолио с применением всех полученных
                знаний.
              </div>
              <img src="/images/way-3.png" alt="" class="object-contain w-full mt-auto" />
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- course condition section -->
    <section class="py-8 px-3 md:px-12" id="class">
      <div class="flex flex-col gap-4">
        <!-- content -->
        <div class="flex flex-col md:flex-row">
          <div class="md:w-1/2 mx-auto p-2">
            <div
              class="flex flex-col justify-start gap-2 bg-white rounded-lg overflow-hidden"
            >
              <div class="p-2 px-4 flex flex-col gap-2 text-primary-dark">
                <h3 class="text-3xl font-bold">Критерии отбора</h3>
              </div>
              <div class="text-md px-4">
                Возраст от 18 до 45 лет, онлайн-тест на базовые IT-и аналитические знания,
                Интервью для оценки уровня английского(B1+) и мотивации.
              </div>
              <img
                src="/images/condition.png"
                alt=""
                class="object-cover h-full w-2/4 mt-auto"
              />
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- team section -->
    <section class="py-12 px-3 md:px-12" id="team">
      <!-- заголовок -->
      <div class="mb-8">
        <h3 class="text-3xl font-bold text-black">Наша команда</h3>
        <p class="text-gray-600 mt-1">Вдохновляем на рост, обучаем с уверенностью</p>
      </div>
      <!-- Сетка преподавателей -->
      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        <div
          v-for="member in teamList"
          :key="member.name"
          class="bg-gray-50 border border-gray-200 rounded-xl p-5 shadow-sm"
        >
          <h4 class="text-lg font-semibold text-primary-dark mb-1">{{ member.name }}</h4>
          <p class="text-sm font-bold text-blue-600 mb-1">{{ member.role }}</p>
          <p class="text-sm text-gray-600">{{ member.experience }}</p>
        </div>
      </div>
      <!-- блок основателя -->
      <div class="pt-16 grid grid-cols-1 md:grid-cols-2 gap-8 items-center mb-16">
        <div>
          <blockquote class="text-2xl text-black font-medium">
            «ИИ — это не просто инструмент для технологических гигантов, а катализатор
            обучения и инноваций. Я создал Zymyran Academy, чтобы дать следующему
            поколению разработчиков образование с прицелом на ИИ»
          </blockquote>
          <p class="mt-4 text-lg font-semibold text-black">— Диас Арымбеков.</p>
        </div>
        <div class="relative w-full h-full max-w-xs md:max-w-md mx-auto">
          <img
            src="/images/founder.webp"
            alt="Арымбеков Диас"
            class="rounded-xl object-cover shadow-md"
          />
          <div
            class="absolute bottom-0 left-0 right-0 p-4 bg-opacity-70 text-white rounded-b-xl"
          >
            <h4 class="text-xl font-semibold">Основатель академии</h4>
            <p class="text-lg">Диас Арымбеков</p>
            <div class="hidden mt-2 flex flex-wrap gap-2 text-xs text-white font-medium">
              <span class="bg-white bg-opacity-10 px-2 py-0.5 rounded">Front-end</span>
              <span class="bg-white bg-opacity-10 px-2 py-0.5 rounded">VueJS</span>
              <span class="bg-white bg-opacity-10 px-2 py-0.5 rounded">ElectronJS</span>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- footer  -->
    <footer
      id="contacts"
      class="relatie pb-12 px-3 md:px-12 py-7 bg-slate-900 text-white rounded-tl-2xl rounded-tr-2xl"
    >
      <img
        class="absolute right-3 md:right-16 -top-16 animate-bounce h-44 md:h-56"
        src="/images/webp/roket-footer.webp"
        alt=""
      />
      <div class="flex flex-col md:flex-row">
        <div class="flex flex-col items-start md:w-2/4 gap-4">
          <img class="h-7 md:h-11" src="/images/webp/logotype-text-white.webp" alt="" />
          <p class="mt-2 max-w-80">
            Один курс — большое начало. <br />Присоединяйся к тем, кто уже делает
            <br />шаг в IT.
          </p>
          <ul
            class="flex flex-col md:flex-row items-start md:items-center md:justify-center gap-4 font-bold"
          >
            <li><a class="hover:text-blue-600" href="#">Главная</a></li>
            <li><a class="hover:text-blue-600" href="#courses">Курсы</a></li>
            <li><a class="hover:text-blue-600" href="#class">Процесс обучения</a></li>
            <li><a class="hover:text-blue-600" href="#team">Команда</a></li>
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
              placeholder="+7 (---) --- -- --"
              v-model="phoneNumber"
              v-maska="'+7 (###)-###-##-##'"
            />
            <UButton color="blue" variant="solid" @click="handleSubmit"
              >Подать заявку</UButton
            >
          </div>
          <p class="mt-2 max-w-80 font-bold">Мы в социальных сетях</p>
          <ul class="list-none flex flex-row items-center justify-center gap-4 font-bold">
            <li>
              <a
                class="h-11 w-11 rounded-lg border border-white text-white bg-transparent hover:bg-slate-500 hover:text-secondary hover:transition-all flex items-center justify-center"
                href="https://www.instagram.com/zymyranacademy?igsh=MnVubTY2YTd3cm5h&utm_source=qr"
                target="_blank"
              >
                <Icon name="ph:instagram-logo" size="24px" />
              </a>
            </li>
            <li>
              <a
                class="h-11 w-11 rounded-lg border border-white text-white bg-transparent hover:bg-slate-500 hover:text-secondary hover:transition-all flex items-center justify-center"
                href="https://t.me/zymyran_academy/"
                target="_blank"
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
