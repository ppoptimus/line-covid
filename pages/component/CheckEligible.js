import React from 'react'

export default function CheckEligible() {
  return (
    <div>
        <h3>กรอกข้อมูลเพื่อตรวจสอบสิทธิ์</h3>
        <input type={'number'} className='border-slate-300 rounded-md text-lg shadow-md placeholder-slate-400
      focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500'></input>
    </div>
  )
}
