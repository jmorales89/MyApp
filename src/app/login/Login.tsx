"use client"
import Image from 'next/image'
import logo from '../../../public/logo.png'
import FacebookIcon from '@mui/icons-material/Facebook'
import InstagramIcon from '@mui/icons-material/Instagram'
import XIcon from '@mui/icons-material/X'
import LinkedInIcon from '@mui/icons-material/LinkedIn'
import { useRouter } from 'next/navigation'
import { LoginForm } from "../../components/custom/loginForm"
import Link from 'next/link'

const Login = () => {
  const router = useRouter()
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
               Software Name
              </h1>
            </div>
          </div>
          <LoginForm/>
          <div className='mt-3'>
            By loggin in you are agreeing to our{' '}
            <span className='text-secondary'>terms of service.</span>
          </div>
          <div className='text-secondary mt-3'>Forgot Password?</div>
          
          <Link target='_blank' href="https://www.facebook.com/profile.php?id=61559106322444">
          <FacebookIcon className='mr-2 mt-3' />
          </Link>
          {/* ::TODO:: change link address when instagram twitter and linkedin are created */}
          
          <Link href="https://www.facebook.com/profile.php?id=61559106322444">
          <InstagramIcon className='mr-2 mt-3' />
          </Link>

          <Link href="https://www.facebook.com/profile.php?id=61559106322444">
          <XIcon className='mr-2 mt-3' />
          </Link>
          
          <Link href="https://www.facebook.com/profile.php?id=61559106322444">
          <LinkedInIcon className='mr-2 mt-3' />
          </Link>
        </div>
        <div className='bg-primary w-full flex items-center justify-center'>
          <h1 className='text-4xl'>PlaceHolder</h1>
        </div>
      </div>
    </>
  )
}
export default Login
