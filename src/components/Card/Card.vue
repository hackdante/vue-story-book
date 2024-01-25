<script lang="ts" setup>
import { toRef } from "vue";
import { useCard } from "./composable/useCard";

const props = withDefaults(
    defineProps<{
        pType: "dark" | "light";
        pTitle: string;
        pDescription: string;
        pGoTo: string;
    }>(),
    {
        pType: "dark",
        pTitle: "Any Title",
        pDescription: "Any description here",
        pGoTo: "/",
    }
);

const { goToURL, showURL } = useCard();

const title = toRef(props, "pTitle");
const description = toRef(props, "pDescription");
const url = toRef(props, "pGoTo");
const type = toRef(props, "pType");
</script>

<template>
    <div class="card" :class="[`card__${type}`]">
        <div class="card__container">
            <div :class="[`card__${type}--title`]">
                {{ title }}
            </div>
            <div :class="[`card__${type}--description`]">
                {{ description }}
            </div>

            <button :class="[`card__${type}--btn`]" @click="goToURL(url)">
                CLICK HERE
                <p v-if="showURL">- {{ url }}</p>
            </button>
        </div>
    </div>
</template>
<style lang="scss" scoped>
.card {
    border: 2px solid rgba(0, 0, 0, 0.2);
    border-radius: 50px;
    padding: 5%;
    font-family: sans-serif;

    &__dark {
        background: rgb(45, 154, 182);

        &--title {
            color: rgb(255, 255, 255);
            font-size: 1.5rem;
            font-weight: 800;
        }

        &--description {
            margin-top: 1%;
            margin-bottom: 1%;
            font-size: 1rem;
            color: rgb(255, 255, 255);
        }

        &--btn {
            cursor: pointer;
            border: none;
            border-radius: 50px;
            padding: 1%;
            font-weight: 600;
            font-size: 1.2rem;
            width: 100%;
            background: rgb(255, 255, 255);
            color: rgb(45, 154, 182);
        }
    }

    &__light {
        background: rgba(212, 212, 212, 0.4);

        &--title {
            color: rgb(45, 154, 182);
            font-size: 1.5rem;
            font-weight: 800;
        }

        &--description {
            margin-top: 1%;
            margin-bottom: 1%;
            font-size: 1rem;
            color: rgba(0, 0, 0, 0.87);
        }

        &--btn {
            cursor: pointer;
            border: none;
            border-radius: 50px;
            padding: 1%;
            font-weight: 600;
            font-size: 1.2rem;
            width: 100%;
            background: white;
            color: rgb(45, 154, 182);
        }
    }
}
</style>
