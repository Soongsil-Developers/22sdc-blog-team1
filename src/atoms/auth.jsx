import {atom} from 'recoil'


export const authState = atom({
    key: 'src/atoms/auth.jsx-authState', 
    default: false
  });


export const userState = atom({
  key: 'src/atoms/auth.jsx-userState', 
  default: {
    username:'',
    email:'',
    token:'',
    bio:null,
    image:'https://api.realworld.io/images/smiley-cyrus.jpeg',
  }
})

export const profileState = atom({
  key: 'src/atoms/auth.jsx-profileState',
  default :{
    username:'',
    bio:null,
    image:'https://api.realworld.io/images/smiley-cyrus.jpeg',
    following:false
  }
})

