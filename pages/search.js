import {useState} from 'react'
import tw from "tailwind-styled-components"
import Link from 'next/link'


const Search = () => {

    const [pickup, setPickUp] = useState("");
    const[dropoff, setDropof] = useState("");

    // console.log(pickup);
    // console.log(dropof);

  return (
    <Wrapper>
         <Link href="/" passHref>
            <ButtonContainer>
                <BackButton src="https://img.icons8.com/ios-filled/50/000000/left.png" /> 
             </ButtonContainer>
         </Link>
      

      <InputContainer>
       <FromToIcons>
         <Circle src="https://img.icons8.com/ios-filled/50/9CA3AF/filled-circle.png" />

         <Line src = "https://img.icons8.com/ios/50/9CA3AF/vertical-line.png"  />

         <Square src = "https://img.icons8.com/windows/50/000000/square-full.png" />

       </FromToIcons>

       <InputBoxes>
       
        <Input 
        placeholder='Enter pickup location'
        value ={pickup}
        onChange={(e)=> setPickUp(e.target.value)} 
        />
        <Input 
        placeholder='Where to ?'
        value={dropoff}
        onChange={(e)=> setDropof(e.target.value)} // as value is intialised as empty string so it always be there util we use on change (e) where e is event
         />
       
       </InputBoxes>
      <PlusIcon src="https://img.icons8.com/ios/50/000000/plus-math.png" />
      </InputContainer>

      <SavedPlaces>
          <StarIcon src="https://img.icons8.com/ios-filled/50/ffffff/star--v1.png" />
          Saved Places
      </SavedPlaces>
{/* //to pass data from one page to another in link */}
<Link href={{
    pathname: "/confirm",
    query:{  //blue ones will be received by routes
        pickup: pickup,    
        dropoff: dropoff
    }


}} passHref> 

    <center>

      <ConfirmButton>

          Confirm Location
      </ConfirmButton>
    </center>
</Link>  

    </Wrapper>
  )
}

export default Search

const Wrapper = tw.div `
bg-gray-200 h-screen p-8
`

const ButtonContainer = tw.div`
bg-white  px-4
`

const BackButton = tw.img`
h-12
`
const InputContainer = tw.div `
bg-white flex items-center px-4 mb-2
`
const FromToIcons = tw.div `
 w-10 flex flex-col mr-2 items-center
`
const Circle = tw.img `
h-2.5 
`
const Line = tw.img `
h-10
`
const Square = tw.img `
h-3
`
const InputBoxes = tw.div `
flex flex-col flex-1  
`
const Input = tw.input `
h-10 bg-gray-200 my-2 rounded-2 p-3 outline-none border-none
`
const PlusIcon = tw.img `
w-10 h-10 bg-gray-200 rounded-full mx-3 flex 
`

const SavedPlaces = tw.div`
flex items-center bg-white px-4 py-2 my-4 rounded-full
`
const StarIcon = tw.img`
bg-gray-400 w-10 h-10 p-2 rounded-full mr-2
`
const ConfirmButton = tw.div`
bg-black text-white px-3 py-4 m-4 mt-5 flex justify-center text-2xl cursor-pointer w-1/4 rounded-full tranform hover:bg-green-500 transition
`