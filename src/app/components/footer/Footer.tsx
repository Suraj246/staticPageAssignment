import Image from 'next/image'
import React from 'react'

const Footer = () => {
    const contactDetails = [
        {
            image: "/footer/phone.png",
            name: "phone number",
            contact: 352435345
        },
        {
            image: "/footer/email.png",
            name: "email address",
            contact: 352435345
        },
        {
            image: "/footer/location.png",
            name: "office location",
            contact: 352435345
        },
    ]
    return (
        <footer className='grid place-items-center py-6 bg-[#17414F] mt-4'>
            <div className='grid grid-cols-1 gap-10 md:grid-cols-3 '>
                {
                    contactDetails.map((item, idx) => {
                        return (
                            <div key={idx} className='flex justify-center items-center gap-8  bg-[#215D72] w-96 h-24 text-sm'>
                                <Image src={item.image} alt={item.name} width={100} height={100}
                                    className='w-14 h-14'
                                    loading="lazy"
                                />
                                <div className='grid text-white capitalize'>
                                    <span className=' lg:text-xl'>{item.name}</span>
                                    <span className='lg:text-xl font-medium'>{item.contact}</span>
                                </div>
                            </div>
                        )
                    })
                }


            </div>
            <div className='flex gap-8 justify-start items-center w-full lg:w-[1230px] pt-10'>
                <Image src="/companyLogo.png" alt="logo" width={800} height={100}
                    className='w-96 h-16'
                    loading="lazy"

                />
                <div className='w-96'>
                    <p className='w-full text-white text-sm'>Your health, physical and emotional well-being is important to us. We are always by your side and have made it even easier for you to find the necessary vitamins.</p>

                </div>
            </div>
            <div className='flex gap-2 justify-start items-center  w-full lg:w-[1230px] pt-4'>
                <Image src="/footer/small.png" alt="logo" width={800} height={100}
                    className='w-4 h-4'
                    loading="lazy"

                />
                <span className='text-white text-sm'>Elbrit Life Sciences Private Limited. C20, BKC, G Block, Mumbai 400051</span>
            </div>
        </footer>
    )
}

export default Footer
