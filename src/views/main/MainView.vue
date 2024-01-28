<template>
  <div class="main_container">
    <h1>Bienvenido {{ title }}</h1>
    <EntryBtn label="Entrar" goURL="LoginView" typeStyle="flat" />
  </div>
</template>

<script lang="ts" setup>
import { ref } from "vue";
import EntryBtn from "@/components/buttons/link/LinkBtn.vue";

const title = ref<string>("Experience");
</script>
<style lang="scss" src="./MainView.scss" />
