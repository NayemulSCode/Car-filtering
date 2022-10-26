import React from 'react'
import { useSelector } from 'react-redux'
import cars from '../cars.json'
const Home = () => {
    
    const {car:selectedcars, tags} = useSelector((state)=> state.filter)
    let carContent = null;
    let selectedContent = null;
    if(cars){
      carContent =  cars.map((car, index)=>(
          <div key={index} className="card mb-2">
              <div className=" text-center car_filter_box">
                {car.name}
              </div>
          </div>
       )) 
    }
  if (selectedcars){
    selectedContent = selectedcars.map((car, index) => (
        <div key={index} className="card mb-2">
          <div className=" text-center car_filter_box ">
            {car.name}
          </div>
        </div>
      )) 
  }
  return (
      < >
  
      {
        selectedContent.length !==0 ? <> 
          <h2 className='car_title'>Filter Cars</h2>
          {selectedContent}
           </>: <>
           <h2 className='car_title'>Available Cars</h2>
            {carContent}
           </>
      }
        {/* {carContent} */}
      </>
  )
}

export default Home