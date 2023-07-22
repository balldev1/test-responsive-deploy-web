
import React from 'react'
// {icons}
import { AiFillBell, AiFillClockCircle, AiFillPrinter, AiOutlineCheck } from 'react-icons/ai'
import { BsCheckLg, BsFillBoxFill, BsFillChatDotsFill } from 'react-icons/bs'
import { FaFacebook, FaUserAlt, FaTrashAlt } from 'react-icons/fa'
import { PiPencilSimpleLineFill } from 'react-icons/pi'
import Image from 'next/image';
import { BiSolidNotepad } from 'react-icons/bi'


const Info = () => {

    return (

        <div className='flex flex-col mt-5 ml-8 mr-1'>
            {/* {1 tab} */}
            <div className='md: block md:hidden '>
                <select class="block w-[150px] p-2  rounded-xl border-0 py-1.5 bg-orange-100 text-orange-500 border-none border-orange-200 shadow-sm sm:max-w-xs sm:text-sm sm:leading-6 cursor-pointer">
                    <option>ข้อความ</option>
                    <option>เพจและมิน</option>
                    <option>คลังสินค้า</option>
                    <option>รายงาน</option>
                    <option>บอท</option>
                    <option>ขนส่ง</option>
                    <option>ตั้งค่าระบบ</option>
                </select>
            </div>
            <div className='flex '>
                <div className='relative  top-1 border-b-white'>
                    <ul className='flex flex-rows gap-2 '>
                        <div >
                            <li className='bg-white rounded-t-md shadow-t-md mt-1 p-1  shadow-t-md '>
                                <Image src='/facebook.png' alt='test' width={50} height={50} className='cursor-pointer rounded-full' />
                            </li>
                        </div>
                        <div >
                            <li className='bg-white  rounded-lg mt-1 '>
                                <Image src='/i2.jpg' alt='test' width={50} height={50} className='cursor-pointer rounded-full opacity-50' />
                            </li>
                        </div>
                        <div >
                            <li className='bg-white  rounded-lg mt-1'>
                                <Image src='/i1.jpg' alt='test' width={50} height={50} className='cursor-pointer rounded-full opacity-50' />
                            </li>
                        </div>
                    </ul>
                </div>
                <div className='flex ml-auto mr-5 gap-3 items-center'>
                    <div className='ml-2 mt-2 md:mt-0'>
                        <select class="block w-full p-2  rounded-xl border-0 py-1.5 bg-orange-100 text-orange-500 md:w-[80px] w-[70px] shadow-sm  text-[1px]  sm:max-w-xs sm:text-sm sm:leading-6 cursor-pointer">
                            <option>กลุ่ม A</option>
                            <option>test</option>
                            <option>test</option>
                        </select>
                    </div>
                    <div>
                        <AiFillBell size={25} className='text-orange-500 cursor-pointer' />
                    </div>
                    <div>
                        <Image src='/man.png' alt='test' width={30} height={20} className='cursor-pointer ' />
                    </div>
                </div>
            </div>

            {/* {2 head} */}
            <div className='flex flex-col  gap-5 border-2 bg-white px-1 py-3 mr-2 rounded-md shadow-md shadow-gray-500 '>
                <div className='flex grid grid-cols-3  gap-2 md:flex md:flex-rows text-sm'>
                    <div className='w-[135px]'>
                        <select class="block w-full p-2  rounded-xl border-0 py-1.5 bg-orange-100 text-orange-500 shadow-sm  sm:max-w-xs sm:text-sm sm:leading-6 cursor-pointer ">
                            <option>เพจทั้งหมด</option>
                            <option>test</option>
                            <option>test</option>
                        </select>
                    </div>
                    <div className='w-[135px] sm:w-[130px]'>
                        <select class="block w-full p-2  rounded-xl border-0 py-1.5 bg-orange-100 text-orange-500 border-none border-orange-200 shadow-sm sm:max-w-xs sm:text-sm sm:leading-6 cursor-pointer">
                            <option>แอดมินทั้งหมด</option>
                            <option>test</option>
                            <option>test</option>
                        </select>
                    </div>
                    <div className='flex justify-center'>
                        <input type='date' className=' border-2 rounded-xl md:w-[120px] w-[100px] cursor-pointer' />
                    </div>
                    {/* {2R} */}

                    <div className='flex ml-auto mr-2 gap-2'>
                        <div>
                            <input className='border-2 md:text-md text-sm rounded-xl  w-[70px] sm:w-[300px]' placeholder='🔍 ค้นหาเลขคำสั่งซื้อ,เลขพัสดุ,ชื่อ,เบอร์โทร' />

                        </div>

                        <div>
                            <button className='border-2 bg-orange-400 md:text-white md:text-bold rounded-md text-white md:text-sm text-[1px] md:w-[100px] w-[70px]' >ยืนยันเป็นกลุ่ม</button>
                        </div>
                        <div>
                            <button className='border-2 bg-orange-600 text-white rounded-md  md:text-sm text-[1px]  md:w-[100px] w-[70px] ' >พิมพ์เป็นกลุ่ม</button>
                        </div>
                    </div>
                </div>

                {/* {3 total} */}
                <div className='md:flex md:flex-row flex grid grid-cols-4 gap-8 md:text-lg text-[11px]'>
                    <button href='/' className=' focus:text-orange-500 focus:border-b-2 focus:border-orange-500'>ทั้งหมด</button>
                    <button href='/' className=' focus:text-orange-500 focus:border-b-2 focus:border-orange-500'>ที่ต้องจัดส่ง</button>
                    <button href='/' className=' focus:text-orange-500 focus:border-b-2 focus:border-orange-500'>เตรียมจัดส่ง</button>
                    <button href='/' className=' focus:text-orange-500 focus:border-b-2 focus:border-orange-500'>ส่งแล้ว</button>
                    <button href='/' className=' focus:text-orange-500 focus:border-b-2 focus:border-orange-500'>สำเร็จ</button>
                    <button href='/' className=' focus:text-orange-500 focus:border-b-2 focus:border-orange-500'>ยกเลิก</button>
                    <button href='/' className=' focus:text-orange-500 focus:border-b-2 focus:border-orange-500'>สินค้าตีกลับ</button>
                </div>
                {/* {body1 info1} */}
                {/* // {head} */}
                <div >
                    <div className='md:flex md:flex-row  border-none  p-2 px-1 md:text-sm text-[14px]  bg-slate-100 rounded-t-md 	' >
                        <div className=' grid grid-cols-2  gap-3 flex-row md:flex md:flex-row md:text-sm '>
                            <div>
                                <h1 className='mr-20 md:ml-1 text-orange-600 md:text-sm text-[14px]'>FB21121800008</h1>
                            </div>
                            <div>
                                <h1 className='md:ml-2 ml-2 md:text-sm text-[14px]'>01-05-2565 10:47</h1>
                            </div>
                            <div className='flex'>
                                <FaFacebook size={23} className='text-blue-500 rounded-2xl  ' />
                            </div>
                            <div className='flex border-2 justify-center text-orange-600 border-orange-600 rounded-md w-[100px]' >
                                <h1>ทาสแมวเหมียว</h1>
                            </div>

                            <div className='flex 2xl:ml-20 gap-2'>
                                <AiFillClockCircle size={20} className='text-orange-600   2xl:ml-20' />
                                <h1 className='text-orange-600 md:mr-20 text-[14px]'>รอชำระเงิน</h1>
                            </div>
                            <div className='flex 2xl:ml-20 2xl:gap-2 gap-2 2xl:mr-20'>
                                <FaUserAlt className=' xl:ml-20  ' />
                                <h1 >ณัฐฐา คำเอม</h1>
                            </div>


                        </div>


                        <div className='flex  justify-between flex-row gap-2 cursor-pointer md:ml-auto 2xl:mr-3  md:mt-0 mt-2 md-3'>
                            <BsFillChatDotsFill size={23} className='text-blue-500 ' />
                            <PiPencilSimpleLineFill size={23} />
                            <FaTrashAlt size={23} />
                        </div>

                    </div>
                    {/* {body} */}
                    {/* {product 1} */}
                    <div class="grid md:grid-cols-12 grid-cols-4 gap-2 text-sm text-black font-bold bg-slate-100 rounded-b-md pb-5">
                        <div class="flex flex-col col-span-3 my-2 mx-2 md:ml-4 ml-0 ">
                            <div className='flex flex-rows   '>

                                <div className='mb-2 md:mt-0 mt-2'>
                                    <Image src="/c11.jpg" width={70} height={80} />
                                </div>
                                <div className='flex-cols ml-2 md-text-sm text-[11px] md:mt-0 mt-2 '>
                                    <div>
                                        ASIMPLY ทรายแมวเต้าหู้ ขนาด 6 ลิตร
                                    </div>
                                    <div>
                                        ทิ้งชักโครกได้ (จำกัด 6ถุง/ออเดอร์)
                                    </div>
                                    <div>
                                        <div className='flex border justify-center rounded-xl text-orange-600  bg-orange-100 border-none' style={{ width: '70px' }}>
                                            แป้งเด็ก
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/* //  {product 2}  */}
                            <div className='flex flex-rows  '>
                                <div>
                                    <Image src="/c2.jpg" width={70} height={80} className='mb-2' />
                                </div>
                                <div className='ml-2 '>
                                    <div>
                                        ASIMPLY ทรายแมวเต้าหู้ ขนาด 6 ลิตร
                                    </div>
                                    <div>
                                        ทิ้งชักโครกได้ (จำกัด 6ถุง/ออเดอร์)
                                    </div>
                                    <div>
                                        <div className='flex border justify-center rounded-xl text-orange-600  bg-orange-100 border-none' style={{ width: '70px' }}>
                                            แป้งเด็ก
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/* {product 3} */}
                            <div className='flex flex-rows  '>
                                <div>
                                    <Image src="/c3.jpg" width={70} height={80} className='' />
                                </div>
                                <div className='ml-2 '>
                                    <div>
                                        ASIMPLY ทรายแมวเต้าหู้ ขนาด 6 ลิตร
                                    </div>
                                    <div>
                                        ทิ้งชักโครกได้ (จำกัด 6ถุง/ออเดอร์)
                                    </div>
                                    <div>
                                        <div className='flex border justify-center rounded-xl text-orange-600  bg-orange-100 border-none' style={{ width: '70px' }}>
                                            แป้งเด็ก
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* {amount} */}
                        <div class=" border-l border-r border-slate-300">
                            <div className='flex flex-col justify-center items-center'>
                                <div className='text-slate-500'>
                                    จำนวน
                                </div>
                                <div>
                                    3
                                </div>
                                <div className='mt-14'>
                                    1
                                </div>
                                <div className='mt-20'>
                                    2
                                </div>
                            </div>
                        </div>
                        {/* {location} */}
                        <div class="col-span-2 ">
                            <h1>
                                พจีศรี ฉันศิริวรรณ<br />
                                100 ตรอกช่างทอง ถนนตะนาว<br />
                                แขวงศาลเจ้าพ่อเสือ เขตพระนคร<br />
                                กรุงเทพ 10200 เขตพระนคร<br />
                                จังหวัดกรุงเทพมหานคร 10200<br />
                            </h1>
                        </div>
                        {/* {phone} */}
                        <div className="md:border-l md:border-r border-slate-300 md:ml-0 ">
                            <div className='md:flex md:flex-col md:justify-center md:items-center md:ml-0 ml-15 md:text-sm  '>
                                0861683229
                            </div>
                        </div>
                        {/* {total} */}
                        <div class="col-span-2  border-r border-slate-300 ">
                            <div className='flex flex-col '>
                                <div className='flex flex-row justify-between mx-2 text-slate-500'>
                                    <div>
                                        ค่าส่ง
                                    </div>
                                    <div>
                                        ยอดรวม
                                    </div>
                                </div>
                                <div className='flex flex-row justify-between mx-4'>
                                    <div>
                                        60
                                    </div>
                                    <div>
                                        870
                                    </div>
                                </div>
                                <div className='flex flex-cols justify-center items-center mt-20 text-slate-500'>
                                    ช่องทางการชำระเงิน : <br />
                                    โอนเงินผ่านบัญชีธนาคาร
                                </div>
                            </div>


                        </div>

                        <div class="flex flex-col  col-span-2  text-slate-500 ">
                            <div className='flex flex-row justify-between ml- '>
                                <div>
                                    ค่าส่ง
                                </div>
                                <div>
                                    เลขพัสดุ
                                </div>
                            </div>
                        </div>
                    </div>
                </div>



                {/* {body2} */}
                {/* // {head} */}
                {/* / */}
                {/* {body2} */}
                {/* // {head} */}
                <div >
                    <div className='md:flex md:flex-row  border-none  p-2 px-1 md:text-sm text-[14px]  rounded-t-md 	' >
                        <div className=' grid grid-cols-2  gap-3 flex-row md:flex md:flex-row md:text-sm '>
                            <div>
                                <h1 className='mr-20 md:ml-1 text-orange-600 md:text-sm text-[14px]'>FB21121800008</h1>
                            </div>
                            <div>
                                <h1 className='md:ml-2 ml-2 md:text-sm text-[14px]'>01-05-2565 10:47</h1>
                            </div>
                            <div className='flex'>
                                <FaFacebook size={23} className='text-blue-500 rounded-2xl  ' />
                            </div>
                            <div className='flex border-2 justify-center text-orange-600 border-orange-600 rounded-md w-[100px]' >
                                <h1>ผิวสวยหน้าใส</h1>
                            </div>

                            <div className='flex 2xl:ml-20 gap-2'>
                                <BiSolidNotepad size={20} className='text-orange-600   2xl:ml-20' />
                                <h1 className='text-orange-600 md:mr-20 text-[14px]'>ที่ต้องจัดส่ง</h1>
                            </div>
                            <div className='flex 2xl:ml-20 2xl:gap-2 gap-2 2xl:mr-20'>
                                <FaUserAlt className=' xl:ml-20  ' />
                                <h1 >ศิริขวัญ จริยา</h1>
                            </div>


                        </div>


                        <div className='flex  justify-between flex-row gap-2 cursor-pointer md:ml-auto 2xl:mr-3  md:mt-0 mt-2 md-3'>
                            <button className='border-2 border-none  bg-orange-600 text-white rounded-md md:p-1 md:w-[95px w-[70px] ' >ยืนยันคำสั่งซื้อ</button>
                            <BsFillChatDotsFill size={23} className='text-blue-500 ' />
                            <AiFillPrinter size={23} />
                            <FaTrashAlt size={23} />
                        </div>

                    </div>
                    {/* {body} */}
                    {/* {product 2} */}
                    <div class="grid md:grid-cols-12 grid-cols-4 gap-2 text-sm text-black font-bold rounded-b-md pb-5">
                        <div class="flex flex-col col-span-3 my-2 mx-2 ml-4 ">
                            <div className='flex flex-rows   '>
                                <div>
                                    <Image src="/co1.jpg" width={70} height={80} className='mb-2' />
                                </div>
                                <div className='flex-cols ml-2 '>
                                    <div>
                                        Hitomi คอลลาเจน ผสมวิตามินซี
                                    </div>
                                    <div>
                                        เซราไมด์ และมีคิวเท็น ขนาด 110,000 มก
                                    </div>

                                </div>
                            </div>
                            {/* {prroduct 2} */}
                            <div className='flex flex-rows  '>
                                <div>
                                    <Image src="/co2.jpg" width={70} height={80} className='mb-2' />
                                </div>
                                <div className='ml-2 '>
                                    <div>
                                        AliGen คอลลาเจนเพียว ไตรเปปไทด์
                                    </div>
                                    <div>
                                        ชนิดเม็ด 60,000 มก. 60เม็ด
                                    </div>
                                </div>
                            </div>

                        </div>
                        {/* {amount} */}
                        <div class=" border-l border-r border-slate-300">
                            <div className='flex flex-col justify-center items-center'>
                                <div className='text-slate-500'>
                                    จำนวน
                                </div>
                                <div>
                                    5
                                </div>
                                <div className='mt-14'>
                                    3
                                </div>
                            </div>
                        </div>
                        {/* {location} */}
                        <div class="col-span-2 ">
                            <h1>
                                ธนิดา ศรีสุวรรณ<br />
                                48/90 ถ.นิมิตใหม่ ซ.นิมิตใหม่40<br />
                                หมู่บ้านเค.ซี.การเด้นโฮม (โฮม9)<br />
                                แขวงสามวาตะวันตก<br />
                                เขตคลองสามวา กทม 10510<br />
                            </h1>
                        </div>
                        {/* {phone} */}
                        <div className="md:border-l md:border-r border-slate-300 md:ml-0 ">
                            <div className='md:flex md:flex-col md:justify-center md:items-center md:ml-0 ml-15 md:text-sm  '>
                                0969166690
                            </div>
                        </div>
                        {/* {total} */}
                        <div class="col-span-2  border-r border-slate-300 ">
                            <div className='flex flex-col '>
                                <div className='flex flex-row justify-between mx-2 text-slate-500'>
                                    <div>
                                        ค่าส่ง
                                    </div>
                                    <div>
                                        ยอดรวม
                                    </div>
                                </div>
                                <div className='flex flex-row justify-between mx-4'>
                                    <div>
                                        60
                                    </div>
                                    <div>
                                        1152
                                    </div>
                                </div>
                                <div className='flex flex-cols justify-center items-center mt-20 text-slate-500'>
                                    ช่องทางการชำระเงิน : <br />
                                    Qr Code
                                </div>
                            </div>


                        </div>

                        <div class="flex flex-col  col-span-2   ">
                            <div className='grid grid-cols-2'>
                                <div className='text-slate-500'>
                                    ขนส่ง
                                </div>
                                <div className='text-slate-500'>
                                    เลขพัสดุ
                                </div>
                                <div >
                                    Mv 945,me
                                </div>

                            </div>
                        </div>
                    </div>
                </div>


                {/* {body3} */}
                {/* // {head} */}
                <div >
                    <div className='md:flex md:flex-row  border-none  p-2 px-1 md:text-sm text-[14px]  bg-slate-100 rounded-t-md 	' >
                        <div className=' grid grid-cols-2  gap-3 flex-row md:flex md:flex-row md:text-sm '>
                            <div>
                                <h1 className='mr-20 md:ml-1 text-orange-600 md:text-sm text-[14px]'>FB21121800008</h1>
                            </div>
                            <div>
                                <h1 className='md:ml-2 ml-2 md:text-sm text-[14px]'>01-05-2565 10:47</h1>
                            </div>
                            <div className='flex'>
                                <FaFacebook size={23} className='text-blue-500 rounded-2xl  ' />
                            </div>
                            <div className='flex border-2 justify-center text-orange-600 border-orange-600 rounded-md w-[100px]' >
                                <h1>ผิวสวยหน้าใส</h1>
                            </div>

                            <div className='flex 2xl:ml-20 gap-2'>
                                <BsFillBoxFill size={20} className='text-orange-600   2xl:ml-20' />
                                <h1 className='text-orange-600 md:mr-20 text-[14px]'>เตรียมจัดส่ง</h1>
                            </div>
                            <div className='flex 2xl:ml-20 2xl:gap-2 gap-2 2xl:mr-20'>
                                <FaUserAlt className=' xl:ml-20  ' />
                                <h1 >อรรถพร เอี่ยมละออ</h1>
                            </div>


                        </div>


                        <div className='flex  justify-between flex-row gap-2 cursor-pointer md:ml-auto 2xl:mr-3  md:mt-0 mt-2 md-3'>

                            <AiOutlineCheck className='text-orange-600' />
                            <h1 className='text-orange-600'>พิมพ์แล้ว</h1>
                            <BsFillChatDotsFill size={23} className='text-blue-500 ' />
                            <AiFillPrinter size={23} className='text-orange-600' />
                            <FaTrashAlt size={23} />
                        </div>

                    </div>
                    {/* {body} */}
                    {/* {product 2} */}
                    <div class="grid md:grid-cols-12 grid-cols-4 gap-2 text-sm text-black font-bold bg-slate-100 rounded-b-md pb-5">
                        <div class="flex flex-col col-span-3 my-2 mx-2 md:ml-4 ml-0 ">
                            <div className='flex flex-rows   '>
                                <div>
                                    <Image src="/co1.jpg" width={70} height={80} className='mb-2' />
                                </div>
                                <div className='flex-cols ml-2 '>
                                    <div>
                                        Cgen คอลลาเจน 100,000 mg.
                                    </div>
                                    <div>
                                        แบบผงชง
                                    </div>
                                </div>
                            </div>

                        </div>
                        {/* {amount} */}
                        <div class=" border-l border-r border-slate-300">
                            <div className='flex flex-col justify-center items-center'>
                                <div className='text-slate-500'>
                                    จำนวน
                                </div>
                                <div>
                                    2
                                </div>
                            </div>
                        </div>
                        {/* {location} */}
                        <div class="col-span-2 ">
                            <h1>
                                คุณแป้ง<br />
                                293 ม.11 ตำหบลหนองกี่<br />
                            </h1>
                        </div>
                        {/* {phone} */}
                        <div className="md:border-l md:border-r border-slate-300 md:ml-0 ">
                            <div className='md:flex md:flex-col md:justify-center md:items-center md:ml-0 ml-15 md:text-sm  '>
                                0986031566
                            </div>
                        </div>
                        {/* {total} */}
                        <div class="col-span-2  border-r border-slate-300 ">
                            <div className='flex flex-col '>
                                <div className='flex flex-row justify-between mx-2 text-slate-500'>
                                    <div>
                                        ค่าส่ง
                                    </div>
                                    <div>
                                        ยอดรวม
                                    </div>
                                </div>
                                <div className='flex flex-row justify-between mx-4'>
                                    <div>
                                        100
                                    </div>
                                    <div>
                                        4850
                                    </div>
                                </div>
                            </div>

                        </div>

                        <div class="flex flex-row  col-span-2   ">
                            <div className='grid grid-cols-2 '>
                                <div className='text-slate-500'>
                                    ขนส่ง
                                </div>
                                <div className='text-slate-500'>
                                    เลขพัสดุ
                                </div>
                                <div className='md:text-sm text-[11px] '>
                                    Mv 945,me
                                </div>
                                <div className='md:text-sm text-[11px] '>
                                    TDZ21158049
                                </div>
                            </div>
                        </div>
                    </div>
                </div >
            </div >
        </div >


    )
}
export default Info

