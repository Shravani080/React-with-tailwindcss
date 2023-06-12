
import React from 'react';
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
import Header from './Header';

const crewData = [
  {
    id: 0,
    name: "Douglas Hurley",
    role: "Commander",
    imageUrl: "/Images/image-douglas-hurley.webp",
    imageUrl2: "/Images/image-douglas-hurley.png",
    description:
      "Douglas Gerald Hurley is an American engineer, former Marine Corps pilot and former NASA astronaut. He launched into space for the third time as commander of Crew Dragon Demo-2.",
  },
  {
    id: 1,
    role: "Mission Specialist",
    name: "MARK SHUTTLEWORTH",
    imageUrl: "/Images/image-mark-shuttleworth.webp",
    imageUrl2: "/Images/image-mark-shuttleworth.png",
    description:
      "Mark Richard Shuttleworth is the founder and CEO of Canonical, the company behind the Linux-based Ubuntu operating system. Shuttleworth became the first South African to travel to space as a space tourist.",
  },
  {
    id: 2,
    name: "Victor Glover",
    role: "PILOT",
    imageUrl: "/Images/image-victor-glover.webp",
    imageUrl2: "/Images/image-victor-glover.png",
    description:
      "Pilot on the first operational flight of the SpaceX Crew Dragon to the International Space Station. Glover is a commander in the U.S. Navy where he pilots an F/A-18.He was a crew member of Expedition 64, and served as a station systems flight engineer.  ",
  },
  {
    id: 3,
    name: "Anousheh Ansari",
    role: "Flight Engineer",
    imageUrl: "/Images/image-anousheh-ansari.webp",
    imageUrl2: "/Images/image-anousheh-ansari.png",
    description:
      "Anousheh Ansari is an Iranian American engineer and co-founder of Prodea Systems. Ansari was the fourth self-funded space tourist, the first self-funded woman to fly to the ISS, and the first Iranian in space.",
  },
];

function Crew() {
  const responsive = {
    0: { items: 1 },
    568: { items: 1 },
    1024: { items: 1 },
  };
  const itemsOne = crewData.map((item, index) => (
    <div
      key={index}
      className="flex lg:flex-row flex-col  lg:w-[50rem] md:w-[50rem] w-[25rem] h-auto lg:h-[23rem] justify-center items-center lg:ml-[26rem] md:ml-[6rem]"
      data-value="1"
    >
      <div className="flex flex-col justify-center lg:items-start items-center md:mt-[1rem] md:mr-[10rem] mr-[2rem] md:h-[18rem] h-auto">
        <h2 className="font-Barlow lg:text-xl md:text-2xl lg:pt-5 pt-4 uppercase  text-primary">
          {item.role}
        </h2>
        <h1 className="font-Bellefair lg:text-2xl md:text-4xl pt-4 text-start  uppercase text-white">
          {item.name}
        </h1>
        <p className="text-white lg:w-96 md:w-160 w-80 mr-13 md:ml-20 lg:ml-1 ml-10 font-barlow md:text-md text-sm md:mr-20 pt-5">
          {item.description}
        </p>
      </div>
      <img
        src={`${item.imageUrl}`}
        alt={item.name}
        className="hidden lg:flex mt-[2rem] md:w-[22rem] w-[13rem] md:mr-[10rem] order-[-1] md:order-1 lg:mr-0 lg:w-[20rem] border-b-2 border-gray-400 md:h-[25rem] h-[15rem]"
      />
      <img
        src={`${item.imageUrl2}`}
        alt={item.name}
        className="lg:hidden mt-[2rem] md:w-[22rem] w-[13rem] md:mr-[10rem] order-[-1] md:order-1 lg:mr-0 lg:w-[20rem] border-b-2 border-gray-400 md:h-[25rem] h-[15rem]"
      />
    </div>

  ))

  return (
    <div
      className="h-screen w-screen overflow-hidden overflow-y-auto flex flex-col justify-start bg-cover bg-no-repeat lg:bg-crew-bg md:bg-crew-tablet bg-crew-mobile"
    >
      <Header />
      <div className=" lg:mt-[5rem] flex flex-col justify-start  md:ml-[22rem] mt-[2rem] lg:ml-[19rem] ">
        <p className="font-Bellefair lg:pl-[4rem] md:ml-0 ml-[6rem] leading-34 tracking-widest text-lg uppercase leading-8 font-condensed text-white">
          <span className=" mix-blend-normal pr-2 opacity-25 font-condensed">
            02
          </span>
          MEET YOUR CREW
        </p>
      </div>
      <div>
        <AliceCarousel
          // autoPlay
          infinite
          mouseTracking
          items={itemsOne}
          responsive={responsive}
          disableButtonsControls
        />
      </div>
    </div>
  )
}

export default Crew







