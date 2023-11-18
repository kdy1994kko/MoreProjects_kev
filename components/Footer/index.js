import React from "react";
import Socials from "../Socials";
import Link from "next/link";
import Button from "../Button";

const Footer = ({}) => {
  return (
    <> 
      <div className="mt-5 laptop:mt-40 p-2 laptop:p-0">
        <div>
          <h1 className="text-2xl text-bold">Contact.</h1>
          <div className="mt-10">
            <h1 className="text-3xl tablet:text-6xl laptop:text-6xl laptopl:text-8xl text-bold">
              LET&apos;S WORK
            </h1>
            <h1 className="text-3xl tablet:text-6xl laptop:text-6xl laptopl:text-8xl text-bold">
              TOGETHER
            </h1>
            <h1 className="text-3xl tablet:text-6xl laptop:text-6xl laptopl:text-8xl text-bold">
              \(^o^)/
            </h1> 
            <div className="mt-10">
              <Socials />
            </div>
          </div>
        </div>
      </div>
      <h1 className="text-sm text-bold mt-2 laptop:mt-10 p-2 laptop:p-0">
        <Link href="https://www.biblegateway.com/passage/?search=Joshua%201%3A9&version=NIV"> 
          <a className="underline underline-offset-1" target="_blank" rel="noreferrer">Be strong and courageous! Do not be afraid or discouraged. For the Lord your God is with you wherever you go. ~ Joshua 1:9</a>
        </Link>
      </h1> 
    </>
  );
};

export default Footer;
