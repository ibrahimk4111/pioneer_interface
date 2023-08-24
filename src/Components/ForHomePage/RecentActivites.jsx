import React from 'react'

const RecentActivites = () => {

  const cases = [
    {
      id: 1,
      case_number: "25(8)2023",
      first_party: "Party one .....petitioner",
      second_party: "Party Two .........Respondent",
      Description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio facere aspernatur veniam reiciendis dolore recusandae impedit blanditiis porro, perferendis veritatis magni natus sint totam. Fugiat saepe provident asperiores excepturi porro."
    },
    {
      id: 2,
      case_number: "25(8)2023",
      first_party: "Party one .....petitioner",
      second_party: "Party Two .........Respondent",
      Description: "Lorem ipsfacere aspernatur veniam reiciendis dolore recusandae impedit blanditiis porro, perferendis veritatis magni natus sint totam. Fugiat saepe provident asperiores excepturi porro."
    },
    {
      id: 3,
      case_number: "25(8)2023",
      first_party: "Party one .....petitioner",
      second_party: "Party Two .........Respondent",
      Description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio facere aspernatur veniam reiciendis dolore recusandae impedit blanditiis porro, perferendis veritatis magni natus sint totam. Fugiat saepe provident asperiores excepturi porro."
    },
    {
      id: 4,
      case_number: "25(8)2023",
      first_party: "Party one .....petitioner",
      second_party: "Party Two .........Respondent",
      Description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio facere aspernatur veniam reiciendis dolore recusandae impedit blanditiis porro, perferendis veritatis magni natus sint totam. Fugiat saepe provident asperiores excepturi porro."
    }
  ]

  return (
    <div className='py-10'>
      <div className="flex flex-col justify-center items-center font-serif">
        <h1 className="text-lg mb-3">__ Recent case information __</h1>
        <h1 className="font-bold md:text-3xl sm:text-xl text-lg mb-3 tracking-wide">Find your case details here</h1>
        <hr className=" w-40 h-1 bg-slate-600 rounded"></hr>
      </div>

      <div className='max-w-[1200px] mx-auto py-10 flex justify-center items-center text-base'>
        <div className='grid md:grid-cols-4 grid-cols-1 gap-3'>
          {
            cases.map((item) => (
              <div className=' md:w-72 w-96 border-2 border-slate-200 rounded-md hover:bg-bg-card hover:text-white transition-all  duration-500 ease-in hover:scale-105'>
                <h2 className=' uppercase text-lg p-1'>Case No: {item.case_number}</h2>
                <hr className=" w-full h-0 bg-slate-600 rounded"></hr>
                <div className=' py-5 px-2'>
                  <h3>{item.first_party}</h3>
                  <p className=' '>Verses</p>
                  <h3>{item.second_party}</h3>
                </div>
                <div className='p-3'>
                  <p className=' font-bold underline'>Result or description:</p>
                  <p className='text-justify'>{item.Description}</p>
                </div>
              </div>
            ))
          }
        </div>
      </div>
    </div>
  )
}

export default RecentActivites