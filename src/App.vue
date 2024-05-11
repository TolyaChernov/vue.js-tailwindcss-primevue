<script setup>
import { RouterLink, RouterView } from 'vue-router'
import HelloWorld from './components/HelloWorld.vue'
import { useCounterStore } from './stores/counter'
import { storeToRefs } from 'pinia'

const counter = useCounterStore()
const { count, doubleCount } = storeToRefs(counter)
const { increment } = counter
const { decrement } = counter
const { reset } = counter
</script>

<template>
  <header class="bg-white">
    <img alt="Vue logo" class="logo" src="@/assets/logo.svg" width="125" height="125" />

    <div class="wrapper">
      <div class="flex flex-col gap-3">
        count: {{ count }} doubleCount: {{ doubleCount }}
        <div class="flex gap-3">
          <button
            class="rounded-lg bg-green-700 px-2 py-1 text-slate-50 hover:bg-green-500"
            @click="increment"
          >
            Увеличить "+1"
          </button>
          <button
            class="rounded-lg bg-red-700 px-2 py-1 text-slate-50 hover:bg-red-500"
            @click="decrement"
          >
            Уменьшить "-1"
          </button>
          <Button label="Сброс" icon="pi pi-check" iconPos="right" @click="reset" />
        </div>
      </div>
      <HelloWorld msg="You did it!" />
      <nav>
        <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/about">About</RouterLink>
      </nav>
    </div>
  </header>

  <RouterView />
</template>

<style scoped>
.bg-primary {
  background-color: #df8b0c;
}

header {
  line-height: 1.5;
  max-height: 100vh;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

nav {
  width: 100%;
  font-size: 12px;
  text-align: center;
  margin-top: 2rem;
}

nav a.router-link-exact-active {
  color: var(--color-text);
}

nav a.router-link-exact-active:hover {
  background-color: transparent;
}

nav a {
  display: inline-block;
  padding: 0 1rem;
  border-left: 1px solid var(--color-border);
}

nav a:first-of-type {
  border: 0;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }

  nav {
    text-align: left;
    margin-left: -1rem;
    font-size: 1rem;

    padding: 1rem 0;
    margin-top: 1rem;
  }
}
</style>
