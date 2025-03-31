'use client'
import React from 'react'
import UploadFile from '../form/excel_form/UploadFile'
import { upload_excel_async } from '@/api/excel'
import SetExam from '../form/excel_form/SetExam'

const Excel = () => {
  const [step, setStep] = React.useState(0)
  const [data, setData] = React.useState<any>(null)
  const handleUploadFiles = async (files: File[]) => {
    console.log("handleUploadFiles", files);

    const res = await upload_excel_async(files)
    if (res.status_code === 200) {
      setData(res.data)
      setStep(1)
    }

  }

  return (
    <div className='w-full'>
      {step === 0 && <UploadFile onUploadFiles={handleUploadFiles} />}
      {step === 1 && <SetExam data={data} />}
    </div>
  )
}

export default Excel