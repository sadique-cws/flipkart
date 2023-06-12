import Image from 'next/image'
import React from 'react'

const categoryData = [
    {
        id:1,
        title:"Top Offers",
        url:"/category/1.png"
    },
    {
        id:2,
        title:"Mobile & tablets",
        url:"/category/2.png"
    },
    {
        id:3,
        title:"Electronics",
        url:"/category/3.png"
    },
    {
        id:4,
        title:"Tv & Appliances",
        url:"/category/4.png"
    },
    {
        id:5,
        title:"Fashion",
        url:"/category/5.png"
    },
    {
        id:6,
        title:"Beauty",
        url:"/category/6.png"
    },
    {
        id:7,
        title:"Home & Kitchen",
        url:"/category/7.png"
    },
    {
        id:8,
        title:"Furniture",
        url:"/category/8.png"
    },
    {
        id:9,
        title:"Flights",
        url:"/category/9.png"
    },
    {
        id:10,
        title:"Grocery",
        url:"/category/10.png"
    },
]

const Categories = () => {
  return (
    <div className='shadow-sm border bg-slate-50 mb-3'>
        <div className="flex w-10/12 mx-auto justify-center items-center py-3 gap-10">
            {
                categoryData.map((value) => (
                    <div className="flex flex-col text-center items-center">
                        <Image src={value.url} width={70} height={70} className=''/>
                        <h5 className='font-semibold text-sm'>{value.title}</h5>
                    </div>
                ))
            }
        </div>
    </div>
  )
}

export default Categories