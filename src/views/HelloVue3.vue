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

        <MousePosDiv></MousePosDiv>
        
    </div>
</template>

<script>
import { ref, reactive, computed, watchEffect, onBeforeMount, onMounted, onBeforeUpdate, onUpdated, onBeforeUnmount, onUnmounted} from 'vue'
import MousePosDiv from '../components/MousePosDiv.vue'
export default {
    name: 'HelloVue3',
    components: {
        MousePosDiv
    },
    setup () {
        const titleRef = ref('this is title')
        const reactiveData = reactive({
            name: 'yangli',
            age: 28,
            ageDouble: computed(() => reactiveData.age * 2)
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

        // effect code
        watchEffect(() => {
            document.title = `effect: age: ${reactiveData.age}`
        })

        // lifecycle code
        onBeforeMount(() => {
            console.log('onBeforeMount')
        })

        onMounted(() => {
            console.log('onMounted')
        })

        onBeforeUnmount(() => {
            console.log('onBeforeUnmount')
        })

        onUnmounted(() => {
            console.log('onUnmounted')
        })

        onBeforeUpdate(() => {
            console.log('onBeforeUpdate')
        })

        onUpdated(() => {
            console.log('onUpdated')
        })

        return {
            titleRef,
            reactiveData,
            handleClickChangeTitle,
            handleClickChangeReactiveData,
        }
    },
}
</script>

<style lang="scss" scoped>

</style>