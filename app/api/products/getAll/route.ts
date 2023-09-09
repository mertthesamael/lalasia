import { prisma } from '@/db/client'
import { NextResponse } from 'next/server'

import type { NextRequest } from 'next/server'


export async function GET(request: NextRequest) {
    try{

        const products = await prisma.product.findMany()
        // URL to redirect to after sign in process completes
        return NextResponse.json({data:products})
    }catch(err){
        return NextResponse.error()
    }finally{
        prisma.$disconnect()
    }

}