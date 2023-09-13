import { createMiddlewareClient } from '@supabase/auth-helpers-nextjs'
import { NextResponse } from 'next/server'

import type { NextRequest } from 'next/server'

export async function middleware(req: NextRequest) {
  const res = NextResponse.next()
  const supabase = createMiddlewareClient({ req, res })
  let session = await supabase.auth.getSession()
  if(session.data.session?.user){
  
    return NextResponse.redirect(new URL('/', req.url))
  }
  return res
}

export const config = {
  matcher:['/auth/login','/auth/signup'],
}