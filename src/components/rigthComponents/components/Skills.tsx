import ListOfSkill from "./ListOfSkill";

export default function Skills(){
    return(
        <>
        <div className="flex items-center justify-center mt-16">
        <div className="w-[154px] text-center text-white h-6 bg-neutral-600 rounded-[5px]">
          Habilidades
        </div>
        <div className="w-[141px] h-[0px] border border-neutral-600"></div>
      </div>
      <ListOfSkill/>
        </>
    )
}