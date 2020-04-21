<template>
    <div class="g-rect-200-200">
        <p>mouse move here</p>
        <span>
            {{ mousePos }}
        </span>
    </div>
</template>

<script>
import { useMousePos } from '../js/aomi-hooks/useMousePos.js'
export default {
    name: 'MousePosDiv',
    setup () {
        const mousePos = useMousePos()
        return {
            mousePos
        }
    }
}
</script>

<style lang="scss" scoped>

</style>