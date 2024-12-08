import { VitaminBenefitsType } from '@/app/types/interfaces'
import Image from 'next/image'
import React from 'react'


const HeroSection = () => {
    const vitaminBenefits: VitaminBenefitsType[] = [
        {
            id: 1,
            image: "/heroSectionIcons/vitamins.png",
            title: "Vitamins",
            content: "Increased Vitamins and minerals in your diet",
        },
        {
            id: 2,
            image: "/heroSectionIcons/weightLoss.png",
            title: "Weight Loss",
            content: "Weight Loss Find scientifically proven solutions",
        },
        {
            id: 3,
            image: "/heroSectionIcons/functionalFood.png",
            title: "Functional Foods",
            content: "Functional Foods From protein powers to baby formula",
        },
    ]
    return (
        <div className=' p-4 sm:mx-4 grid pb-[300px] place-items-center bg-[#E2F5FB] '>
            <h1 className='capitalize text-3xl sm:text-5xl md:text-7xl lg:text-9xl sm:pt-6 text-[#003569] font-bold'>essential vitamins</h1>
            <div className='flex gap-14 items-end pt-8 sm:pt-14 flex-wrap md:flex-nowrap pb-1'>
                <div className='flex md:gap-5 md:items-end  md:justify-end w-full' >
                    <div className='flex flex-col gap-5 h-60 w-full md:w-80 lg:w-4/5  justify-center'>
                        <span className='text-[#727272] lg:text-2xl'>Online Medical Supplies</span>
                        <p className='text-[#17414F] text-2xl sm:text-3xl lg:text-4xl font-medium'>Get Your Vitamins <br />
                            & Minerals</p>
                        <button className='w-28 h-10 lg::w-48 lg:h-14 font-semibold bg-[#17414F] text-white  uppercase rounded-full text-center'>explore</button>
                    </div>
                    <div className='relative  sm:block w-full'>
                        <Image src="/heroSectionIcons/curve.png" alt="curve" width={100} height={100}
                            className='w-full md:w-96 h-64 md:h-80 lg:h-96 '
                        />
                        <Image src="/heroSectionIcons/medicineBottle.png" alt="bottle" width={600} height={100}
                            className='w-full h-64 md:h-[350px]  lg:h-[460px] absolute bottom-0 md:bottom-10 right-4'
                        />

                    </div>
                </div>
                <div className=''>
                    {/* <div className='flex gap-5 lg:gap-20 w-full '> */}

                    <div className='flex flex-col gap-5  w-full  md:items-end  md:justify-end'>
                        {
                            vitaminBenefits.map((item, idx) => {
                                return (
                                    <div key={idx} className='w-80 h-20 flex gap-4 items-center justify-center p-2'>
                                        <Image src={item.image} alt={item.title} width={100} height={100}
                                            className='w-14 md:w-[70px] md:h-[70px]'
                                            loading='lazy'

                                        />
                                        <div className='grid gap-1'>
                                            <span className='text-1xl sm:text-2xl font-semibold text-[#17414F]'>{item.title}</span>
                                            <span className='text-[#727272] text-sm'>{item.content}</span>
                                        </div>
                                    </div>
                                )
                            })
                        }
                    </div>
                </div>
            </div>

            <div className='w-full  lg:w-[1100px] flex gap-2 mt-20'>
                <button className='border-2 rounded-full bg-[#b0a8a899] p-3'></button>
                <button className='border-2 rounded-full bg-[#b0a8a899] p-3'></button>
            </div>

        </div>



    )
}

export default HeroSection
