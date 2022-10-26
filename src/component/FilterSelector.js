import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { tagRemoved, tagSelected } from '../features/filter/filterSlice';
import { useCars, useCitys, useColors } from '../hooks/FilterData';

const FilterSelector = () => {
    const dispatch = useDispatch()
    const selectedTags = useSelector((state) => state.filter);    
    // console.log('selected tages', selectedTags)
    const cars = useCars();
    const citys = useCitys();
    const colors = useColors();
    let carsContent = null;
    let citysContent = null;
    let colorsContent = null;
    const handleSelectTag = (e)=>{
        const { checked, value } = e.target;
            if (checked){
                dispatch(tagSelected(value))
            }
            if(!checked){
                dispatch(tagRemoved(value));
            }
    }
    if(cars){
        carsContent = cars.map((car, index)=>(
            <ul key={index} className="list-group mb-2 ">
                <li className="list-group-item">
                    <input className="form-check-input me-1" type="checkbox" 
                        onClick={(e)=> {
                            handleSelectTag(e)
                        }} value={car} id={car} />
                    <label className="form-check-label box_name" htmlFor={car}>{car}</label>
                </li>
               
            </ul>
        ))
    }
    if(citys){
        citysContent = citys.map((city, index)=>(
            <ul key={index} className="list-group mb-2">
                <li className="list-group-item">
                    <input className="form-check-input me-1" type="checkbox"
                        onClick={(e) => {
                            handleSelectTag(e)
                        }}
                     value={city} id={city} />
                    <label className="form-check-label box_name" htmlFor={city}>{city}</label>
                </li>
               
            </ul>
        ))
    }
    if(colors){
        colorsContent = colors.map((color, index)=>(
            <ul key={index} className="list-group mb-2">
                <li className="list-group-item">
                    <input className="form-check-input me-1" type="checkbox" 
                        onClick={(e) => {
                            handleSelectTag(e)
                        }}
                    value={color} id={color} />
                    <label className="form-check-label box_name" htmlFor={color}>{color}</label>
                </li>
               
            </ul>
        ))
    }
  return (
      <div className='d-flex container mx-auto align-content-between gap-4'>
        <div className=''>
            <h3 className='car_title'>Cars</h3>
            {carsContent}
        </div>
        <div className=''>
            <h3 className='car_title'>Cities</h3>
            {citysContent}
        </div>
        <div className=''>
            <h3 className='car_title'>Colors</h3>
              {colorsContent}
        </div>
    </div>
  )
}

export default FilterSelector