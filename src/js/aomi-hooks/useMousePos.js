import { reactive, onMounted, onBeforeUnmount, toRefs } from 'vue'

export function useMousePos() {
    const pos = reactive({x: 0, y: 0})

    function updatePos(e) {
        console.log('current event:', e)
        pos.x = e.pageX
        pos.y = e.pageY
    }

    onMounted(() => {
        window.addEventListener('mousemove', updatePos, false)
    })

    onBeforeUnmount(() => {
        window.removeEventListener('mousemove', updatePos, false)
    })

    return toRefs(pos)

}