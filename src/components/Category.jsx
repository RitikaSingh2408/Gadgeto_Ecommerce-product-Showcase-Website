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
    <div className='bg-[#101829] dark:bg-gradient-to-r from-[#0f0c29] via-[#302b63] to-[#24243e]'>
    <div className='max-w-7xl mx-auto flex gap-4 items-center justify-around py-7 px-4'>
        {
            categoryOnlyDate.map((item,index)=>{
                return <div key={index}>
                <button className='uppercase bg-gradient-to-r from-pink-900 to-purple-500 text-white px-3 py-1 rounded-md cursor-pointer'>{item}</button>
                </div>
            })
        }
    </div>
      
    </div>
  )
}

export default Category
