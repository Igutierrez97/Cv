import AvatarPefil from "./components/AvatarPerfil";
import Contacto from "./components/Contactos";
import Idioma from "./components/Idioma";
import Name from "./components/Name";

export default function LeftComponents() {
  return (
    <div className="flex justify-center items-center my-3 bg-stone-300 bg-opacity-30 rounded-[10px] w-[310px] ">
      <div>
        <div className=" flex flex-row justify-center items-center gap-5 my-3">
        <AvatarPefil />
        <Name />
        </div>
        <Contacto/>
        <Idioma/>
      </div>
    </div>
  );
}
