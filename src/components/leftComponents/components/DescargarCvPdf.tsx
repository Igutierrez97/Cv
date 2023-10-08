import { Link } from "@nextui-org/link";
import NextLink from "next/link";
import Download from "@/components/iconos/Download";

export default function DescargarCvPdf() {
  return (
    <>
      <div>
        <Link
          href="/pdf/Cv-Ivan-Gutierrez.pdf"
          isExternal
          as={NextLink}
          download
        >
          <div className="text-white flex items-center gap-1 text-[10px]">
            <Download className="mb-[3px]" /> Descargar PDF
          </div>
        </Link>
      </div>
    </>
  );
}
