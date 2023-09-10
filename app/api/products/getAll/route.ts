import { prisma } from '@/db/client'
import { createRouteHandlerClient } from '@supabase/auth-helpers-nextjs'
import { cookies } from 'next/headers'
import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

export const dynamic = 'force-dynamic'
export async function GET(request: NextRequest) {
    
    try{
        const products = await prisma.product.findMany()
        console.log(products)
        return NextResponse.json({data:products})
    }catch(err){
        return NextResponse.error()
    }finally{
        prisma.$disconnect()

    }

}