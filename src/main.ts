import * as Vue from 'vue'
import { preFetchLib, bindVueRuntime } from 'hel-micro'

const VueMod: any = Vue
console.log(VueMod)
console.log(VueMod.Module)
bindVueRuntime({ Vue: VueMod })

// eslint-disable-next-line
async function main() {
  // await preFetchLib('hel-tpl-remote-vue3-comps-ts')

  await preFetchLib('hel-tpl-remote-vue3-comps-ts', {
    custom: {
      host: 'http://localhost:7001'
    }
  })

  await import('./loadApp')
}

main().catch(console.error)
