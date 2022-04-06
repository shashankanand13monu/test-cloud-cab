import {useEffect, useState} from 'react'
import tw from "tailwind-styled-components"
import Map from '../components/Map'
import { useRouter } from 'next/router'
import RideSelector from '../components/RideSelector'
import Link from 'next/dist/client/link'


const Confirm = () => {
//  used for catching the url query or get the data from url queries
    const router = useRouter()
    const {pickup, dropoff} = router.query

    // console.log("Pickup",pickup);
    // console.log("Dropoff",dropoff);

    const [pickUpCoordinates , setPickUpCoordinates] = useState([0,0])
    const [dropofCoordinates, setDropofCoordinates] = useState([0,0])


  const getPickUpCoordinates = (pickup) => {

  
     //Fetch() calls API

     fetch(`https://api.mapbox.com/geocoding/v5/mapbox.places/${pickup}.json?`+ // paste url with acces token
       new URLSearchParams({
           access_token: "pk.eyJ1IjoiYWluZHJhaWwiLCJhIjoiY2wxZ3gxdXRmMTdnZjNvbG50Y25nZTZ0ciJ9.GNxD2xX5SOb_YC63s9Hiaw",
           limit:1 //only one thing from the data
       })
     )
     .then((response)=>{
        return response.json();
    })
     .then(data =>{
        //  console.log(data.features[0].center)
         if(data.features[0])
         setPickUpCoordinates( data.features[0].center)
     })
  }

  const getDropofCoordinates = (dropoff) => {
    
    //Fetch() calls API

    fetch(`https://api.mapbox.com/geocoding/v5/mapbox.places/${dropoff}.json?`+ // paste url with acces token
      new URLSearchParams({
          access_token: "pk.eyJ1IjoiYWluZHJhaWwiLCJhIjoiY2wxZ3gxdXRmMTdnZjNvbG50Y25nZTZ0ciJ9.GNxD2xX5SOb_YC63s9Hiaw",
          limit:1 //only one thing from the data
      })
    )
    .then((response)=>{
        return response.json();
    })
    .then(data =>{
        // console.log(data.features[0].center)
         if(data.features[0])
        setDropofCoordinates(data.features[0].center)
        // else
        // console.log(Error)
        
    }) 
  }

  useEffect(() => {
     getPickUpCoordinates(pickup);
     getDropofCoordinates(dropoff);

  },[pickup,dropoff]) //[] means useEffect will work if values inside that [] changes

  

  return (
   

    <Wrapper>
         <ButtonContainer>
            <Link href="/search">
                <BackButton
                     src='https://img.icons8.com/ios-filled/50/000000/left.png'
                />
            </Link>
        </ButtonContainer>
        <Map
        pickUpCoordinates ={pickUpCoordinates}
        dropofCoordinates={dropofCoordinates}  //passed in map as a prop
        />
        <RideContainer>


          <RideSelector 
          pickUpCoordinates ={pickUpCoordinates}
          dropofCoordinates={dropofCoordinates} //passed in RideSelector as a prop
          />

          <ConfirmButtonContainer>
             <ConfirmButton>
               Confirm Ride
             </ConfirmButton>
          </ConfirmButtonContainer>
          
        </RideContainer>
        
    </Wrapper>
  )
}

export default Confirm

const Wrapper = tw.div`
 h-screen flex flex-col
`

const RideContainer = tw.div`
flex flex-1 flex-col h-1/2
`
const ButtonContainer = tw.div`
rounded-full absolute top-4 left-4 z-10 bg-white shadow-md cursor-pointer
`
const BackButton = tw.img`
h-full object-contain 
`

const ConfirmButtonContainer = tw.div `
border-t-2
`
const ConfirmButton = tw.div`
 text-center bg-black text-white m-5 py-4 text-xl cursor-pointer
`