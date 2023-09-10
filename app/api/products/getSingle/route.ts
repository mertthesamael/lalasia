import { prisma } from '@/db/client'
import { createRouteHandlerClient } from '@supabase/auth-helpers-nextjs'
import { cookies } from 'next/headers'
import { NextResponse } from 'next/server'

import type { NextRequest } from 'next/server'


export async function POST(request: NextRequest) {
    const {id} = await request.json()
    try{
        createRouteHandlerClient({cookies})

        const product = await prisma.product.findUnique({
            where: {
              id:Number(id)
            }
          })
          console.log(product, 'TARGET PRODUCT')
      
        return NextResponse.json({data:product})
    }catch(err){
        return NextResponse.error()
    }finally{
        prisma.$disconnect()
    }

}