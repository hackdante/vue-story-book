<template>
  <button @click="handlerGoTo(goURL)" class="btn_container" :class="btnStyle">
    {{ label }}
  </button>
</template>
<script lang="ts" setup>
import { computed, toRef } from "vue";
import { useRouter } from "vue-router";

type IBtnStyleLink = "light" | "dark" | "flat" | "default";

const props = withDefaults(
  defineProps<{ label: string; goURL: string; typeStyle: IBtnStyleLink }>(),
  {
    label: "button name",
    goURL: "/",
    typeStyle: "default",
  }
);

const router = useRouter();
const label = toRef(props, "label");
const goURL = toRef(props, "goURL");
const typeStyle = toRef(props, "typeStyle");

const btnStyle = computed(() => `btn_container-${typeStyle.value}`);

function handlerGoTo(goToURL: string) {
  router.push({ name: goToURL });
}
</script>
<style lang="scss" src="./LinkBtn.scss" scoped />
