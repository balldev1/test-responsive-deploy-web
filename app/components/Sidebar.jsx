import React from 'react'
import Link from 'next/link'
// {icon}
import { BsFillChatFill } from 'react-icons/bs'
import { FaUser } from 'react-icons/fa'
import { FaShoppingCart } from 'react-icons/fa'
import { GoHomeFill } from 'react-icons/go'
import { AiFillPieChart } from 'react-icons/ai'
import { BiSolidBot } from 'react-icons/bi'
import { FaShippingFast } from 'react-icons/fa'
import { AiFillSetting } from 'react-icons/ai'
import { PiGoogleChromeLogoFill } from 'react-icons/pi'


const Sidebar = ({ children }) => {
    return (
        <div class=" flex justify-center  ">

            <div className=' sm: hidden lg:block lg-hidden h-screen  bg-gradient-to-b from-orange-400  to-orange-200 flex-col justify-between  '>
                <div className='flex flex-col justify mt-20 mr-15 text-white text-sm gap-3 '>
                    <Link href='/' className='gap-2 focus:bg-gradient-to-b from-orange-600 to-orange-500 focus:shadow-md focus:shadow-slate-500 flex  items-center p-2 ml-2 border-none rounded-l-xl'>
                        <BsFillChatFill size={22} />
                        <h2>ข้อความ</h2>
                    </Link>
                    <Link href='/' className='gap-2 focus:bg-gradient-to-b from-orange-600 to-orange-500 focus:shadow-md focus:shadow-slate-500 flex  items-center p-2 ml-2 border-none rounded-l-xl'>
                        <FaUser size={22} />
                        <h2 >เพจและแอดมิน</h2>
                    </Link>
                    <Link href='/' className='gap-2 focus:bg-gradient-to-b from-orange-600 to-orange-500 focus:shadow-md focus:shadow-slate-500 flex items-center p-2 ml-2 border-none rounded-l-xl'>
                        <FaShoppingCart size={22} />
                        <h2>คำสั่งซื้อ</h2>
                    </Link>
                    <Link href='/' className='gap-2 focus:bg-gradient-to-b from-orange-600 to-orange-500 focus:shadow-md focus:shadow-slate-500 flex  items-center p-2 ml-2 border-none rounded-l-xl'>
                        <GoHomeFill size={22} />
                        <h2>คลังสินค้า</h2>
                    </Link>
                    <Link href='/' className='gap-2 focus:bg-gradient-to-b from-orange-600 to-orange-500 focus:shadow-md focus:shadow-slate-500 flex  items-center p-2 ml-2 border-none rounded-l-xl'>
                        <AiFillPieChart size={22} />
                        <h2>รายงาน</h2>
                    </Link>
                    <Link href='/' className='gap-2 focus:bg-gradient-to-b from-orange-600 to-orange-500 focus:shadow-md focus:shadow-slate-500 flex items-center p-2 ml-2 border-none rounded-l-xl'>
                        <BiSolidBot size={22} />
                        <h2>บอท</h2>
                    </Link>
                    <Link href='/' className='gap-2 focus:bg-gradient-to-b from-orange-600 to-orange-500 focus:shadow-md focus:shadow-slate-500 flex items-center p-2 ml-2 border-none rounded-l-xl'>
                        <FaShippingFast size={22} />
                        <h2>ขนส่ง</h2>
                    </Link>
                    <Link href='/' className='gap-2 focus:bg-gradient-to-b from-orange-600 to-orange-500 focus:shadow-md focus:shadow-slate-500 flex  items-center p-2 ml-2 border-none rounded-l-xl'>
                        <AiFillSetting size={22} />
                        <h2>ตั้งค่าระบบ</h2>
                    </Link>
                </div>
            </div>

            <div className='  w-full lg:display-none  '>

                <main >
                    {children}</main>
            </div>
        </div >

    )
}
export default Sidebar
