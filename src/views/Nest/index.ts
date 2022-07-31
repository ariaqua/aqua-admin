import { defineComponent, h, resolveComponent } from "vue"

const style = 'margin-left: 1rem; padding: 1rem; border: 1px solid'

export const Nest1 = defineComponent({
  name: 'Nest1',
  render() {
    return h('h1', { style }, [h('p', { style: 'padding: 1rem' }, 'Nest1'), h(resolveComponent('router-view'))])
  }
})

export const Nest2 = defineComponent({
  name: 'Nest2',
  render() {
    return h('h2', { style }, [h('p', { style: 'padding: 1rem' }, 'Nest2'), h(resolveComponent('router-view'))])
  }
})

export const Nest3 = defineComponent({
  name: 'Nest3',
  render() {
    return h('h3', { style }, 'Nest3')
  }
})
