import React from 'react'
import headImg from '../../styles/raj_de.png'
// import headBgImg from '../../styles/antique-leather-bound-books-rustic-bookshelf-generated-by-ai.jpg'

const AboutDes = () => {

  const categories = [
    {
      id: "01",
      text: "Expert Lawyer"
    }, 
    {
      id: "02",
      text: "Free Consultancy"
    }, 
    {
      id: "03",
      text: "Infomative"
    }, 
    {
      id: "04",
      text: "Experienced"
    }, 
    {
      id: "05",
      text: "Huge amount of Lawyer"
    }, 
    {
      id: "06",
      text: "Free Consultancy"
    }, 
  ]

  return (
    <div className=' bg-slate-100 py-10'>
      <div className=' max-w-[1200px] mx-auto'>
        <div className="flex flex-col justify-center items-center">
          <h1 className="text-lg mb-3 font-serif text-bg-card">__ About Us __</h1>
          <h1 className="font-bold md:text-3xl sm:text-xl text-lg mb-3 tracking-wide  font-serif ">Why will you choose us</h1>
          <hr className=" w-40 h-1 bg-slate-900 rounded"></hr>
          <p className='md:w-[65%] w-[100%] text-justify p-5 md:text-lg'>Espinal Law with offices in Miami and Orlando services the entire state of Florida in matters dealing with Personal Injury, Wrongful Death, Criminal Defense and Homeowner’s Insurance Claims. Espinal Law prides itself in zealous advocacy, responsible representation and professionalism.</p>

          <div className=' grid md:grid-cols-3 grid-cols-2 px-2 gap-3 pb-10'>
            {
              categories.map((categorie, index) => (
                <div key={index} className='flex items-center'>
                  <h2 className='p-2 text-lg bg-bg-card text-white'>{categorie.id}</h2>
                  <h3 className='p-2 md:text-lg text-base bg-[#fff2ce] '>{categorie.text}</h3>
                </div>
                ))
            }
          </div>
        </div>

        <div className='h-full grid md:grid-cols-3 grid-cols-1 gap-5 border-2 border-slate-200 rounded-md p-5'>
          <img src={headImg} alt="..." className='w-full h-auto' />
          <div className=' md:col-span-2 '>
            <h2 className=' md:text-3xl text-xl text-blue-950 uppercase border-b-2 border-slate-200 text-center'>Head of Pioneer Law Associates</h2>
            <p className=' md:px-12 px-5 py-5 md:text-lg text-justify'>is a practicing lawyer who studied law from University of London and was thereafter called to the Bar Council of England and Wales as a Barrister-at-Law from The Honourable Society of Lincoln’s Inn after successful completion of his Bar Professional Training Course from City University London. He has been enrolled in the Bangladesh Bar Council as an Advocate and subsequently has become an Advocate of Supreme Court of Bangladesh. He had been associated with eminent law firms in Bangladesh such as Syed Ishtiaq Ahmed & Associates, Moudud Ahmed & Associates, Tasmia Prodhan and Associates and The Legal Sanctuary. Currently he is practicing in the High Court Division of the Supreme Court of Bangladesh. He has in depth experience in Civil, Criminal, Banking, Non-Banking Commercial Matters, Company Matters, Income Tax Matters, Family Matters and Arbitration Matters. He has gained vast knowledge of all kinds of drafting and legal vettings and he has been working in the legal arena in different positions for more than 8 (eight) years.</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AboutDes