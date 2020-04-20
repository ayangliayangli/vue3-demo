<template>
    <div>
        <span>hello vue3</span>
        <span>{{ titleRef }}</span>
        <p>
            <span>ref: {{ titleRef }} </span>
            <button @click="handleClickChangeTitle">change</button>
        </p>
        <p>
            <span>ref: {{ reactiveData }} </span>
            <button @click="handleClickChangeReactiveData">change</button>
        </p>
    </div>
</template>

<script>
import { ref, reactive } from 'vue'
export default {
    name: 'HelloVue3',
    setup () {
        const titleRef = ref('this is title')
        const reactiveData = reactive({
            name: 'yangli',
            age: 28
        })
        const handleClickChangeTitle = () => {
            console.log(titleRef)
            titleRef.value += '1'
        }
        const handleClickChangeReactiveData = () => {
            console.log(reactiveData)
            reactiveData.name = reactiveData.name + 1
            reactiveData.age = reactiveData.age + 1
        }
        return {
            titleRef,
            reactiveData,
            handleClickChangeTitle,
            handleClickChangeReactiveData
        }
    },
}
</script>

<style lang="scss" scoped>

</style>