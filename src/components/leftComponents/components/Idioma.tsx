import { Progress } from "@nextui-org/progress";

export default function Idioma() {
  return (
    <div className="w-[260px] h-[87px] my-3 bg-stone-300 bg-opacity-30 rounded-[10px]">
      <p className="text-white text-start ml-4 text-md pt-1.5 font-bold font-['Montserrat'] ">
        Idiomas
      </p>

      <div className="mx-3">
        <Progress
          size="sm"
          radius="sm"
          classNames={{
            base: "max-w-md",
            track: "drop-shadow-md border border-default",
            indicator: "bg-gradient-to-r from-pink-500 to-yellow-500",
            label: "tracking-wider font-medium text-default-600 text-white",
            value: "text-foreground/60 text-white",
          }}
          label="inglés"
          value={50}
          showValueLabel={true}
        />
      </div>
    </div>
  );
}
