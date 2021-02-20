import React from 'react';
import './Filter.css'
import {Form} from 'react-bootstrap';
const FilterByName = ({inputSearch, setInputSearch}) => {
    const handleChange =(e) =>{
        setInputSearch(e.target.value);
    }
    return (
               <div>
                    <Form.Control type="text" placeholder="Enter movie name ..."
                        className="inputFilter" onChange={handleChange} inputSearch={inputSearch}
                        
                    />

                </div>
    )
}
export default FilterByName;
