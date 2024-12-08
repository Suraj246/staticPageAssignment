import { FeaturesType } from '@/app/types/interfaces'
import Image from 'next/image'
import React from 'react'

const Features = () => {
    const features: FeaturesType[] = [
        {
            id: 1,
            image: '/heroSectionIcons/cliniclyStudied.png',
            title: 'clinically studied',
            description: 'All products that we offer have undergone lab and safety tests'
        },
        {
            id: 2,
            image: '/heroSectionIcons/vegetarian.png',
            title: 'Vegetarian Friendly',
            description: 'We have a wide selection of vegetarian products to meet your needs'
        },
        {
            id: 3,
            image: '/heroSectionIcons/madeInIndia.png',
            title: 'Made in India',
            description: 'Shop local and explore health products made right here in India'
        },

        {
            id: 4,
            image: '/heroSectionIcons/freeShipping.png',
            title: 'Free shipping',
            description: 'We deliver to your door with no shipping costs on your orders'
        },

        {
            id: 5,
            image: '/heroSectionIcons/noRisk.png',
            title: 'No Risk',
            description: 'We ensure that all products are safe and within their use-by date'
        },
        {
            id: 6,
            image: '/heroSectionIcons/GMO.png',
            title: 'GMO free',
            description: 'Natural, no modified products and derivatives for those who need it'
        },
    ]
    return (
        <div className='grid place-items-center'>
            <div className=' grid place-items-center bg-[#17414F]  w-full lg:w-[80vw] h-[1200] sm:h-[550px] lg:rounded-[100px] relative'>
                <div className=' md:absolute w-fit h-full md:bottom-20 grid place-items-center lg:gap-14 gap-5 grid-cols-1 sm:grid-cols-3  lg:grid-cols-3 rounded-[100px]'>

                    {
                        features.map((item, idx) => {
                            return (
                                <div key={idx} className=' w-full lg:w-80 flex flex-col gap-3 justify-center items-center text-[#17414F] text-center'>
                                    <Image src={item.image} alt={item.title} width={100} height={100}
                                        className='w-14 md:w-24 lg:w-32 lg:h-32'
                                    />
                                    <span className='text-1xl md:text-2xl font-medium text-[#D9D9D9] '>{item.title}</span>
                                    <span className='text-[#D9D9D9] text-sm md:text-base'>{item.description}</span>
                                </div>
                            )
                        })
                    }

                </div>
            </div>
        </div>
    )
}

export default Features
