import Image from 'next/image'
import logo from '../../../public/logo.png'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
import FacebookIcon from '@mui/icons-material/Facebook'
import InstagramIcon from '@mui/icons-material/Instagram'
import XIcon from '@mui/icons-material/X'
import LinkedInIcon from '@mui/icons-material/LinkedIn'

const Login = () => {
  return (
    <>
      <div className='grid grid-cols-2 h-full justify-items-center'>
        <div className='  w-1/2 content-center '>
          <div className='flex '>
            <Image
              src={logo}
              width={100}
              height={120}
              alt='Picture of the author'
            />
            <div className='pt-10'>
              <h1 className='login-title [text-shadow:_2px_3px_0_rgb(0_0_0_/_10%)] font-bold text-primary text-4xl'>
                ABA INFINITY
              </h1>
            </div>
          </div>
          <Input className='mt-6' title='Email' />
          <Input className='mt-6' title='Password' />
          <div className='mt-3'>
            By loggin in you are agreeing to our{' '}
            <span className='text-secondary'>terms of service.</span>
          </div>
          <Button className='w-full mt-6 text-white'>Login</Button>
          <div className='text-secondary mt-3'>Forgot Password?</div>
          <FacebookIcon className='mr-2 mt-3' />
          <InstagramIcon className='mr-2 mt-3' />
          <XIcon className='mr-2 mt-3' />
          <LinkedInIcon className='mr-2 mt-3' />
        </div>

        <div className='bg-primary w-full flex items-center justify-center'>
          <h1 className='text-4xl'>PlaceHolder</h1>
        </div>
      </div>
    </>
  )
}
export default Login
