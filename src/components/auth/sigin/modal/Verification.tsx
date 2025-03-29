import { isNotNumber } from '@/lib/checkSyntax';
import { Button, Modal } from 'antd'
import { useState, useEffect } from 'react'
import { CgMoreO } from "react-icons/cg";

interface VerificationProps {
  open: boolean
  setOpen: (open: boolean) => void
} 

const Verification = ({open, setOpen}:VerificationProps ) => {
    const [step, setStep] = useState(0)
    const [mounted, setMounted] = useState(false)
    const [error, setError] = useState('')
    const [code, setCode] = useState('')
    const handleSetCode = (value: string) => {
        if (value.length > 6) {
            return
        }
        if (isNotNumber(value)) {
            return
        }

        setCode(value)    
    }
    useEffect(() => {
        setMounted(true)
        return () => setMounted(false)
    }, [])
    
    if (!mounted) {
        return null // Don't render anything on the server
    }
    
    return (
        <Modal className='p-0 m-0' footer={null} centered open={open} onCancel={() => setOpen(false)}>
            <div className='dark:bg-[#101828] dark:text-white bg-[#f4f3fb] rounded-2xl py-5 px-8'>
                <p className='text-[#4a4d55] font-bold'>Nguyễn Huỳnh . Facebook</p>
                {step === 0 && (
                <div>
                    <p className='text-[#1a2730] py-2 text-2xl font-bold'>Đi đến mã ứng dụng xác thực</p>
                <p className='text-[#1a2730] text-justify'>Chúng tôi đã gửi mã xác thực đến email gồm 6 chữ số: <span className='font-bold'>nguyenhuynhdt37@gmail.com</span>. Vui lòng kiểm tra hộp thư của bạn.</p>
                <img className={`w-full object-cover rounded-3xl my-5`} src="https://www.valimail.com/wp-content/uploads/2024/04/Email-authentication-headers-explained.png" alt="" />
                <div className='flex items-center gap-2'>
                  <input value={code} onChange={(e) => handleSetCode(e.target.value)} className='rounded-xl bg-[#fff] text-md border-[1px] px-4 w-full py-4 focus:outline-0' type="text" placeholder='Mã' />
                </div>
                <button disabled className='py-3 w-full text-md disabled:bg-[#91baf0] disabled:text-[#d5d5d5] rounded-full text-center my-5'>Tiếp tục</button>
                </div>
                )}
                {step === 1 && (
                <div>
                    <p className='text-[#1a2730] py-2 text-2xl font-bold'>Kiểm tra thông báo trên thiết bị khác</p>
                <p className='text-[#1a2730] text-justify'>Chúng tôi đã gửi thông báo đến các thiết bị khác đang sử dụng tài khoản này. Hãy xem thông báo của ứng dụng đó và phê duyệt lượt đã đăng nhập.</p>
                <img className='w-full object-cover rounded-3xl my-5' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSVKb_IajT3yOKv5nQVD3NLpWLUsDCSFIHXaHpGqxFUOcPx5Y7RW28SGQFWbK84zr881O0&usqp=CAU" alt="" />
                <div className='flex items-center gap-2'>
                    <CgMoreO className="text-2xl mr-2"/>
                    <div>
                        <p className="font-bold">Đang chờ phê duyệt</p>
                        <p className="text-sm text-gray-500">Phê duyệt bằng thiết bị khác để tiếp tục</p>
                    </div>
                </div>
                </div>
                )}
              <button className='w-full rounded-full border-2 p-[8px] font-bold'>Thử các khác</button>
            </div>
        </Modal>
    )
}

export default Verification