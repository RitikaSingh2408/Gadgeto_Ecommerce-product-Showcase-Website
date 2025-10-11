import React, { useEffect } from 'react'
import { getData } from '../context/DataContext'

const Category = () => {
    const {data, fetchAllProducts}= getData()

    const getuniqueCategory = (data, property)=>{
        let  newVal = data?.map((curElem)=>{
            return curElem[property]
        })
         newVal = [...new Set(newVal)]
         return newVal
    }
    const categoryOnlyDate =getuniqueCategory(data, 'category')
    
    

   
  return (
    <div className='bg-[#101829] '>
    <div className='max-w-7xl mx-auto flex gap-5 items-center justify-center py-7 px-4'>
        {
            categoryOnlyDate.map((item,index)=>{
                return <div key={index}>
                <button className='uppercase bg-gradient-to-r from-pink-900 to-purple-900 text-white px-3 py-1 rounded-md cursor-pointer hover:scale-115 duration-500 transition-600'>{item}</button>
                </div>
            })
        }
    </div>
      
    </div>
  )
}

export default Category
