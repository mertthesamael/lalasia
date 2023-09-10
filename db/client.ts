import { PrismaClient } from "@prisma/client/edge";
import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";



export const prisma = new PrismaClient()
export default () => 
createServerComponentClient({cookies})