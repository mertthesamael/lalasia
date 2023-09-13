"use client"
import { orderHandler } from '@/actions/order';
import PrimaryButton from '@/components/Buttons/PrimaryButton';
import BasketCard from '@/components/Cards/BasketCard';
import { postBasket } from '@/libs/endpoints';
import { useUserStore } from '@/store/useUserStore';
import axios from 'axios';
import { useRouter } from 'next/navigation';
import React, { FC } from 'react'

interface BasketItemsProps {

}

const BasketItems: FC<BasketItemsProps> = ({  }) => {
    const { user,handleUser } = useUserStore()
    const router = useRouter()
    const removeBasketItems = async() => {
        const {data} = await axios.post(postBasket,{action:'wipe',user:user})
        if(data){
            handleUser(data.result)
        }
      }
    if(user?.basket.length===0){
        return(
            <div className='w-full  h-[25rem] flex flex-col items-center gap-10 text-center'>
                <h1 className='text-black w-[50rem] text-2xl md:text-6xl font-bold'>You Have Not Selected Any Products Yet!</h1>
                <PrimaryButton text='Go Shopping!' className='!font-bold' onClick={() => router.push('/products')}/>

            </div>
        )
    }
    const order = async() => {
        const updatedUser = await orderHandler(user)
        if(updatedUser){
            handleUser(updatedUser)
        }
    }
    return (
    <div className='w-full gap-6 flex flex-col h-max'>
        <div>
            <h1 className='text-2xl text-black font-bold'>Your Basket</h1>
        </div>
        <div className='flex flex-wrap justify-between self-start'>
        {user?.basket.map((el,_i) => (
            <BasketCard item={el} />
            ))}
        </div>
        <div className='flex gap-2'>
            <h1 className='text-lg text-textColor font-bold'>Total</h1>
            <span className='text-2xl text-black font-bold'>${user?.totalPrice}</span>
        </div>
        <div className='flex gap-2'>
            <form action={order}>
           <PrimaryButton text='Confirm Fake Order' type='submit' className='font-semibold'/>
            </form>
            <PrimaryButton onClick={()=> removeBasketItems()} text='Remove All Products' className='font-semibold !bg-secondaryColor !w-max'/>
        </div>
    
    </div>
  )
}

export default BasketItems;