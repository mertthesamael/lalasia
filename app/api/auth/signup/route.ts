import { createRouteHandlerClient } from '@supabase/auth-helpers-nextjs'
import { cookies } from 'next/headers'
import { NextResponse } from 'next/server'


export const dynamic = 'force-dynamic'

export async function POST(request: Request) {

  const requestUrl = new URL(request.url)
  const formData = await request.formData()
  const email = String(formData.get('email'))
  const password = String(formData.get('password'))
  const supabase = createRouteHandlerClient({ cookies })
  try{

    const {data, error} = await supabase.auth.signUp({
      email,
      password,
     options: {
        emailRedirectTo: `${requestUrl.origin}`,
      },
    })
    
    return NextResponse.json({
      status: 200,
      data:data,
      error:error
    })
  }catch(err){
    console.log(err)
    return NextResponse.json({status:500, msg:err})
  }
}