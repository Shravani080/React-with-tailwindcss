import Header from "./Header";
import { useState } from "react";

const destData = [
  {
    id: 0,
    title: "moon",
    imageUrl: "/Images/image-moon.webp",
    imageUrl2: "/Images/image-moon.png",
    description:
      "See our planet as you’ve never seen it before. A perfect relaxing trip away to help regain perspective and come back refreshed. While you’re there, take in some history by visiting the Luna 2 and Apollo 11 landing sites",
    distance: "384,400 KM",
    time: "3 DAYS",
  },
  {
    id: 1,
    title: "mars",
    imageUrl: "/Images/image-mars.webp",
    imageUrl2: "/Images/image-mars.png",
    description:
      "Don’t forget to pack your hiking boots. You’ll need them to tackle Olympus Mons, the tallest planetary mountain in our solar system. It’s two and a half times the size of Everest!",
    distance: "225 MIL. km",
    time: "9 MONTHS",
  },
  {
    id: 2,
    title: "europa",
    imageUrl: "/Images/image-europa.webp",
    imageUrl2: "/Images/image-europa.png",
    description:
      "The smallest of the four Galilean moons orbiting Jupiter, Europa is a winter lover’s dream. With an icy surface, it’s perfect for a bit of ice skating, curling, hockey, or simple relaxation in your snug wintery cabin.",
    distance: "628 MIL. km",
    time: "3 YEARS",
  },
  {
    id: 3,
    title: "titan",
    imageUrl: "/Images/image-titan.webp",
    imageUrl2: "/Images/image-titan.png",
    description:
      "The only moon known to have a dense atmosphere other than Earth, Titan is a home away from home (just a few hundred degrees colder!). As a bonus, you get striking views of the Rings of Saturn.",
    distance: "1.6 BIL. km",
    time: "7 YEARS",
  },
];




export default function Destination() {
  const [destination, setDestination] = useState(0);
  const actoplanet = destData[destination];
  console.log(destination);
  return (
    <div
      className="h-screen w-screen overflow-y-auto overflow-hidden flex flex-col bg-cover bg-no-repeat lg:bg-destination-desktop md:bg-destination-tablet bg-destination-mobile"

    >
      <Header />
      <div className="h-[382px] flex flex-col  text-white width[450px] pt-[17px]">

        <h1 className="uppercase text-lg leading-8 tracking-wider pl-10 md:pl-[60px] font-condensed text-white">
          <span className="pr-3 opacity-25 font-condensed">
            01
          </span>
          Pick your destination
        </h1>
        <div className="flex lg:flex-row flex-col justify-center items-center lg:ml-[15rem] lg:w-[60rem] md:w-[43rem] ">
          <img
            src={`${actoplanet.imageUrl}`}
            alt={actoplanet.title}
            className="md:w-80 w-40 md:pt-10 pt-3 lg:ml-[6.25rem] lg:mt-10 mt-2 hidden lg:flex"
          />
          <img
            src={`${actoplanet.imageUrl2}`}
            alt={actoplanet.id}
            className="md:w-[20rem] md:ml-16 w-40 md:pt-10 pt-3 lg:ml-[6.25rem] lg:mt-10 mt-2 lg:hidden"
          />
          <div className="flex flex-col md:ml-[8.25rem] mt-[1.25rem]">
            <ul className="flex flex-row justify-between ml-8 md:ml-11 w-[15rem] md:w-[23.75rem] font-condensed text-sm uppercase text-white">
              {destData.map((each) => (
                <li key={each}>
                  <button
                    className="uppercase"
                    onClick={(e) => setDestination(each.id)}
                  >
                    {each.title}
                  </button>
                </li>
              ))}
            </ul>
            <h1 className="font-Belle text-5xl md:text-8xl md:pt-10 pt-5 pb-3 uppercase text-center text-white">
              {actoplanet.title}
            </h1>
            <p className="text-blue-100 font-barlow md:pl-3 md:pb-10 md:w-[30rem] md:text-xl md:mt-10 w-[18rem] text-[0.7rem] pl-2">
              {actoplanet.description}
            </p>
            <hr className="mt-10" />
            <div className="flex flex-row justify-around mt-10">
              <div className="flex flex-col ">
                <p className="text-primary font-condensed">AVG. Distance</p>
                <p className="font-belle text-lg text-white pl-3 pt-2">
                  {actoplanet.distance}
                </p>
              </div>
              <div className="flex flex-col">
                <p className="text-primary font-condensed">
                  EST. TRAVEL TIME
                </p>
                <p className="font-Belle text-lg text-white pl-5 pt-2">
                  {actoplanet.time}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

