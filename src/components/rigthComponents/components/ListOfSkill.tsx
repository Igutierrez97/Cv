import HtmlIcon from "@/components/iconos/HtmlIcon";
import Next from "@/components/iconos/NextJs";
import React from "@/components/iconos/React";
import Tailwind from "@/components/iconos/Tailwind";
import Docker from "@/components/iconos/Docker";
import Css from "@/components/iconos/Css";
import Test from "@/components/iconos/Test";

export default function ListOfSkill() {
  return (
    <>
      <div className="grid grid-cols-2 mt-2 ">
        <div className="bg-green-600 flex flex-col items-center">
          <HtmlIcon className="m-0" />
          <p>Html 5</p>
        </div>
        <div className="flex flex-col items-center bg-blue-500">
          <Css className="m-0" />
          <p>CSS 3</p>
        </div>
        <div className="flex flex-col items-center bg-red-500">
          <React className="m-0" />
          <p>React Js</p>
        </div>
        <div className="flex flex-col bg-yellow-500 items-center">
          <Next className=" mt-1" />
          <p>Next JS</p>
        </div>
        <div className="flex flex-col items-center bg-orange-500">
          <Tailwind className="m-0" />
          <p>Tailwind CSS</p>
        </div>
        <div className="flex flex-col items-center bg-cyan-500">
          <Docker className="m-0" />
          <p>Docker</p>
        </div>
      </div>
      <div className="flex h-[68px] rounded-b-lg rounded-t-none text-center justify-center items-center bg-fuchsia-500">
        <Test className="m-0" />
        <p className="text-sm mx-1">
          QA Manual
        </p>
      </div>
    </>
  );
}
