"use client"

import { BlogNewsType } from '@/app/types/interfaces'
import Image from 'next/image'
import React from 'react'

const OurBlog = () => {
    const blogNews: BlogNewsType[] = [
        {
            id: 1,
            image: "/news/tabletBottleFull.png",
            title: "The Covid-19 Epidemic In 2022",
            date: "20 apr"
        },
        {
            id: 2,
            image: "/news/halfHand.png",
            title: "The Covid-19 Epidemic In 2022",
            date: "20 apr"
        },
        {
            id: 3,
            image: "/news/halfBottle.png",
            title: "The Covid-19 Epidemic In 2022",
            date: "20 apr"
        },
        {
            id: 4,
            image: "/news/tabletOnHandFull.png",
            title: "The Covid-19 Epidemic In 2022",
            date: ""
        },
        {
            id: 5,
            image: "/news/tabletBottleFull.png",
            title: "The Covid-19 Epidemic In 2022",
            date: "20 apr"
        },
        {
            id: 6,
            image: "/news/halfHand.png",
            title: "The Covid-19 Epidemic In 2022",
            date: "20 apr"
        },
        {
            id: 7,
            image: "/news/halfBottle.png",
            title: "The Covid-19 Epidemic In 2022",
            date: "20 apr"
        },
        {
            id: 8,
            image: "/news/tabletOnHandFull.png",
            title: "The Covid-19 Epidemic In 2022",
            date: "17 apr"
        },
    ]

    return (

        // style={{
        //     margin: "0 auto",
        //     maxWidth: "60rem",
        //     display: "grid",
        //     gridTemplateColumns: "repeat(4,1fr)",
        //     gridTemplateRows: "masonry",
        //     gap: "1rem"
        // }}
        <div className=" px-4 lg:px-16">
            <div className='grid gap-3 place-items-center mb-12'>
                <span className='font-semibold  uppercase'>our blog</span>
                <span className='capitalize text-3xl md:text-5xl font-semibold text-[#17414F]'>latest news</span>
            </div>
            <div className=" columns-1 sm:columns-2 md:columns-3 lg:columns-4 "

            >
                {blogNews.map((item, index) => (
                    <div
                        key={index}
                        className={`relative w-full ${index === 0 || index === 2 || index === 5 || index === 7
                            ? "h-fit" // 1st, 3rd, 6th, 8th images [500px]
                            : "h-fit" // 2nd, 4th, 5th, 7th images [230px]
                            }  rounded-lg shadow-lg mb-3`}
                    >
                        <Image
                            src={`${item.image}`}
                            alt={item.title}
                            className="w-full h-full object-cover"
                            loading='lazy'
                            width={400}
                            height={400}
                        />

                        {/* Text Overlay  */}
                        <div className="absolute inset-0 bg-black bg-opacity-30 flex flex-col justify-between">
                            <div className='border-2'>
                                <span className={item.date === "" ? "bg-transparent" : "w-20 text-center bg-[#003569] font-medium uppercase text-white text-sm px-2 py-1 rounded-r-lg right-[360px] md:right-0 lg:right-[260px]  absolute top-5"}>
                                    {item.date}
                                </span>
                            </div>
                            <p className="text-white text-lg font-semibold absolute  top-16 w-full text-center">
                                {item.title}
                            </p>
                        </div>
                    </div>
                ))}
            </div>
        </div>


    )
}

export default OurBlog
