import Book from "@/components/iconos/Book";
import Gym from "@/components/iconos/Gym";
import Game from "@/components/iconos/Game";

export default function Hobbies() {
  return (
    <div className="mb-3">
      <div className="flex  items-center justify-center  w-[88px] h-8 bg-stone-300 bg-opacity-30 rounded-[10px]">
        <p className="text-white text-sm font-bold font-['Montserrat'] leading-[18px]">
          Hobbies
        </p>
      </div>

      <div className="flex justify-around gap-2">
        <div className="mt-2 text-center">
          <Book />
          <p className="text-neutral-200 text-[15px] font-bold font-['Montserrat'] leading-[18px]">
            Leer
          </p>
        </div>
        <div className="mt-2 text-center">
          <Gym fill="#ffffff" />
          <p className="text-neutral-200 text-[15px] font-bold font-['Montserrat'] leading-[18px]">
            Gym
          </p>
        </div>
        <div className="mt-2 text-center">
          <Game fill="#ffffff" />
          <p className="text-neutral-200 text-[15px] font-bold font-['Montserrat'] leading-[18px]">
            Video Juegos
          </p>
        </div>
      </div>
    </div>
  );
}
