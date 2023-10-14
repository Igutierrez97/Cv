import AvatarPefil from "./components/AvatarPerfil";
import Contacto from "./components/Contactos";
import Hobbies from "./components/Hobbie";
import Idioma from "./components/Idioma";
import Name from "./components/Name";
import SocialNetwork from "./components/SocialNetwork";

export default function LeftComponents() {
  return (
    <div className="flex justify-center sm:items-start items-center  sm: h-[840px] my-3 bg-stone-300 bg-opacity-30 rounded-[10px] w-[310px] ">

      <div className=" flex flex-col gap-5">
        <div className=" flex flex-row justify-center items-center gap-5 my-3">
        <AvatarPefil />
        <Name />
        </div>
        <Contacto/>
        <Idioma/>
        <SocialNetwork/>
        <Hobbies/>
      </div>
    </div>
  );
}
