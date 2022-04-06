import Head from 'next/head'
import { useEffect,useState } from 'react'
import Image from 'next/image'
 import styles from '../styles/Home.module.css'
import Map from './components/Map'
import tw from "tailwind-styled-components"
import { Input } from 'postcss'
import Link from 'next/link'
import { auth } from '../firebase'
import { onAuthStateChanged, signOut } from 'firebase/auth'
import { useRouter } from 'next/router'

 

export default function Home() {

 
const [user, setUser] = useState(null)
const router = useRouter()

useEffect(() =>{
return onAuthStateChanged(auth,user =>{
  if(user){
    setUser({
      name: user.displayName,  //set user name and photo
      photo: user.photoURL,
    })
  }else{
      setUser(null)
      router.push('/login') //send back to login page
  }
})
},[router])

  
  return (
    <Wrapper>
      <Map/>
      <Action>
        <Header>
          <Logo src="https://cdn.dribbble.com/users/2723353/screenshots/9218361/media/f04476a4ff3d1ca059051348b2a7ebdd.png?compress=1&resize=1000x750&vertical=top"  />
          <Profile>
            <Name>
              {user && user.name}  {/* //if the user exits show me their user name */}
            </Name>
            <UserImage src={user && user.photo} onClick={()=> signOut(auth)} />
            
          </Profile>

        </Header>

        <ActionButtons>

               <Link href="/search" passHref>

            


          <ActionButton>
            <ActionButtonImage src="https://i.ibb.co/cyvcpfF/uberx.png"/>
             Ride

          </ActionButton>


                </Link>


          <ActionButton>
            <ActionButtonImage src="https://i.ibb.co/n776JLm/bike.png" />
             Wheel

          </ActionButton>

          <ActionButton>
            <ActionButtonImage src="https://i.ibb.co/5RjchBg/uberschedule.png" />
             Reserve

          </ActionButton>

        </ActionButtons>

        <InputButtons>
          
        
        Where to?
        
        </InputButtons>

      </Action>
    </Wrapper>
    
  )
}

const Wrapper = tw.div`
 flex flex-col  h-screen
`

const Action = tw.div`
flex-1 p-4
`

const Header = tw.div`
flex justify-between items-center pb-7
`
const  Logo = tw.img`
h-20 rounded-full 
`
const Profile = tw.div`
flex items-center
`
const Name = tw.div`
mr-4 w-20 text-lg font-semibold
`
const UserImage = tw.img `
h-12 w-12 rounded-full border border-black-200 p-px cursor-pointer
`

const ActionButtons = tw.div `
flex 
`
const ActionButton = tw.div `
flex bg-gray-200 flex-1 m-1 h-32 items-center flex-col justify-center rounded-lg transform hover:scale-105 transition text-xl
`
const ActionButtonImage = tw.img `
h-3/5
`

const InputButtons = tw.div `
h-20 bg-gray-200 text-2xl p-4 flex items-center mt-8
`