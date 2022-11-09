import React, { useState, useEffect } from 'react'

function Country() {
    const [country, setCountry] = useState([]);

    useEffect( ()=>{
        const getCountry = async ()=>{
            const res = await fetch("https://restcountries.com/v2/all");
            const getcon = await res.json();
            console.log(getcon);
            setCountry(getcon);
        }
        getCountry();
    },[]);

  return (
    <div>
       
            <label for="inputState" class="form-label">Country</label>
                <select id="inputState" class="form-select">
                    <option selected>Choose...</option>
                        {
                            country.map( (countryget)=>(
                                <option key={ countryget.alpha2Code }>{ countryget.name }</option>
                            ))
                        }
                        
                </select>
        
    </div>
  )
}

export default Country


/*
import React, { useState, useEffect } from 'react'

export default function Country() {
    const [country, setCountry] = useState([]);

    useEffect( ()=>{
        const getCountry = async ()=>{
          try{
            const res = await fetch("https://restcountries.com/v2/all");
            const getcon = await res.json();
            console.log(getcon);
            setCountry(  getcon);
            }catch(error){
              console.log('An error occured')
              console.log(error)
          }

        }
        getCountry();
    },[]);

  return (
    <div>Country</div>
  )
}
*/