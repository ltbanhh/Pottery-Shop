import React, {useState} from 'react'
import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'

export function SignUp() {
  const navigate = useNavigate()
  const [showPassword, setShowPassword] = useState(false)

  const togglePasswordVisibility = () => {
    setShowPassword(prev => !prev)
  }

  const handleSubmit = (e) => {
    e.preventDefault()

    const form = e.target
    if (form.checkValidity()) {
      navigate('/login')
    } else {
      form.reportValidity()
    }
  }

  return (
    <section className="bg-gradient-to-r from-[#F8DBA4] to-[#E09082] min-h-screen flex items-center justify-center">
        <div className="bg-white/50 backdrop-blur-3xl ring-1 ring-black/5 flex rounded-2xl shadow-lg max-w-3xl p-5 items-center">
            <div className="md:block hidden w-1/2">
                <img className="rounded-2xl" src="https://file.hstatic.net/1000217270/article/gom_bat_trang_21_604c7f48e7f74a99a1bfc808bff191b2_grande.jpeg"/>
            </div>

            <div className="md:w-1/2 px-8 md:px-8">
                <h2 className="text-center font-bold text-2xl text-[#894A2A]">Sign Up</h2>

                <form onSubmit={handleSubmit} className="flex flex-col gap-2">
                    <div className='flex flex-col gap-1 mt-2'>
                        <label className="font-bold text-sm" htmlFor="username">User name</label>
                        <input className="p-1 rounded-md px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-[#894A2A] focus:outline-2 focus:-outline-offset-2 focus:outline-[#894A2A] sm:text-sm/6" type="text" name="username" required/>
                    </div>
                    <div className='flex flex-col gap-1'>
                        <label className="font-bold text-sm" htmlFor="email">Email</label>
                        <input className="p-1 rounded-md px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-[#894A2A] focus:outline-2 focus:-outline-offset-2 focus:outline-[#894A2A] sm:text-sm/6" type="email" name="username" required/>
                    </div>
                    <div className='flex flex-col gap-1'>
                        <label className="font-bold text-sm" htmlFor="phonenumber">Phone number</label>
                        <input className="p-1 rounded-md px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-[#894A2A] focus:outline-2 focus:-outline-offset-2 focus:outline-[#894A2A] sm:text-sm/6" type="text" name="phonenumber" required/>
                    </div>
                    
                    <div className="relative flex flex-col gap-1">
                        <label className="font-bold text-sm" htmlFor="password">Password</label>
                        <input className="p-1 rounded-md px-3 pr-10 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-[#894A2A] focus:outline-2 focus:-outline-offset-2 focus:outline-[#894A2A] sm:text-sm/6" 
                            type={showPassword ? "text" : "password"} 
                            name="password" 
                            required minLength={6}
                        />
                            <button type="button" onClick={togglePasswordVisibility}>
                                {showPassword ?
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-eye absolute right-3 -translate-y-7.5" viewBox="0 0 16 16">
                                    <path d="M16 8s-3-5.5-8-5.5S0 8 0 8s3 5.5 8 5.5S16 8 16 8zM1.173 8a13.133 13.133 0 0 1 1.66-2.043C4.12 4.668 5.88 3.5 8 3.5c2.12 0 3.879 1.168 5.168 2.457A13.133 13.133 0 0 1 14.828 8c-.058.087-.122.183-.195.288-.335.48-.83 1.12-1.465 1.755C11.879 11.332 10.119 12.5 8 12.5c-2.12 0-3.879-1.168-5.168-2.457A13.134 13.134 0 0 1 1.172 8z" />
                                    <path d="M8 5.5a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5zM4.5 8a3.5 3.5 0 1 1 7 0 3.5 3.5 0 0 1-7 0z" />
                                </svg>
                                :
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="gray" class="bi bi-eye-slash absolute right-3 -translate-y-7.5" viewBox="0 0 16 16">
                                    <path d="M13.359 11.238C15.06 9.72 16 8 16 8s-3-5.5-8-5.5a7 7 0 0 0-2.79.588l.77.771A6 6 0 0 1 8 3.5c2.12 0 3.879 1.168 5.168 2.457A13 13 0 0 1 14.828 8q-.086.13-.195.288c-.335.48-.83 1.12-1.465 1.755q-.247.248-.517.486z"/>
                                    <path d="M11.297 9.176a3.5 3.5 0 0 0-4.474-4.474l.823.823a2.5 2.5 0 0 1 2.829 2.829zm-2.943 1.299.822.822a3.5 3.5 0 0 1-4.474-4.474l.823.823a2.5 2.5 0 0 0 2.829 2.829"/>
                                    <path d="M3.35 5.47q-.27.24-.518.487A13 13 0 0 0 1.172 8l.195.288c.335.48.83 1.12 1.465 1.755C4.121 11.332 5.881 12.5 8 12.5c.716 0 1.39-.133 2.02-.36l.77.772A7 7 0 0 1 8 13.5C3 13.5 0 8 0 8s.939-1.721 2.641-3.238l.708.709zm10.296 8.884-12-12 .708-.708 12 12z"/>
                                </svg>
                                }
                            </button>
                    </div>
                    <button className="bg-gradient-to-r from-[#F2C17D] to-[#A44200] rounded-xl text-white font-semibold mt-2 py-2 hover:scale-105 duration-300">Register</button>
                </form>

                <div className="mt-6 grid grid-cols-3 items-center text-[#9C785F]">
                    <hr className="border-[#9C785F]"/>
                    <p className="text-center text-sm">OR</p>
                    <hr className="border-[#9C785F]"/>
                </div>

                <div className='flex flex-row gap-1'>
                    <Link to='/login' className="border py-2 w-2/5 rounded-xl mt-5 flex justify-center items-center text-sm hover:scale-105 duration-300 text-[#894A2A]">
                        <button >
                            Login
                        </button>
                    </Link>
                    <button className="border py-2 w-3/5 rounded-xl mt-5 flex justify-center items-center text-sm hover:scale-105 duration-300 text-[#894A2A]">
                        <div>
                            <svg className="mr-2.5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" width="25px">
                                <path fill="#FFC107" d="M43.611,20.083H42V20H24v8h11.303c-1.649,4.657-6.08,8-11.303,8c-6.627,0-12-5.373-12-12c0-6.627,5.373-12,12-12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C12.955,4,4,12.955,4,24c0,11.045,8.955,20,20,20c11.045,0,20-8.955,20-20C44,22.659,43.862,21.35,43.611,20.083z" />
                                <path fill="#FF3D00" d="M6.306,14.691l6.571,4.819C14.655,15.108,18.961,12,24,12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C16.318,4,9.656,8.337,6.306,14.691z" />
                                <path fill="#4CAF50" d="M24,44c5.166,0,9.86-1.977,13.409-5.192l-6.19-5.238C29.211,35.091,26.715,36,24,36c-5.202,0-9.619-3.317-11.283-7.946l-6.522,5.025C9.505,39.556,16.227,44,24,44z" />
                                <path fill="#1976D2" d="M43.611,20.083H42V20H24v8h11.303c-0.792,2.237-2.231,4.166-4.087,5.571c0.001-0.001,0.002-0.001,0.003-0.002l6.19,5.238C36.971,39.205,44,34,44,24C44,22.659,43.862,21.35,43.611,20.083z" />
                            </svg>
                        </div>
                        <div>
                        Sign up with Google
                        </div>
                    </button>
                </div>
            </div>
        </div>
    </section>
  )
}