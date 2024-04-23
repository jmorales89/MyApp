import Image from 'next/image'
import logo from '../../../public/logo.png'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'

export default function Login () {
  return (
    <>
      <div className='grid grid-cols-2 h-full justify-items-center content-center'>
        <div className='  w-1/2 '>
          <div className='flex justify-center'>
            <Image
              src={logo}
              width={100}
              height={120}
              alt='Picture of the author'
            />
            <div className='pt-10'>
            <h1 className='login-title [text-shadow:_0_3px_0_rgb(0_0_0_/_10%)] font-bold text-primary text-4xl'>Software Name</h1>
            </div>
          </div>
          <Input className='mt-6' title='Email' />
          <Input className='mt-6' title='Password' />
          <div className='mt-3'>By loggin in you are agreeing to our <span className='text-secondary'>terms of service.</span></div>
          <Button className='w-full mt-6 text-white'>Login</Button>
          <div className='text-secondary mt-3'>Forgot Password?</div>
        </div>
        <h1>PlaceHolder</h1>
      </div>
    </>
  )
}
