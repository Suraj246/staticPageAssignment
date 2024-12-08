import { VitaminListsType } from '@/app/types/interfaces'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const BetterIncredientUI = () => {
    const vitaminLists: VitaminListsType[] = [
        {
            id: 1,
            title: "Vitamin C",
            content: "Vitamin C as ascorbic acid",
            link: "see more",
            image: "/vitamins/vitaminc.png"
        },
        {
            id: 2,
            title: "Vitamin B3",
            content: "Niacin for healthy gut and skin",
            link: "see more",
            image: "/vitamins/vitaminb3.png"
        },
        {
            id: 3,
            title: "Magnesium",
            content: "Boost energy and support muscle function",
            link: "see more",
            image: "/vitamins/magnesium.png"
        },
        {
            id: 4,
            title: "Hyaluronic acid",
            content: "For smooth, supple and soft skin!",
            link: "see more",
            image: "/vitamins/hyaAcid.png"
        },
        {
            id: 5,
            title: "Lactobacillus",
            content: "Invigorate your gut microbiome",
            link: "see more",
            image: "/vitamins/locto.png"
        },

        {
            id: 6,
            title: "",
            content: "",
            link: "",
            image: "/vitamins/half.png"
        },

    ]
    return (
        <div className='p-8 md:p-16 md:w-vw'>
            {/* <div className="grid place-items-center grid-cols-none md:grid-cols-2 md:gap-5"> */}
            <div className="flex gap-5 flex-wrap justify-center lg:justify-start  items-center w-full">
                <div className=' grow w-full lg:w-96 pl-4 md:p-2 h-64 flex flex-col capitalize'>
                    {/* lg:w-5/12 */}
                    <span className='text-base  font-semibold'>ingredients</span>
                    <div className='pt-3'>
                        <h1 className='text-3xl sm:text-5xl  text-[#17414F] font-semibold'>better ingredients</h1>
                        <p className='text-base font-normal text-[#727272] pt-6'>Only the best when you choose products offered on our platform - high-quality ingredients for high quality products! </p>
                    </div>
                </div>
                {vitaminLists.map((item, idx) => (
                    <div key={idx} className=' w-full md:w-auto  md:p-0 '>
                        {
                            item.title === "" ?
                                <div className="w-28 h-60 hidden lg:block">
                                    <Image loading='lazy' src={item.image} alt={item.title} width={300} height={300}
                                        className='w-full h-full'

                                    />
                                </div>
                                :
                                <div className="w-full  relative">
                                    <Image loading='lazy' src={item.image} alt={item.title} width={300} height={300}
                                        className='w-full'

                                    />
                                    <div className=' absolute bottom-0 left-6 flex justify-around flex-col gap-4 h-full'>
                                        <div>
                                            <h3 className='text-[#2D3F59] text-xl md:text-2xl font-semibold break-all'>{item.title}</h3>
                                            {/* <p className='text-[#727272] text-xl text-pretty'>{item.content}</p> */}

                                            <p
                                                className="text-[#727272] md:text-xl text-pretty"
                                                style={{ whiteSpace: "pre-wrap" }}
                                            >
                                                {item.content.replace(/,\s*/g, ",\n")}
                                            </p>


                                        </div>
                                        <div>
                                            <Link href="#" className='uppercase text-base text-[#003569] underline underline-offset-8'>{item.link}</Link>
                                        </div>
                                    </div>
                                </div>
                        }
                    </div >
                ))}
            </div >
        </div >
    )
}

export default BetterIncredientUI
