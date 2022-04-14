import Link from "next/link";
import Image from "next/image";
import millify from "millify";

import ArsenalImg from "../public/vandalImg.png";
import AgentImg from "../public/BrimImg.png";
import MapImg from "../public/mapImg.png";

import React from "react";

const links = [
  {
    title: "ARSENALS",
    link: "/arsenals/",
    id: 1,
    image: ArsenalImg,
  },
  {
    title: "AGENTS",
    link: "/agents/",
    id: 2,
    image: AgentImg,
  },
  {
    title: "MAPS",
    link: "/maps/",
    id: 3,
    image: MapImg,
  },
];

const Homepage = () => {
  return (
    <>
      <h1 className="text-2xl pt-4 md:text-5xl text-white md:pt-5 md:mb-10">
        VALORANT GUIDE INDONESIA
      </h1>
      <div className="linkWrapper w-full flex flex-col md:flex-row items-center">
        {links.map((link) => (
          <div className="linkMini w-full md:w-1/3 md:mx-20" key={link.id}>
            <Link href={link.link} passHref>
              <a className="text-center text-white justify-items-center w-full">
                <Image src={link.image} alt={link.title} />
                <br />
                <p className="text-2xl">{link.title}</p>
              </a>
            </Link>
          </div>
        ))}
      </div>
    </>
  );
};

export default Homepage;
