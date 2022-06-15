import type {ConfigEnv, UserConfig} from 'vite'

import path from 'path'
import uniPlugin from '@dcloudio/vite-plugin-uni'

const root = path.resolve(__dirname, 'src')
const types = path.resolve(__dirname, 'types')
export default (env: ConfigEnv): UserConfig => {
  return {
    plugins: [uniPlugin()],
    resolve: {
      alias: {
        '/@': root,
        '/types': types
      }
    }
  }
}
