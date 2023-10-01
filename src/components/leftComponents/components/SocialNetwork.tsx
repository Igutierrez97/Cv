import { Link } from "@nextui-org/link";
import NextLink from "next/link";
export default function SocialNetwork() {
  return (
    <div className=" w-[260px] h-[110px] mb-3 bg-stone-300 bg-opacity-30 rounded-[10px]">
      <p className="text-white text-center ml-4 text-md pt-1.5 font-bold font-['Montserrat']">
        Redes Sociales
      </p>
      <div className="flex flex-col-reverse text-white items-center ml-4">
        <Link
          as={NextLink}
          isBlock
          isExternal
          showAnchorIcon
          href="https://www.linkedin.com/in/iv%C3%A1n-guti%C3%A9rrez-del-toro-1a0442233/"
      
        >
          Linkedin
        </Link>
        <Link
          as={NextLink}
          isExternal
          isBlock
          showAnchorIcon
          href="https://github.com/Igutierrez97"
   
        >
          GitHub
        </Link>
      </div>
    </div>
  );
}
