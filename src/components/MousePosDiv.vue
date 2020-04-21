<template>
    <div class="g-rect-200-200" ref="containerRef">
        <p>mouse move here</p>
        <span>
            {{ mousePos }}
        </span>
    </div>
</template>

<script>
import { useMousePos } from '../js/aomi-hooks/useMousePos.js'
import { ref } from 'vue'

export default {
    name: 'MousePosDiv',
    setup () {
        const containerRef = ref(null)
        const mousePos = useMousePos(containerRef)
        
        return {
            mousePos,
            containerRef
        }
    }
}
</script>

<style lang="scss" scoped>

</style>