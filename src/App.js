import React from 'react';
import Home from './component/Home';
import FilterSelector from './component/FilterSelector';

function App() {
  return (
    <div className='bg_body mx-auto '>

    
    <div className='container mx-auto pt-3 '>
      <div className='flex position-relative mb-3 align-content-center justify-content-center text-center'>
      <h2 className='title_name'>Filter with</h2>
      </div>
    <div className="d-flex gap-3 justify-content-center align-content-center">
      <div>
       
        <FilterSelector />
      </div>
      <div>
        <Home />
      </div>
    </div>
    </div>
    </div>
  );
}

export default App;
