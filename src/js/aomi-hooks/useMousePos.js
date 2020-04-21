import { reactive, onMounted, onBeforeUnmount, toRefs } from 'vue'

export function useMousePos(containerRef) {
    const pos = reactive({x: 0, y: 0})

    function updatePos(e) {
        console.log('current event:', e)
        pos.x = e.pageX
        pos.y = e.pageY
    }

    onMounted(() => {
        console.log('---', containerRef)
        
        containerRef.value.addEventListener('mousemove', updatePos, false)
    })

    onBeforeUnmount(() => {
        containerRef.value.removeEventListener('mousemove', updatePos, false)
    })

    return toRefs(pos)

}