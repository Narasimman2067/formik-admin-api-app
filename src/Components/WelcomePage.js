import { Button } from '@mui/material'
import React from 'react'
import { useHistory } from 'react-router-dom'
import Base from '../Base/Base'





 export function WelcomePage ()  {
  const history = useHistory();
  return (
    <div>
      <Base>
      <div className='welcome-div'>
        <h1 >welcome to our App</h1>
       
        <nav>
        <div className='color-div'>
         
         <h1>
         please login to view the contents
         </h1>
       
        
         <div className='search'>
         <Button
         size='small'
         onClick={()=>history.push("/Register")} 
         variant="contained" color="primary">
             students login
           </Button>
           
          
          
         </div>
         </div>
    </nav>
   </div>
  
    </Base>
   
   
    
    </div>
    
  
   
    
    
     
  )
}
export default WelcomePage