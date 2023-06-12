
import { useState } from "react";
import Header from "./Header";

const technologyData = [
    {
        id: 0,
        type: "LAUNCH VEHICLE",
        imageUrl: "/Images/image-launch-vehicle-portrait.jpg",
        imageUrl2: "/Images/image-launch-vehicle-landscape.jpg",
        information: "A launch vehicle or carrier rocket is a rocket-propelled vehicle used to carry a payload from Earth's surface to space, usually to Earth orbit or beyond. Our WEB-X carrier rocket is the most powerful in operation. Standing 150 metres tall, it's quite an awe-inspiring sight on the launch pad!",
    },
    {
        id: 1,
        type: "SPACEPORT",
        imageUrl: "/Images/image-spaceport-portrait.jpg",
        imageUrl2: "/Images/image-spaceport-landscape.jpg",
        information: "A spaceport or cosmodrome is a site for launching (or receiving) spacecraft, by analogy to the seaport for ships or airport for aircraft. Based in the famous Cape Canaveral, our spaceport is ideally situated to take advantage of the Earth’s rotation for launch.",
    },
    {
        id: 2,
        type: "SPACE CAPSULE",
        imageUrl: "/Images/image-space-capsule-portrait.jpg",
        imageUrl2: "/Images/image-space-capsule-landscape.jpg",
        information: "A space capsule is an often-crewed spacecraft that uses a blunt-body reentry capsule to reenter the Earth's atmosphere without wings. Our capsule is where you'll spend your time during the flight. It includes a space gym, cinema, and plenty of other activities to keep you entertained.",
    },
];

export default function Technology() {
    const [atechnology, setTechnology] = useState(0);
    const technology = technologyData[atechnology];

    return (
        <div
            className="h-screen w-screen overflow-hidden overflow-y-auto flex flex-col bg-cover bg-no-repeat lg:bg-technology-bg md:bg-technology-tablet bg-technology-mobile"
        >
            <Header />
            <div className="h-[382px] lg:mt-[5rem] mt-[2rem] lg:ml-[20rem] left-[15rem] top-[207px] md:mt-[10rem] flex flex-col">
                <h1 className="uppercase text-lg leading-8 tracking-wider ml-12 font-condensed text-white">
                    <span className=" mix-blend-normal pr-10 opacity-25 font-condensed">
                        03
                    </span>
                    MEET YOUR Technology
                </h1>
                <div className="flex lg:flex-row flex-col md:items-center md:mt-7 mt-4">
                    <ul className="flex lg:flex-col flex-row justify-center font-condensed  text-sm uppercase  text-white">
                        {technologyData.map((item) => (
                            <li key={item.id}>
                                <button
                                    value={item.id}
                                    className="hover:bg-white  hover:text-black uppercase ml-3 pt-2 text-xl font-Bellefair  bg-transparent text-white mt-4 border border-gray-400 rounded-full w-10 h-10  lg:w-20 lg:h-20 md:w-20 md:h-20 text-center"
                                    onClick={(e) => setTechnology(e.target.value)}
                                >
                                    {item.id + 1}
                                </button>
                            </li>
                        ))}
                    </ul>
                    <div className="flex flex-col lg:ml-20 md:justify-center ">
                        <h2 className="font-Bellefair lg:text-2xl pt-10 md:text-center text-center lg:text-start lg:ml-20 uppercase text-white">
                            The Terminology..
                        </h2>
                        <h1 className=" font-Bellefair lg:text-6xl md:text-center md:text-4xl text-center lg:text-start lg:ml-20 text-2xl text-white mt-3">
                            {technology.type}
                        </h1>
                        <p className=" font-normal md:text-xl text-center lg:text-start md:px-20 px-10 text-sm mt-4 text-blue-100">
                            {technology.information}
                        </p>
                    </div>
                    <img
                        src={`${technology.imageUrl}`}
                        alt={technology.type}
                        className="md:w-80 w-90 md:h-100 h-70 md:ml-[6.25rem] hidden lg:flex order-[-1] lg:order-1"
                    />
                    <img
                        src={`${technology.imageUrl2}`}
                        alt={technology.type}
                        className="w-full lg:hidden h-full order-[-1] lg:order-1"
                    />

                </div>
            </div>
        </div>
    );
}

