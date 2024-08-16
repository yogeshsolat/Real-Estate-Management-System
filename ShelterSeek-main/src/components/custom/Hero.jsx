import React from 'react'
import Autoplay from "embla-carousel-autoplay"

import { Card, CardContent } from "@/components/ui/card"
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel"

import img0 from '../../assets/logogif.gif'
import img1 from '../../assets/img1.png'
import img2 from '../../assets/img2.png'
import img3 from '../../assets/img3.jpg'
import img4 from '../../assets/img4.png'
import img5 from '../../assets/city-6.png'

const carouselImages = [img1,img3,img5];

const Hero = () => {

    const plugin = React.useRef(
        Autoplay({ delay: 2000, stopOnInteraction: true })
    )

    return (
        <div>
            <Carousel
                plugins={[plugin.current]}
                className="w-full overflow-hidden p-0"
                onMouseEnter={plugin.current.Autoplay}
                onMouseLeave={plugin.current.Autoplay}
            >
                <CarouselContent className=' border-black'>
                    {carouselImages.map((image, index) => (
                        <CarouselItem key={index}>
                            <div className="p-1">
                                <Card>
                                    <CardContent className="flex sm:h-[800px] items-center justify-center p-6">
                                        {/* <div className="text-4xl font-semibold h-full bg-cover bg-no-repeat bg-top" style={{ backgroundImage: `url(${image})` }}>{index + 1}</div> */}
                                        <img src={image} className='w-full bg-cover'/>
                                    </CardContent>
                                </Card>
                            </div>
                        </CarouselItem>
                    ))}
                </CarouselContent>
                <CarouselPrevious />
                <CarouselNext />
            </Carousel>
        </div>
    )
}

export default Hero
