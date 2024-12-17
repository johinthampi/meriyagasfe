import React from 'react'
import {Link} from 'react-router-dom'


function HeaderCart() {
  return (
      <>
          <div className='flex mt-5'>
              <div className='bg-red-600 h-10 w-full '>
                  <div className='flex p-2'>
                      <div>
                          <h1 className='font-bold text-white text-xl'>Accessories Shopping</h1>
                      </div>
                      <div className='ms-auto'>
                          <Link>
                              <div className='text-white text-l font-bold'>Add Cart
                              <span class="inline-flex items-center rounded-md bg-red-50 px-3 text-m font-medium text-red-700 ring-1 ring-inset ring-red-600/10 ms-2 mb-2">0</span>
                              </div>
                          </Link>
                          
                      </div>
                  </div>
              </div>
          </div>
      </>
  )
}

export default HeaderCart