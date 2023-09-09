import { prisma } from '@/db/client'
import { NextResponse } from 'next/server'

import type { NextRequest } from 'next/server'


export async function POST(request: NextRequest) {
    const {id} = await request.json()
    console.log(id,'TARGET ID')
    try{

        const product = await prisma.product.findUnique({
            where: {
              id:Number(id)
            }
          })
          console.log(product, 'TARGET PRODUCT')
        // URL to redirect to after sign in process completes
        return NextResponse.json({data:product})
    }catch(err){
        return NextResponse.error()
    }finally{
        prisma.$disconnect()
    }

}