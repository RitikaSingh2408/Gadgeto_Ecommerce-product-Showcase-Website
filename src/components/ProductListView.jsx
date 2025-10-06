import React from 'react'
import { useNavigate } from 'react-router-dom'
import { useCart } from '../context/CartContext'

const ProductListView = () => {
    const navigate =useNavigate()
    const {addToCart} = useCart()
  return (
    <div className='space-y-4 mt-2 rounded-md '>
    <div className='bg-gray-100 flex gap-7 items-center p-2 rounded-md'>
        <img src={Product.image} alt={product.title} className='h-60 w-60 rounded-md cursor-pointer' onClick={()=>navigate('/products/${product.id')}/>
        <div className='space-y-2'>
            <h1 className='font-bold text-xl line-clamp-3 hover:text-pink-700 w-full'>{product.title}</h1>
            <p className='font-semibold flex items-center text-lg'><span className='text-4xl'>{product.price}</span>{Product.discount}% off</p>
             <p className='text-sm'>FREE delivery <span className='font-semibold'>Fri, 18 Apr</span> <br />
          Or fastest delivery <span className='font-semibold'>Tomorrow, 17 Apr</span></p>
          <button onClick={()=>addToCart(product)} className='bg-pink-900 text-white px-3 py-1 rounded-md'>Add to Cart</button>
        </div>
    </div>
      
    </div>
  )
}

export default ProductListView
