import Header from "./Header";

export default function Home() {
  return (
    <div className="w-screen h-screen flex flex-col bg-cover overflow-hidden lg:bg-home-desktop md:bg-home-tablet bg-home-mobile" >
      <Header />
      <div className="text-white lg:width[450px] lg:h-[82px] left-[165px] lg:pt-[27px] flex lg:flex-row justify-around flex-col md:mt-20 ">
        <div className="md:flex flex-col justify-center items-center lg:pt-[10.5rem] md:text-Barlow-condenced sm:justify-center mt-20 sm:items-center text-center sm:p-10 ">
          <p className="font-Barlow text-lg leading-34 tracking-widest text-blue-100">SO YOU WANT TO TRAVEL TO</p>
          <p className="font-Bellefair lg:text-6xl leading-172 text-white lg:pt-10 md:text-[12rem] text-[5rem]">SPACE</p>
          <p className="font-Barlow h-[128px] lg:w-[400px] text-primary lg:pt-10 text-[0.9rem] w-[18rem] ml-12 md:w-[36rem] md:text-[1.3rem]">
            Let's face it; if you want to go to space, you might
            as well genuinely go to outer space and not hover kind of on the edge of it.
            Well sit back, and relax becouse we'll give you a truely out of this world experience
          </p>
        </div>
        <p className="text-black font-Bellefair lg:text-[30px] right-[3.74px] lg:w-[254px] lg:h-[254px] lg:left-[850px] lg:pt-30 lg:mt-[10rem] bg-white rounded-full flex flex-row justify-center items-center md:ml-[18rem] lg:ml-[0rem] w-[9rem] h-[9rem] sm:text-[1.5rem] ml-[7rem] md:w-[18rem] md:h-[18rem] md:mt-[4rem] md:text-[35px]">
          EXPLORE
        </p>
      </div>
    </div>
  )
}
