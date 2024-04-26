'use client'
import { z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage
} from '@/components/ui/form'
import { useRouter } from 'next/navigation'

// schema validation for login form

const formSchema = z.object({
  email:  z
  .string()
  .min(1, { message: "Please enter your email to login." })
  .email("This is not a valid email."),
  password: z.string()
})

export function LoginForm () {
  const router = useRouter()
  // form object fields
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: '',
      password: '',
    }
  })

  // form submission
  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    const response = await fetch(`./api/login?email=${values.email}`)
    const { user } = await response.json()
    // router.push("./Dashboard")
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className='space-y-8'>
        <FormField
          control={form.control}
          name='email'
          render={({ field }) => (
            <FormItem>              
              <FormControl>
              <Input type='email' className='mt-6' title='Email' {...field}/>
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
           <FormField
          control={form.control}
          name='password'
          render={({ field }) => (
            <FormItem>
              <FormControl>
              <Input type='password' className='mt-6' title='Password' {...field}/>
              </FormControl>                   
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type='submit' className='w-full mt-6 text-white'>Login</Button>
      </form>
    </Form>
  )
}
