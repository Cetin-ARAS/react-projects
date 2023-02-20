import React from 'react'
import { AiOutlineClose } from "react-icons/ai"
import { useDispatch } from 'react-redux'

const Card = () => {
    const dispatch = useDispatch()
  return (
    <div className='w-1/3 h-full border fixed top-0 right-0 z-50 bg-white py-4 mt-10'>
      <div className='flex items-center h-20 justify-between'>
        <h1 className='text-2xl'>SEPETİM</h1>
       <AiOutlineClose onClick={()=>dispatch({type: 'DRAWER', payload: false})} size={25} className="cursor-pointer"/>
      </div>
        <div className='h-28 flex items-center justify-between  pb-4'>
          <img className='h-24' src="https://www.e-bebek.com/baby-hope-436-uzaktan-kumandali-pembe-akulu-araba-12v-p-bhp-74598#ins_sr=eyJwcm9kdWN0SWQiOiJCSFAtNzQ1OTgifQ==" alt="" />
          <div className='w-44'>
             <div className='font-bold text-sm'>
                Lorem ipsum, dolor sit amet 
             </div>
             <div className='opacity-70 text-xs'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit In veritatis itaque error officiis aut consequatur odio hic excepturi blanditiis commodi
             </div>
             <div className='font-bold text-lg'>999.99 TL</div>
             <div className='bg-red-500 w-20 p-2 text-center text-white rounded-lg cursor-pointer'>Sil</div>
          </div>
        </div>
        <div className='h-28 flex items-center justify-between  py-4 mt-10'>
          <img className='h-24' src="https://www.e-bebek.com/baby-hope-436-uzaktan-kumandali-pembe-akulu-araba-12v-p-bhp-74598#ins_sr=eyJwcm9kdWN0SWQiOiJCSFAtNzQ1OTgifQ==" alt="" />
          <div className='w-44'>
             <div className='font-bold text-sm'>
                Lorem ipsum, dolor sit amet 
             </div>
             <div className='opacity-70 text-xs'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit In veritatis itaque error officiis aut consequatur odio hic excepturi blanditiis commodi
             </div>
             <div className='font-bold text-lg'>999.99 TL</div>
             <div className='bg-red-500 w-20 p-2 text-center text-white rounded-lg cursor-pointer'>Sil</div>
          </div>
        </div>
        <div className='h-28 flex items-center justify-between  py-4 mt-10'>
          <img className='h-24' src="https://www.e-bebek.com/baby-hope-436-uzaktan-kumandali-pembe-akulu-araba-12v-p-bhp-74598#ins_sr=eyJwcm9kdWN0SWQiOiJCSFAtNzQ1OTgifQ==" alt="" />
          <div className='w-44'>
             <div className='font-bold text-sm'>
                Lorem ipsum, dolor sit amet 
             </div>
             <div className='opacity-70 text-xs'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit In veritatis itaque error officiis aut consequatur odio hic excepturi blanditiis commodi
             </div>
             <div className='font-bold text-lg'>999.99 TL</div>
             <div className='bg-red-500 w-20 p-2 text-center text-white rounded-lg cursor-pointer'>Sil</div>
          </div>
        </div>

    </div>
  )
}

export default Card
