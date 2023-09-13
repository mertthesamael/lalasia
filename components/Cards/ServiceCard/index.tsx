import React, { FC } from "react";

interface ServiceCardProps {
  id: number;
  title: string;
  content: string;
  icon?: JSX.Element;
  numeric?: boolean;
  horizontal?: boolean;
}

const ServiceCard: FC<ServiceCardProps> = ({
  title,
  content,
  icon,
  numeric,
  id,
  horizontal,
}) => {
  if (horizontal) {
    return (
      <div className="py-6 w-full md:w-max flex  md:items-start  md:gap-6 gap-3">
        <div>
          {icon ? (
            <div className="md:w-16 md:h-16 h-11 w-11 rounded-full bg-[#F9F9F9] flex items-center justify-center">
              {icon}
            </div>
          ) : (
            <span className="text-4xl md:text-6xl text-primaryColor font-bold">
              {String(id).padStart(2, "0")}
            </span>
          )}
        </div>
        <div className="flex flex-col gap-4">
          <div>
            <h3 className="text-black md:text-2xl text-base font-bold">
              {title}
            </h3>
          </div>
          <div className=" w-full md:max-w-[507px]">
            <p className="text-textColor md:text-lg text-sm">{content}</p>
          </div>
        </div>
      </div>
    );
  }
  return (
    <div className="p-6 w-full md:w-max flex items-center md:items-start flex-col md:gap-6 gap-3 shadow-md">
      <div>
        {icon ? (
          <div className="md:w-16 md:h-16 h-11 w-11 rounded-full bg-[#F9F9F9] flex items-center justify-center">
            {icon}
          </div>
        ) : (
          <span className="text-4xl md:text-6xl text-primaryColor font-bold">
            {String(id).padStart(2, "0")}
          </span>
        )}
      </div>
      <div>
        <h3 className="text-black md:text-2xl text-base font-bold">{title}</h3>
      </div>
      <div className="text-center md:text-left w-full md:w-[295px] lg:w-[346px]">
        <p className="text-textColor md:text-lg text-sm">{content}</p>
      </div>
    </div>
  );
};

export default ServiceCard;
