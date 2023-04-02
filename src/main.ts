import * as Vue from 'vue'
import { preFetchLib, bindVueRuntime } from 'hel-micro'

bindVueRuntime({ Vue })

// eslint-disable-next-line
async function main() {
  await preFetchLib('hel-tpl-remote-vue3-comps-ts')

  // 本地联调
  // await preFetchLib('hel-tpl-remote-vue3-comps-ts', {
  //   custom: {
  //     host: 'http://localhost:7001'
  //   }
  // })

  await import('./loadApp')
}

main().catch(console.error)
