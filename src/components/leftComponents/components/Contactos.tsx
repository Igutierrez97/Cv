import Email from "@/components/iconos/Email";
import Phone from "@/components/iconos/Phone";
import Location from "@/components/iconos/Location";

export default function Contacto() {
  return (
    <div className="flex flex-col gap-3">
      <div className="w-[260px] h-[38px] bg-stone-300 bg-opacity-30 rounded-[10px] flex justify-center items-center gap-2 ">
        <Email />
        <div className="w-[162px]  text-white text-[15px] font-normal font-['Calibri']">
          figaron11@gmail.com
        </div>
      </div>

      <div className="w-[260px] h-[38px] bg-stone-300 bg-opacity-30 rounded-[10px] flex justify-center items-center gap-2">
        <Phone />
        <div className="w-[162px] text-white text-[15px] font-normal font-['Calibri']">
          (+53)55131171
        </div>
      </div>
      <div className="w-[260px] h-[38px] bg-stone-300 bg-opacity-30 rounded-[10px] flex justify-center items-center gap-2">
        <Location />
        <div className="w-[162px] text-white text-[15px] font-normal font-['Calibri']">
          La Habana, Cuba
        </div>
      </div>
    </div>
  );
}
