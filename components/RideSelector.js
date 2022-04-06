import {useEffect,useState} from 'react'

//useEffect is used to call API easily and make sure that the page dont crash and UseState to manage to state of something when it not changes
import tw from 'tailwind-styled-components'
// import carList from '../pages/data/carList.page'
// import { carList } from '../pages/data/carList.page'
import carList from '../pages/data/carList.page'


// import { carList } from '../pages/data/carList'

const RideSelector = ({pickUpCoordinates, dropofCoordinates}) => {

   const [rideDuration, setRideDuration] = useState(0)

  //get ride duration from mapbox API
  useEffect((rideDuration) => {
    // template literal
   rideDuration= fetch(`https://api.mapbox.com/directions/v5/mapbox/driving/${pickUpCoordinates[0]},${pickUpCoordinates[1]};${dropofCoordinates[0]},${dropofCoordinates[1]}?access_token=pk.eyJ1IjoiYWluZHJhaWwiLCJhIjoiY2wxZ3gxdXRmMTdnZjNvbG50Y25nZTZ0ciJ9.GNxD2xX5SOb_YC63s9Hiaw`)
    .then(res => res.json())
    .then( data => {
      
      setRideDuration(  data.routes[0].duration / 10) //we did rotes to the routes of {0} as it give multiple rotes to the destination and 0 is the min distance mostly
     }) .catch((e) =>console.log(e))
    
  }, [pickUpCoordinates, dropofCoordinates]) //if the pickup and dropoff ever change it will refresh
  

  return (
    <Wrapper>
       <Title>
           Choose a ride or Swipe up for more
       </Title>
       <CarList>
          {/* It iterates over all the data available in carlist and display like a for each loop */}
           {
           carList.map((car,index)=>(
            <Car key={index}>
            <CarImage src= {car.imgUrl} />
            <CarDetails>
                <Service>
                   {car.service}
                </Service>
                <Time>
                  {/* {console.log(rideDuration)} */}
                   {((rideDuration*10) /60).toFixed(0)+' min away'}
                </Time>
            </CarDetails>
            <Price>
             {'₹ ' + (rideDuration* car.multiplier).toFixed(2)} 
              {/* toFixed to specify the decimal places */}
            </Price>

            </Car>
           ))   
          } 
         
          

       </CarList>
    </Wrapper>
    // <Wrapper>
    //         <Title>Choose a ride, or swipe up for more</Title>
    //         <CarList>
    //             { carList.map((car, index)=>(
    //                 <Car
    //                 key={index}
    //                 >
    //                     <CarImage src={car.imgUrl} />
    //                     <CarDetails>
    //                         <Service>{car.service}</Service>
    //                         <Time>5 min away</Time>
    //                     </CarDetails>
    //                     <Price>rs. 500</Price>
    //                 </Car>
    //             )) }
    //         </CarList>
    //     </Wrapper>
  )
}

export default RideSelector

const Wrapper = tw.div`
 flex-col  flex flex-1  overflow-y-scroll   //this overflow is for only the list of cars and not for the whole page
`
const Title = tw.div`
text-gray-500 text-center text-xs py-2 border-b
`

const CarList = tw.div`
flex-1 overflow-y-scroll  //this is to make only list scroll and not the title
`

const Car = tw.div`
flex p-4 items-center 
`
const CarImage = tw.img`
h-14 mr-4
`
const CarDetails = tw.div`
 flex-1 
`
const Service = tw.div`
font-medium text-lg
`
const Time = tw.div`
text-small text-blue-500 
`
const Price = tw.div`
text-lg font-medium
`