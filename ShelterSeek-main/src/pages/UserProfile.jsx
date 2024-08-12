import { Button } from '@/components/ui/button'
import React, { useEffect, useState } from 'react'




const UserProfile = () => {

  let [diceValue,setDiceValue] = useState(0); //  const - > reason -> rerender

  useEffect(()=>{
    if(diceValue==7){
      alert("you won!");
    }
  },[diceValue])

  const handleClick=()=>{
    const val = Math.floor(Math.random()*10);
    setDiceValue(val);
  }

  return (
    <div className='h-5/6 bg-yellow-50 grid place-items-center gap-4'>
      <div className='p-4 shadow-xl shadow-lime-400 '>
        {diceValue}
      </div>
      <Button onClick={handleClick}>Roll dice</Button>
     
    </div>
  )


}

export default UserProfile
