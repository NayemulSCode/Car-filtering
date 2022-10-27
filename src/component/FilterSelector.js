import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux';
import { tagRemoved, tagSelected } from '../features/filter/filterSlice';
import { useCars, useCitys, useColors } from '../hooks/FilterData';

const FilterSelector = () => {
    const dispatch = useDispatch()
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
    // making query url 
    function updateQueryStringParameter(uri, key, value) {
        var re = new RegExp("([?&])" + key + "=.*?(&|$)", "i");
        var separator = uri.indexOf('?') !== -1 ? "&" : "?";
        if (uri.match(re)) {
            return uri.concat( "&" + key + "=" + value);
        }
        else {
            return uri + separator + key + "=" + value;
        }
    }
    useEffect(()=>{
        let origin = new URL(document.location).origin
        window.history.replaceState("", "", origin)
    },[])
    function removeQueryStringParameter(uri, key, value) {
        var newurl = uri.replace(`&${key}=${value}`, "") ;
        window.history.replaceState("", "", newurl)
        console.log("uri", newurl)
    }
    
    const handleQuerySearchParams=(e,type)=>{
        const { checked, value } = e.target;
        if (checked) {
            let newUrl = updateQueryStringParameter(window.location.href, type, value.toLowerCase())
            window.history.pushState("","",newUrl);
        }
        if (!checked) {
            removeQueryStringParameter(window.location.href, type, value.toLowerCase())
            // window.history.back();
        }
    }
    if(cars){
        carsContent = cars.map((car, index)=>(
            <ul key={index} className="list-group mb-2 ">
                <li className="list-group-item">
                    <input className="form-check-input me-1" type="checkbox" 
                        onClick={(e)=> {
                            handleSelectTag(e);
                            handleQuerySearchParams(e,"car");
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
                            handleSelectTag(e);
                            handleQuerySearchParams(e, "city");
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
                            handleSelectTag(e);
                            handleQuerySearchParams(e, "color");
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