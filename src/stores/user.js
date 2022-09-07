import { atom } from 'recoil'

const user = atom({
  key: 'user',
  default: {},
})

export default {
  user,
}
