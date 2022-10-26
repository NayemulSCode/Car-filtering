import { createSlice } from '@reduxjs/toolkit';
import cars from '../../cars.json'
const initialState = {
    tags: [],
    car:[],
}

export const filterSlice = createSlice({
    name: 'filter',
    initialState,
    reducers:{
        tagSelected: (state, action) => {
            if(action.payload !== null){
                state.tags.push(action.payload);
                cars.map((car, index) =>{
                    if (car.cars.includes(action.payload)){
                        state.car.push({ name: car.name, tags: action.payload})
                    }
                    if (car.city.includes(action.payload)){
                        state.car.push({ name: car.name, tags: action.payload })
                    }
                    if (car.color.includes(action.payload)){
                        state.car.push({ name: car.name, tags: action.payload })
                    }
                })
            }
        },
        tagRemoved: (state, action) => {
            const indexToRemove = state.tags.indexOf(action.payload);
            if (indexToRemove !== -1) {
                state.tags.splice(indexToRemove, 1);
            }
            // console.log(JSON.parse(JSON.stringify(state.car)));
            state.car = JSON.parse(JSON.stringify(state.car)).filter((item) => item.tags !== action.payload)
        },
    }
})
export default filterSlice.reducer;
export const { tagSelected, tagRemoved } = filterSlice.actions;

