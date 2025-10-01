import {z} from "zod"

export const signupInput = z.object({
  username: z.string(),
  password:z.string()
})
console.log("happy new year 2026");


export type SignupParams = z.infer<typeof signupInput>

export function isOdd(a:number){
  if(a%2==0){
    return true 
  }else{
    return false
  }
}

export function firstEl(arr :string[]) {
  return arr[0]
}