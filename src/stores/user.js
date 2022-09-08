import { atom } from 'recoil'

const user = atom({
  key: 'user',
  default: {
    isLogin: false,
    username: '',
    firstName: '',
    lastName: '',
    age: -1,
    sex: '', // male, female
    uid: '',
  },
})

export default {
  user,
}
