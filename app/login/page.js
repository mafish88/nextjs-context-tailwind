"use client"
import { useContext } from "react"
import { AuthContext } from "@/context/AuthContext"
import { useRouter } from "next/navigation"
const defaultUser = {
  name: 'John Savinosaurus',
  role: 'admin',
}

export default function Login() {
const router = useRouter()

  const { setUser } = useContext(AuthContext)

  const handleLogin = async (e) => {
    e.preventDefault()
    await setUser(defaultUser)
    // TODO: redirect to dashboard
    router.push('/dashboard')
  }

  return (
    <div className='flex flex-wrap w-full'>
      <div className='flex flex-col w-full md:w-1/2'>
        <div className='flex flex-col justify-center px-8 pt-8 my-auto md:justify-start md:pt-0 md:px-24 lg:px-32'>
          <p className='text-3xl text-center'>Welcome.</p>
          <form onSubmit={handleLogin} className='flex flex-col pt-3 md:pt-8'>
            <div className='flex flex-col pt-4'>
              <div className='flex relative '>
                <span className=' inline-flex  items-center px-3 border-t bg-white border-l border-b  border-gray-300 text-gray-500 shadow-sm text-sm'>
                  <svg
                    width={15}
                    height={15}
                    fill='currentColor'
                    viewBox='0 0 1792 1792'
                    xmlns='http://www.w3.org/2000/svg'>
                    <path d='M1792 710v794q0 66-47 113t-113 47h-1472q-66 0-113-47t-47-113v-794q44 49 101 87 362 246 497 345 57 42 92.5 65.5t94.5 48 110 24.5h2q51 0 110-24.5t94.5-48 92.5-65.5q170-123 498-345 57-39 100-87zm0-294q0 79-49 151t-122 123q-376 261-468 325-10 7-42.5 30.5t-54 38-52 32.5-57.5 27-50 9h-2q-23 0-50-9t-57.5-27-52-32.5-54-38-42.5-30.5q-91-64-262-182.5t-205-142.5q-62-42-117-115.5t-55-136.5q0-78 41.5-130t118.5-52h1472q65 0 112.5 47t47.5 113z'></path>
                  </svg>
                </span>
                <input
                  type='text'
                  id='design-login-email'
                  className=' flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent'
                  placeholder='Email'
                />
              </div>
            </div>
            <div className='flex flex-col pt-4 mb-12'>
              <div className='flex relative '>
                <span className=' inline-flex  items-center px-3 border-t bg-white border-l border-b  border-gray-300 text-gray-500 shadow-sm text-sm'>
                  <svg
                    width={15}
                    height={15}
                    fill='currentColor'
                    viewBox='0 0 1792 1792'
                    xmlns='http://www.w3.org/2000/svg'>
                    <path d='M1376 768q40 0 68 28t28 68v576q0 40-28 68t-68 28h-960q-40 0-68-28t-28-68v-576q0-40 28-68t68-28h32v-320q0-185 131.5-316.5t316.5-131.5 316.5 131.5 131.5 316.5q0 26-19 45t-45 19h-64q-26 0-45-19t-19-45q0-106-75-181t-181-75-181 75-75 181v320h736z'></path>
                  </svg>
                </span>
                <input
                  type='password'
                  id='design-login-password'
                  className=' flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent'
                  placeholder='Password'
                />
              </div>
            </div>
            <button
              type='submit'
              className='w-full px-4 py-2 text-base font-semibold text-center text-white transition duration-200 ease-in bg-green-500 shadow-md hover:text-black hover:bg-white focus:outline-none focus:ring-2'>
              <span className='w-full'>Submit</span>
            </button>
          </form>
        </div>
      </div>
      <div className='w-1/2 shadow-2xl'>
        <img className='hidden object-cover w-full h-screen md:block' src='https://www.tailwind-kit.com/images/object/9.jpg' />
      </div>
    </div>
  )
}
