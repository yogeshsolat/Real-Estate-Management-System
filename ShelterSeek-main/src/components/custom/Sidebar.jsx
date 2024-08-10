import React, { useEffect, useState } from 'react'
import { PropDet } from '@/data/Data'

import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion"

import { Button } from '../ui/button'
import { Link } from 'react-router-dom'


const applyFilter =(city) => {

    console.log(city);

}



const Sidebar = ({setCity}) => {

    const [cities,setCities] = useState([]);
    let cc=[]
    useEffect(()=>{
        for(let c of PropDet){
            if(!cc.includes(c.city)){
                cc.push(c.city)
            }
        }
        setCities(cc);
    },[])

    return (
        <div className='border transition-all ease-linear flex flex-col h-screen gap-2 p-2 w-80  shadow-2xl'>

            <h1 className='text-white font-bold text-center text-xl bg-black mt-2 f'>FILTERS</h1>

            <Accordion type="single" collapsible className=''>
                <AccordionItem value="item-1">
                    <AccordionTrigger className='font-semibold'>CITY</AccordionTrigger>
                    {

                        cities.map((city,ind) => (
                            <AccordionContent key={ind}>
                                <Link className=' flex  hover:underline justify-center text-xl font-semibold items-center' onClick={()=>setCity(city)}> {city} </Link>
                            </AccordionContent>
                        ))
                    }
                </AccordionItem>
            </Accordion>

        </div>

    )
}

export default Sidebar
