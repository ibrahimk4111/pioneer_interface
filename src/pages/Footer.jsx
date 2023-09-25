import React from "react";

import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="bg-blue-950 text-white">
      <div className=" md:px-12 px-5 py-6">

        <div className=" grid lg:grid-cols-4 gap-4">
          <div className="col-span-2">
            <div className="grid md:grid-cols-2 gap-5">
              {/* grid 1st column */}
              <div>
                <div>
                  <h1 className="uppercase">Segunbagicha Chambers:</h1>
                  <hr className=" w-52 h-0 bg-slate-400 rounded"></hr>
                </div>
                <div className=" bg-slate-100 text-black my-3 w-auto rounded-md">
                  <div className="p-5 ">
                    <p>70, Pioneer Road, Kakrail,</p>
                    <p>Opposite of Tax Bar,</p>
                    <p>Segunbagicha, Dhaka-1000.</p>
                  </div>
                  <hr className=" w-full h-0 bg-slate-400 rounded"></hr>
                  <Link
                    to="https://www.google.com/maps/dir//PCP5%2BG8G+Pioneer+Law+Associates,+Dhaka+1205/@23.7363642,90.4083707,20z/data=!4m20!1m10!4m9!1m0!1m6!1m2!1s0x3755b8f48430033f:0x73683be2a43b3c1b!2sPCP5%2BG8G+Pioneer+Law+Associates,+Dhaka+1205!2m2!1d90.408319!2d23.7363026!3e0!4m8!1m0!1m5!1m1!1s0x3755b8f48430033f:0x73683be2a43b3c1b!2m2!1d90.408319!2d23.7363026!3e0?hl=en&entry=ttu"
                    target="_blank"
                  >
                    <div className="p-5 cursor-pointer hover:bg-slate-200">
                      Google Direction &#8680;
                    </div>
                  </Link>

                </div>
              </div>

              {/* grid 2nd column */}
              <div >
                <div >
                  <h1 className="uppercase">Court Chamber:</h1>
                  <hr className=" w-32 h-0 bg-slate-400 rounded"></hr>
                </div>
                <div className=" bg-slate-100 text-black my-3 w-auto rounded-md">
                  <div className="p-5 ">
                    <p>Hall Room # 2, Main Building,</p>
                    <p>Supreme Court Bar Association,</p>
                    <p> Ramna, Dhaka - 1000</p>
                  </div>
                  <hr className=" w-full h-0 bg-slate-400 rounded"></hr>
                  <Link
                    to="https://www.google.com/maps/dir//PCP5%2BG8G+Pioneer+Law+Associates,+Dhaka+1205/@23.7363642,90.4083707,20z/data=!4m20!1m10!4m9!1m0!1m6!1m2!1s0x3755b8f48430033f:0x73683be2a43b3c1b!2sPCP5%2BG8G+Pioneer+Law+Associates,+Dhaka+1205!2m2!1d90.408319!2d23.7363026!3e0!4m8!1m0!1m5!1m1!1s0x3755b8f48430033f:0x73683be2a43b3c1b!2m2!1d90.408319!2d23.7363026!3e0?hl=en&entry=ttu"
                    target="_blank"
                  >
                    <div className="p-5 cursor-pointer hover:bg-slate-200">
                      Google Direction &#8680;
                    </div>
                  </Link>
                </div>
              </div>
            </div>
          </div>

          {/* grid 3rd column */}
          <div className=" col-span-2">
            <div className=" flex flex-col gap-3">
              <div>
                <h1 className="uppercase">google map</h1>
                <hr className="w-24 h-0 bg-slate-400 rounded"></hr>
              </div>
              <div>
                <iframe
                  className=" rounded-md "
                  title="Pioneer_Law_Map"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d228.26936669020685!2d90.40802717220028!3d23.736327095054584!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755b8f48430033f%3A0x73683be2a43b3c1b!2sPioneer%20Law%20Associates!5e0!3m2!1sen!2sbd!4v1689211247540!5m2!1sen!2sbd"
                  width="100%"
                  height="250"
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>
            </div>
          </div>
        </div>

        {/* copyright reserved */}
        <div className="mt-5 flex md:flex-row flex-col justify-between">
          <p className=" text-sm">
            &copy; All Rights Reserved to <Link to='/' className="text-yellow-600">PIONEER LAW ASSOCIATES</Link>
          </p>

          <p className="text-[2px]">
            Designed and Developed by <Link to='https://github.com/ibrahimk4111' target="_blank" className="text-yellow-800">Md. Ibrahim Khalil</Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
