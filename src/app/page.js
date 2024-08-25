import Button from "@/components/Button";
import Card from "@/components/Card";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import { Montserrat } from "next/font/google";
import Link from "next/link";
import { IoIosArrowRoundBack, IoIosArrowRoundForward } from "react-icons/io";
import properties from "../../propertyData";
import { FaCartShopping, FaArrowUpRightFromSquare } from "react-icons/fa6";
import { IoBedOutline } from "react-icons/io5";
import { LuBath } from "react-icons/lu";
import { CgArrowsExpandRight } from "react-icons/cg";

const montserrat = Montserrat({ subsets: ['latin'] })

export default function Home() {
  return (
    <div className={`bg-bgWhite w-screen ${montserrat.className}`}>
      <Navbar />

      {/* hero */}
      <div className="w-screen h-screen px-28 py-10 flex justify-between items-center gap-8">
        {/* right */}
        <div className="w-1/2 h-full grid gap-8">
          {/* top */}
          <div className="w-full flex flex-col gap-3">
            <h1 className="text-4xl text-accentGreen font-semibold">Welcome to HomeSeek!</h1>
            <div className="w-full flex gap-7  justify-between items-center">
              <div className="w-8/12 flex flex-col gap-2">
                <p className="text-xl font-medium">Start your journey with us!</p>
                <p className="text-sm">Whether you&apos;re looking for a cozy apartment in the city or a luxurious beachside villa, we&apos;ve got you covered.</p>
              </div>
              <div className="w-4/12"><Button text={"Get Started"} icon={<IoIosArrowRoundForward className="text-white group-hover:text-accentGreen group-hover:translate-x-2 duration-300 w-7 h-7" />} /></div>
            </div>
          </div>

          {/* bottom */}
          <div className='group w-full overflow-hidden rounded-2xl relative flex justify-center'>
            <img className='w-full h-full object-cover rounded-2xl my-image-class ' src="./assets/hero-bottom.jpg" />
            <div className="absolute right-3 top-3 flex gap-3">
              <IoIosArrowRoundBack className="text-lightGray w-12 h-12" />
              <IoIosArrowRoundForward className="text-accentGreen w-12 h-12" />
            </div>
            <div className='opacity-100 duration-300 img-gradiant flex items-end justify-center px-3 py-4 w-full h-full rounded-2xl absolute top-0 left-0 pointer-events-none my-image-class'>
              <div className='w-full px-3 flex flex-col gap-2 justify-between '>
                {/* <p className={`lg:text-2xl text-lg text-white font-medium`}>{title}</p>
                <p className={`text-sm  text-white font-medium`}>{desc}</p> */}
              </div>
            </div>
          </div>
          {/* <div className="relative">
            <img className="my-image-class" src="./assets/hero-bottom.jpg" alt="" />
            <div className="absolute right-3 top-3 flex gap-3">
              <IoIosArrowRoundBack className="text-lightGray w-12 h-12" />
              <IoIosArrowRoundForward className="text-accentGreen w-12 h-12" />
            </div>
          </div> */}
        </div>

        {/* left */}
        <div className="w-1/2 h-full ">
          {/* <img className="w-full h-full object-fill rounded-2xl" src="./assets/hero-right.jpg" alt="" /> */}
          <Link href="" className='group w-full h-full overflow-hidden rounded-2xl relative flex justify-center'>
            <img className='w-full h-full object-cover rounded-2xl ' src="./assets/hero-right1.jpg" />
            <div className='opacity-100 duration-300 img-gradiant flex items-end justify-center px-3 py-4 w-full h-full rounded-2xl absolute top-0 left-0 pointer-events-none '>
              <div className='w-full px-3 flex flex-col gap-2 justify-between '>
                <p className={`lg:text-2xl text-lg text-white font-medium`}>Serene Resort Haven</p>
                <p className={`text-sm  text-white font-medium`}>A relaxing retreat featuring scenic views, top-notch facilities, and a tranquil environment, perfect for vacationers seeking a peaceful getaway or a venue for special events.</p>
              </div>
            </div>
          </Link>
        </div>
      </div>

      {/* 2nd section */}
      <div className="w-screen h-screen px-28 py-10 flex flex-col items-center gap-8">

        <div className="flex gap-44 items-center">
          <h1 className="w-[80%] text-4xl text-accentGreen font-semibold">Different types of Property available </h1>
          <p className="text-sm">Here&apos;s a diverse selection of land categories to suit every investor and buyer. Whether you&apos;re seeking residential plots for your dream home, commercial parcels for business ventures, or expansive agricultural tracts.</p>
        </div>

        <div className="w-full h-full flex gap-10">
          <div className="w-1/3 h-full flex flex-col justify-end gap-7">
            <Button className={"w-fit h-fit"} text={"Get Started"} icon={<IoIosArrowRoundForward className="text-white group-hover:text-accentGreen group-hover:translate-x-2 duration-300 w-7 h-7" />} />
            <Card className={"h-96"} src={"./assets/residential.jpg"} title={"Residential Appartment"} desc={"Cozy living space with essential amenities in a peaceful neighborhood."} />
          </div>

          <div className="w-1/3 h-full flex flex-col gap-3 items-center">
            <Card className={"h-[400px]"} src={"./assets/rental-shop.jpg"} title={"Shop"} desc={"Prime commercial spot in high-traffic areas, perfect for retail."} />
            <div className="flex gap-3">
              <IoIosArrowRoundBack className="text-lightGray w-12 h-12" />
              <IoIosArrowRoundForward className="text-accentGreen w-12 h-12" />
            </div>
          </div>

          <div className="w-1/3 flex items-end">
            <Card className={"h-96"} src={"./assets/office.jpg"} title={"Professional Office Space"} desc={"A professional and well-equipped workspace in a prime business location."} />
          </div>
        </div>

      </div>

      {/* 3rd section */}
      <div className="w-screen h-screen px-28 py-10 flex flex-col justify-between items-center gap-8">

        <div className="grid gap-5 ">
          <div className="flex gap-44 items-center">
            <h1 className="text-4xl text-accentGreen font-semibold">Discover Your Ideal Property with Us</h1>
            <p className="text-sm">Whether you&apos;re searching for a cozy city apartment, a serene countryside retreat, or a luxurious beachfront villa, our curated selection ensures you&apos;ll find the perfect place to call home.</p>
          </div>
          <div><Button href={'/listing'} className={"bg-bgWhite text-accentGreen group hover:bg-accentGreen hover:text-white duration-200"} text={"View Properties"} icon={<IoIosArrowRoundForward className="text-accentGreen group-hover:text-white group-hover:translate-x-2 duration-300 w-7 h-7" />} /></div>
        </div>

        <div className="w-full flex gap-5">
          <div className=' w-full h-max grid lg:grid-cols-3 grid-cols-1 gap-8 '>
            {properties.slice(0,3).map((property, index) => (
              <Link href={`/property/${property.id}`} className="flex flex-col h-[335px] relative" key={index}>
                <img className="w-full h-64 rounded-2xl" src="./assets/property1.jpg" />
                <div className="absolute bottom-0 left-1/2 w-11/12 -translate-x-1/2 bg-lightGreen rounded-xl p-3 flex flex-col gap-3">
                  <div className="flex justify-between items-center">
                    <p className="text-lg font-semibold">₹ {property.price.toLocaleString()}/mo</p>
                    <div className="flex gap-3 items-center">
                      <div className="bg-accentGreen/40 p-2 rounded-full">
                        <FaCartShopping className="text-white w-3 h-3" />
                      </div>
                      <div className="bg-accentGreen p-2 rounded-full">
                        <FaArrowUpRightFromSquare className="text-white w-3 h-3" />
                      </div>
                    </div>
                  </div>
                  <div>
                    <h1 className="font-semibold">{property.propertyName}</h1>
                    <div className='flex gap-1'>
                      <p className="text-sm">Property Type:</p>
                      <p className="text-sm font-medium">{property.propertyType}</p>
                    </div>
                    <p className="text-xs">{property.location}</p>
                  </div>
                  <div className="flex justify-between items-center">
                    <div className="flex gap-2 items-center">
                      <IoBedOutline className="text-lightGray" />
                      <p className="text-darkGray lg:text-sm text-xs">{property.bedrooms} Bed</p>
                    </div>
                    <div className="flex gap-2 items-center">
                      <LuBath className="text-lightGray" />
                      <p className="text-darkGray lg:text-sm text-xs">{property.bathrooms} Bath</p>
                    </div>
                    <div className="flex gap-2 items-center">
                      <CgArrowsExpandRight className="text-lightGray" />
                      <p className="text-darkGray lg:text-sm text-xs">{property.area} sqft</p>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>

          {/* <div className="w-[50%] bg-white border-2 border-accentGreen/20 rounded-2xl p-4 flex justify-between gap-5">
            <div className="w-[50%] flex flex-col justify-between">
              <div className="flex flex-col gap-2">
                <h1 className="text-accentGreen text-2xl font-medium">Blue Ridge Vista</h1>
                <div className="flex flex-col gap-4">
                  <p className="text-sm">Experience the charm of urban living in this beautifully furnished 2-bedroom apartment located ...</p>
                  <div className="flex flex-col gap-2">
                    <div className="flex gap-1 text-sm"><p>Bedrooms:</p><p className="font-medium">2</p></div>
                    <div className="flex gap-1 text-sm"><p>Size:</p><p className="font-medium">1,200 sq. ft.</p></div>
                    <div className="flex gap-1 text-sm"><p>Type:</p><p className="font-medium">Residencial property</p></div>
                    <div className="flex gap-1 text-sm"><p>Location:</p><p className="font-medium">San Francisco</p></div>
                  </div>
                </div>
              </div>
              <div className="flex justify-between items-center">
                <div><p className="text-accentGreen text-3xl font-semibold">25,000 Rs/mo</p></div>
                <Button className={" px-1 py-1 text-sm"} icon={<IoIosArrowRoundForward className="text-white w-7 h-7" />} />
              </div>
            </div>
            <div className="w-[50%]">
              <img className="w-full h-full object-cover rounded-2xl " src="./assets/property1.jpg" />
            </div>
          </div>

          <div className="w-[25%] h-full">
            <img className="rounded-2xl w-80 h-80" src="./assets/property2.jpg" />
            <div className="flex justify-between items-center py-3">
              <h1>Reverside Oasis</h1>
              <Button className={"bg-bgWhite text-accentGreen px-5 py-2 text-sm"} text={"View More"} />
            </div>
          </div>

          <div className="w-[25%] h-full">
            <img className="rounded-2xl w-80 h-80" src="./assets/property2.jpg" />
            <div className="flex justify-between items-center py-3">
              <h1>Reverside Oasis</h1>
              <Button className={"bg-bgWhite text-accentGreen px-5 py-2 text-sm"} text={"View More"} />
            </div>
          </div> */}

        </div>
      </div>

      {/* 4th section */}
      <div className="w-screen h-screen px-28 py-10 flex flex-col items-center gap-8">

        <div className="w-full flex gap-44 justify-between items-center">
          <h1 className="text-4xl text-accentGreen font-semibold">Satisfied Clients Speak</h1>
          <div className="flex gap-3">
            <IoIosArrowRoundBack className="text-lightGray w-12 h-12" />
            <IoIosArrowRoundForward className="text-accentGreen w-12 h-12" />
          </div>
        </div>

        <div className="w-full flex items-center gap-16">
          <div className="w-1/2 relative">
            <div className="w-full overflow-hidden rounded-xl relative flex ">
              <img className="w-80 h-96 object-cover rounded-xl " src="./assets/property2.jpg" />
              <div className='opacity-100 bg-black/25 flex items-end justify-center px-3 py-4 w-80 h-96 rounded-xl absolute top-0 left-0 pointer-events-none'></div>
            </div>
            <div className="absolute top-16 right-0">
              <div className="w-full overflow-hidden rounded-xl relative flex ">
                <img className="w-80 h-96 object-cover rounded-xl border border-white border-[3px]  " src="./assets/feedback.jpg" />
                <div className='opacity-100 bg-black/25 flex items-end justify-center px-3 py-4 w-80 h-96 rounded-xl absolute top-0 left-0 pointer-events-none'></div>
              </div>
            </div>
          </div>

          {/* <div className="w-1/2 relative">
            <img className="w-80 h-96 object-cover rounded-xl " src="./assets/property2.jpg" />
            <img className="w-80 h-96 object-cover rounded-xl border border-white border-[3px]  absolute top-16 right-0" src="./assets/feedback.jpg" />
          </div> */}

          <div className="w-1/2">
            <div className="py-9 border-b-2 border-lightGray/20">
              <h1 className="text-2xl text-accentGreen font-semibold">&quot;Perfect Urban Getaway&quot;</h1>
              <p className="">&quot;Staying at the Cozy Urban Retreat was an absolute delight! The location was perfect, right in the middle of everything San Francisco has to offer. The apartment was clean, modern, and had all the amenities we needed. We&apos;ll definitely be back!&quot;</p>
            </div>
            <div className="pt-9 flex gap-3 items-center">
              <img className="w-12 h-12 object-cover rounded-full" src="./assets/profile.jpg" />
              <div>
                <h1 className="text-accentGreen text-lg font-medium">Emily R.</h1>
                <p className="text-sm">Frequent Traveler</p>
              </div>
            </div>
          </div>

        </div>


      </div>

      {/* footer */}
      <Footer />


    </div>
  );
}