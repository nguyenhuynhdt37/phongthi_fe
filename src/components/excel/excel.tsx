'use client'
import React from 'react'
import UploadFile from '../form/excel_form/UploadFile'

const Excel = () => {
const handleUploadFiles = (files: File[]) => {
    console.log("Uploaded files:", files);
}

  return (  
    <div className='w-full'>
        <UploadFile onUploadFile={handleUploadFiles}/>
    </div>
  )
}

export default Excel