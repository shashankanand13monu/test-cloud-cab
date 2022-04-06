export const carList = [
  {
    imgUrl: 'https://i.ibb.co/cyvcpfF/uberx.png',
    service: 'UberX',
    multiplier: 1,
  },
  {
    imgUrl: 'https://i.ibb.co/YDYMKny/uberxl.png',
    service: 'UberXL',
    multiplier: 1.5,
  },
  {
    imgUrl: 'https://i.ibb.co/Xx4G91m/uberblack.png',
    service: 'Black',
    multiplier: 2,
  },
  {
    imgUrl: 'https://i.ibb.co/cyvcpfF/uberx.png',
    service: 'Comfort',
    multiplier: 1.2,
  },
  {
    imgUrl: ' https://i.ibb.co/1nStPWT/uberblacksuv.png',
    service: 'Black SUV',
    multiplier: 2.8,
  }
]

export default () => {
  return (
    <Wrapper>
      <Title>Choose a ride, or swipe up for more</Title>
      <CarList>
        {carList.map((car, index) => (
          <Car
            key={index}
            >
            <CarImage src={car.imgUrl} />
            <CarDetails>
              <Service>{car.service}</Service>
              <Time>5 min away</Time>
            </CarDetails>
            <Price>rs. 500</Price>
          </Car>
        ))}
      </CarList>
    </Wrapper>
  )
}
