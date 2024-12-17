import React, { useState } from 'react'
import { ArrowBackOutline } from 'react-ionicons'
import { Link } from 'react-router-dom'


function Auth({ register }) {
    const registerForm = register ? true : false
    const [userData, setUserData] = useState({
        username: "",
        email: "",
        password: "",
        phone: "",
    })
    console.log(userData)

  return (
      <>
          <div className="grid grid-cols-8 ms-2 gap-2 mt-6">
              {/* First Column */}
              <Link to={"/"}>
              <button className='bg-red-600 rounded-md text-white font-bold py-72  flex'>
                  <ArrowBackOutline
                      color={'#fafafa'}
                      shake 
                      height="60px"
                      width="50px"
                  />
                  <span className='text-2xl ms-3 lg,md:hidden p-3'>Home</span>
                  </button>
                  </Link>

  {/* Second Column */}
              <div className="col-span-6">
                  <h1 className='text-center font-bold text-3xl text-blue-900'>Meriya Flames</h1>
                  {/* form */}
                  <form>
                      {registerForm ?
                          <>
                              <div class="max-w-md mx-auto mt-11">
                                  <div class="relative z-0 w-full mb-5 group">
                                      <div class="relative z-0 w-full mb-5 group">
                                          <input type="text" name="floating_first_name" id="floating_first_name" class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-black dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required value={userData.username} onChange={(e) => setUserData({ ...userData, username: e.target.value })} />
                                          <label for="floating_first_name" class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Full name</label>
                                      </div>
                                  </div>
                                  <div class="grid md:grid-cols-2 md:gap-6">
                                      <div class="relative z-0 w-full mb-5 group">
                                          <input type="tel" pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}" name="floating_phone" id="floating_phone" class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-black dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required value={userData.phone} onChange={(e) => setUserData({ ...userData, phone: e.target.value })} />
                                          <label for="floating_phone" class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Phone number (123-456-7890)</label>
                                      </div>
                                  </div>
                              </div>
                      
                          </>
                          : ""}
                          <div class="max-w-md mx-auto mt-11">
                              
                          
                          <div class="relative z-0 w-full mb-5 group">
                              <input type="email" name="floating_email" id="floating_email" class="block py-2.5 px-0 w-full text-xl text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-black dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required value={userData.email} onChange={(e)=>setUserData({...userData, email:e.target.value})}/>
                              <label for="floating_email" class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Email address</label>
                          </div>
                          <div class="relative z-0 w-full mb-5 group">
                              <input type="password" name="floating_password" id="floating_password" class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-black dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required value={userData.password} onChange={(e)=>setUserData({...userData, password:e.target.value})}/>
                              <label for="floating_password" class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Password</label>
                          </div>
                              <div class="flex items-start mb-5">
                                  <div class="flex items-center h-5">
                                  <input id="terms" type="checkbox" value="" class="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800" required />
                                  </div>
                                  <label for="terms" class="ms-2 text-sm font-medium text-gray-900 dark:text-black">I agree with the <a href="#" class="text-blue-600 hover:underline dark:text-blue-500">terms and conditions</a></label>
                                </div>
              </div>
                  {registerForm ?
                      
                        <div className='text-center mt-11'>
                       <button type="submit" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Register new account</button>
                        <p className='mt-3 text-l'>already a user ? click here to <Link to={"/login"} className='hover:bg-red-600 hover:rounded p-2 font-bold' style={{textDecoration:"none"}}>LOGIN</Link></p>
                        </div> :
                        <div className='text-center mt-11'>
                         <button type="submit" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Submit</button>
                        <p className='mt-3 text-l'>Not registered yet ? click here to <Link to={"/register"} className='hover:bg-red-600 p-2 rounded font-bold' style={{textDecoration:"none"}}>REGISTER</Link></p>
                        </div>
                      }
                      </form>
              </div>
            
          </div>
          
      </>
  )
}

export default Auth