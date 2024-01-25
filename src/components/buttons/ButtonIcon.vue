
<script lang="ts" setup>
import { computed, toRef } from 'vue';

const props = withDefaults(defineProps<{
  title?: string,
  role: 'admin' | 'user' | 'superAdmin' | 'default'
}>(), {
  title: 'Button Default',
  role: 'default'
})

const toTitle = toRef(props, 'title');
const toRole = toRef(props, 'role')


const getRole = computed<number>(() => {
  switch (toRole.value) {
    case 'superAdmin':
      return 0
    case 'admin':
      return 1
    case 'user':
      return 2
    default:
      return 99
  }
})


</script>

<template>
  <div v-if="getRole === 99" >¡Usuario Invalido!</div>
  <button>{{ toTitle }} - {{ toRole }}</button>
</template>
