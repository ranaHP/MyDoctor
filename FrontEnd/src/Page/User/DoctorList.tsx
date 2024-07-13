import React from 'react'

const DoctorList = () => {
  return (
    <div className='w-full flex'>
        {[
            'docor1',
            'docor2',
            'docor3',
            'docor4'
        ].map((item, index) => (
            <div className='h-[100px] w-[100px] bg-slate-200 rounded-lg m-10 flex justify-center items-center' key={index}>
                <div>{item}</div>
            </div>
        ))}  

    </div>
  )
}

export default DoctorList