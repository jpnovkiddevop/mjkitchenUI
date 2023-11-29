import React, {useEffect, useState} from 'react'
import axios from 'axios'

function Fetch() {
    const [customers, setCustomers] = useState(null)
    //fetch data from the api
    useEffect(() => {
        axios.get('http://127.0.0.1:5001/customers')
        .then(res => {
            console.log(res)
            setCustomers(res.data);
        })
        .catch((error)=> {
            console.log(error);
        })
        
        },[])

    
  return (
    <div>
      <h2>mjkitchen weekly top customers </h2>
      {customers === null ? (
        <p>loading...</p>
      ):(
            <ul>
                {customers.map((customer) => {
                    return <li key={customer.id}>
                    {customer.customer}
            </li>
          })}
       </ul>
      )}

    </div>
  )
}

export default Fetch
