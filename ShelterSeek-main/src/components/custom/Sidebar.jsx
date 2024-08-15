import React, { useEffect, useState } from 'react'
// import { PropDet } from '@/data/Data'

import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion"

import { Button } from '../ui/button'
import { Link } from 'react-router-dom'


const applyFilter =(city,category) => {

    console.log(city);

}



const Sidebar = ({setCity ,setCategory, propDet}) => {

    const [cities,setCities] = useState([]);
    let cc=[]
    useEffect(()=>{
        for(let c of propDet){
            if(!cc.includes(c.propAddress.city)){
                cc.push(c.propAddress.city)
            }
        }
        setCities(cc);
    },[])


    const [categories,setCategories] = useState([]);
    let ccc=[]
    useEffect(()=>{
        for(let c of propDet){
            if(!ccc.includes(c.category)){
                ccc.push(c.category)
            }
        }
        setCategories(ccc);
    },[])

    return (
        <div className='border transition-all ease-linear flex flex-col h-screen gap-2 p-2 w-80  shadow-2xl'>

            <h1 className='text-white font-bold text-center text-xl bg-black mt-2 f'>FILTERS</h1>

            <Accordion type="single" collapsible className=''  >
                <AccordionItem value="item-1" className='' >
                    <AccordionTrigger className='font-semibold'>CITY</AccordionTrigger>
                    {

                        cities.map((city,ind) => (
                            <AccordionContent key={ind}>
                                <Link className=' flex  hover:underline justify-center text-xl font-semibold items-center focus:text-red-600 '  onClick={()=>setCity(city)}> {city} </Link>
                            </AccordionContent>
                        ))
                    }
                </AccordionItem>
            </Accordion>

            <Accordion type="single" collapsible className=''>
                <AccordionItem value="item-1">
                    <AccordionTrigger className='font-semibold'>CATEGORY</AccordionTrigger>
                    {

                        categories.map((category,ind) => (
                            <AccordionContent key={ind}>
                                <Link className=' flex  hover:underline justify-center text-xl font-semibold items-center focus:text-red-600' onClick={()=>setCategory(category)}> {category} </Link>
                            </AccordionContent>
                        ))


                        
                    }

                    
                </AccordionItem>
            </Accordion>

            <Button onClick={()=>{setCategory(undefined) ,setCity(undefined)}} >Reset</Button>

        </div>

    )
}

export default Sidebar
