import LeftComponents from "@/components/leftComponents/LeftComponents";
import RigthComponents from "@/components/rigthComponents/RigthCompoents";


export default function Home() {
  return (
    <main className="min-h-screen flex flex-col sm:flex-row sm:justify-center sm:items-start sm:gap-2 m-0 items-center">
      <LeftComponents/>
      <RigthComponents/>
    </main>
  );
}
