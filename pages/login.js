import {useEffect} from 'react'
import tw from "tailwind-styled-components"
import { useRouter } from 'next/router'
import { signInWithPopup,onAuthStateChanged } from "firebase/auth"
import { auth,provider } from '../firebase'

// const Login = () => {

//    const router = useRouter()

//    useEffect(() => {
//     onAuthStateChanged(auth,(user) =>{
//       if(user){ //if user exits then send me to the home page
//           router.push('/')
//       }  
//     })
//    }, [])
const Login = () => {
    const router = useRouter()

    useEffect(()=>{
        onAuthStateChanged(auth, (user) => {
            if (user) {
                router.push("/")
            }
        });
    }, [router])
   

  return (
    <Wrapper>
        <Logo src="https://cdn.dribbble.com/users/2723353/screenshots/9218361/media/f04476a4ff3d1ca059051348b2a7ebdd.png?compress=1&resize=1000x750&vertical=top"  />
        <Title>
            Log in to access your account
        </Title>
        <HeadImage src='https://i.ibb.co/CsV9RYZ/login-image.png'/>
      <SignInButton onClick={()=> signInWithPopup(auth,provider)}>
          Sign in with Google
      </SignInButton >
    </Wrapper>
  )
}

export default Login

const Wrapper = tw.div`
 flex flex-col h-screen p-4 bg-gray-200
`

const SignInButton = tw.button`
bg-black text-white text-center py-4 mt-8 self-center w-full text-xl
`
const Logo = tw.img`
h-20 w-auto object-contain self-start self-center 
// obj-con to make the image res save 

`

const Title = tw.div`
text-5xl pt-4 text-gray-500
`
const HeadImage = tw.img`
object-contain self-center w-full
`

