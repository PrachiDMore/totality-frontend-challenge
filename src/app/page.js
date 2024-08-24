import Button from "@/components/Button";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import { Montserrat } from "next/font/google";
import { IoIosArrowRoundBack, IoIosArrowRoundForward } from "react-icons/io";

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
                <p className="text-xl font-medium">Start your journy with us!</p>
                <p className="text-sm">Whether you're looking for a cozy apartment in the city or a luxurious beachside villa, we've got you covered.</p>
              </div>
              <div className="w-4/12"><Button text={"Get Started"} icon={<IoIosArrowRoundForward className="text-white w-7 h-7" />} /></div>
            </div>
          </div>

          {/* bottom */}
          <div className="relative">
            <img className="my-image-class" src="./assets/hero-bottom.jpg" alt="" />
            <div className="absolute right-3 top-3 flex gap-3">
              <IoIosArrowRoundBack className="text-lightGray w-12 h-12" />
              <IoIosArrowRoundForward className="text-accentGreen w-12 h-12" />
            </div>
          </div>
        </div>

        {/* left */}
        <div className="w-1/2 h-full ">
          <img className="w-full h-full object-fill rounded-2xl" src="./assets/hero-right.jpg" alt="" />
        </div>
      </div>

      {/* 2nd section */}
      <div className="w-screen h-screen px-28 py-10 flex flex-col justify-between items-center gap-8">

        <div className="grid gap-5">
          <div className="flex gap-44 items-center">
            <h1 className="text-4xl text-accentGreen font-semibold">Discover Your Ideal Property with Us</h1>
            <p className="text-sm">Whether you're searching for a cozy city apartment, a serene countryside retreat, or a luxurious beachfront villa, our curated selection ensures you'll find the perfect place to call home.</p>
          </div>
          <div><Button className={"bg-bgWhite text-accentGreen"} text={"View Properties"} icon={<IoIosArrowRoundForward className="text-accentGreen w-7 h-7" />} /></div>
        </div>

        <div className="w-full flex gap-5 ">

          <div className="w-[50%] bg-white rounded-2xl p-4 flex justify-between gap-5">
            <div className="w-[50%] flex flex-col justify-between">
              <div className="flex flex-col gap-2">
                <h1 className="text-accentGreen text-xl font-medium">Blue Ridge Vista</h1>
                <div className="flex flex-col gap-2">
                  <p className="text-sm">Experience the charm of urban living in this beautifully furnished 2-bedroom apartment located ...</p>
                  <div className="flex gap-1 text-sm"><p>Bedrooms:</p><p className="font-medium">2</p></div>
                  <div className="flex gap-1 text-sm"><p>Size:</p><p className="font-medium">1,200 sq. ft.</p></div>
                  <div className="flex gap-1 text-sm"><p>Type:</p><p className="font-medium">Residencial property</p></div>
                  <div className="flex gap-1 text-sm"><p>Location:</p><p className="font-medium">San Francisco</p></div>
                </div>
              </div>
              <div className="flex justify-between items-center">
                <div><p className="text-accentGreen text-xl font-semibold">25,000 Rs</p></div>
                <Button className={" px-1 py-1 text-sm"} icon={<IoIosArrowRoundForward className="text-white w-7 h-7" />} />
              </div>
            </div>
            <div className="w-[50%]">
              <img className="w-full h-64 rounded-2xl " src="./assets/property1.jpg" />
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
          </div>

        </div>
      </div>

      {/* 3rd section */}
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
            <img className="w-80 h-96 object-cover rounded-xl " src="./assets/property2.jpg" />
            <img className="w-80 h-96 object-cover rounded-xl border border-white border-[3px]  absolute top-16 right-0" src="./assets/feedback.jpg" />
          </div>

          <div className="w-1/2">
            <div className="py-9 border-b-2 border-lightGray/20">
              <h1 className="text-2xl text-accentGreen font-semibold">"Perfect Urban Getaway"</h1>
              <p className="">"Staying at the Cozy Urban Retreat was an absolute delight! The location was perfect, right in the middle of everything San Francisco has to offer. The apartment was clean, modern, and had all the amenities we needed. We'll definitely be back!"</p>
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