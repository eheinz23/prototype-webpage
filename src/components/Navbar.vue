<template>
  <nav class="navbar-overlay d-flex justify-content-between align-items-center px-4">
    <div class="logo">{{ $t('title_nav')}}</div>

    <!-- Hamburger Button -->
    <button class="hamburger d-md-none" @click="toggleMenu">
      ☰
    </button>

    <ul :class="['nav-links', 'd-md-flex', 'align-items-center', 'mx-3', { 'show': showMenu }]">
    <li v-for="link in links" :key="link.path">
      <router-link :to="link.path">{{ link.name }}</router-link>
    </li>
      <li class="language-select">
      <select v-model="currentLocale" @change="changeLocale" class="form-select text-white border-white">
        <option value="de">{{ $t('language.de') }}</option>
        <option value="en">{{ $t('language.en') }}</option>
      </select>
      </li>
      <li>
        <button @click="toggleTheme" class="btn btn-outline-light me-2">
          {{ theme === 'dark' ? '🌙 Dark' : '☀️ Light' }}
        </button>
      </li>
    </ul>
  </nav>
</template>

<script setup>
import { ref, onMounted, watch } from 'vue'
import { computed } from 'vue'
import { useI18n } from 'vue-i18n'

const props = defineProps({
  links: Array
})

const showMenu = ref(false)
const { locale, t } = useI18n()
const currentLocale = ref(locale.value)

function toggleMenu() {
  showMenu.value = !showMenu.value
}

const theme = ref('light')

const applyTheme = (val) => {
  document.documentElement.setAttribute('data-theme', val)
}

const toggleTheme = () => {
  theme.value = theme.value === 'light' ? 'dark' : 'light'
  localStorage.setItem('theme', theme.value)
  applyTheme(theme.value)
}

onMounted(() => {
  const theme = localStorage.getItem('theme')
  applyTheme(theme.value)
})

function changeLocale() {
  locale.value = currentLocale.value
}

const links = ref([
  { name: 'Home', path: '/' },
  { name: 'SecondPage', path: '/second-page' },
  { name: 'Gallery', path: '/gallery' }
])


</script>

<style scoped>
.navbar-overlay {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 70px;
  background-color: rgba(0, 0, 0, 0.4);
  color: var(--title-color);
  z-index: 5;
  padding: 0 1rem;
}

.logo {
  font-size: 1.3rem;
  font-weight: bold;
}

/* Hamburger Button */
.hamburger {
  background: none;
  border: none;
  font-size: 1.8rem;
  color: white;
  cursor: pointer;
}

/* Navigation Links */
.nav-links {
  list-style: none;
  margin: 0;
  padding: 0px;
  display: none;
  flex-direction: column;
  position: absolute;
  top: 70px;
  left: 0;
  right: 0;
  background-color: var(--bg-burgermenu);
  text-align: center;
}

.nav-links li {
  padding: 0.8rem 0rem;
}

.nav-links a {
  color: white;
  text-decoration: none;
  font-size: 1.2rem;
}

/* Sichtbar, wenn showMenu = true */
.nav-links.show {
  display: flex;
}

/* Desktop-Version */
@media (min-width: 768px) {
  .hamburger {
    display: none;
  }

  .nav-links {
    position: static;
    background: none;
    display: flex !important;
    flex-direction: row;
    gap: 1.5rem;
  }

  .nav-links li {
    padding: 0;
  }
}
</style>
