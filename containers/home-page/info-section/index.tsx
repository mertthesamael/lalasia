import PrimaryButton from "@/components/Buttons/PrimaryButton";
import Image from "next/image";
import React, { FC } from "react";

interface InfoSectionProps {}

const InfoSection: FC<InfoSectionProps> = ({}) => {
  return (
    <section className="w-full flex justify-center md:gap-14 ">
      <div className="w-full max-w-screen-xl flex flex-col md:grid  grid-flow-col grid-cols-1 grid-rows-6  md:grid-cols-4 md:grid-rows-5  gap-8 md:gap-8  mx-5 md:mx-20 f :items-center justify-between py-20">
        <div className="flex flex-col md:gap-12 gap-8 md:row-span-2 md:row-start-1 md:row-end-4 md:col-start-1 md:col-end-3">
          <div className="flex flex-col md:gap-4 gap-2">
            <h1 className="text-secondaryColor md:text-lg font-bold text-sm">
              Our Product
            </h1>
            <h2 className="text-black md:text-3xl lg:text-5xl font-bold text-2xl">
              Crafted by talented and
              <br />
              high quality material
            </h2>
          </div>
          <p className="w-full text-sm md:text-base lg:text-lg text-textColor">
            {" "}
            Pellentesque etiam blandit in tincidunt at donec. Eget ipsum
            dignissim placerat nisi, adipiscing mauris non purus parturient.
            morbi fermentum, vivamus et accumsan dui tincidunt pulvinar
          </p>
          <PrimaryButton text="Learn More" className="w-full py-4" />
        </div>
        <div className="flex justify-center md:justify-end gap-14 md:col-start-3 md:col-end-5 md:row-start-1 items-center row-start-2">
          <div className="flex flex-col gap-2">
            <h1 className="text-black md:text-3xl lg:text-5xl font-bold text-2xl">
              20+
            </h1>
            <p className="text-sm lg:text-lg text-textColor">
              Years Experience
            </p>
          </div>
          <div className="flex flex-col gap-2">
            <h1 className="text-black md:text-3xl lg:text-5xl font-bold text-2xl">
              483
            </h1>
            <p className="text-sm lg:text-lg text-textColor">Happy Client</p>
          </div>
          <div className="flex flex-col gap-2">
            <h1 className="text-black md:text-3xl lg:text-5xl font-bold text-2xl">
              150+
            </h1>
            <p className="text-sm lg:text-lg text-textColor">
              Project Finished
            </p>
          </div>
        </div>
        <div className=" md:row-span-2 w-full h-[200px] md:h-auto  md:col-start-1 md:col-end-3 relative bg-black">
          <Image
            src={"/info2.png"}
            alt="Seciton IMG"
            fill
            style={{ objectFit: "cover" }}
          />
        </div>
        <div className="md:row-start-2 w-full h-[200px] md:h-auto md:row-end-6 md:col-start-3 md:col-end-5 bg-black relative">
          <Image
            src={"/info1.png"}
            alt="Seciton IMG"
            fill
            style={{ objectFit: "cover" }}
          />
        </div>
      </div>
    </section>
  );
};

export default InfoSection;
