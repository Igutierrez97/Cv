import LeftComponents from "@/components/leftComponents/LeftComponents";
import RigthComponents from "@/components/rigthComponents/RigthCompoents";


export default function Home() {
  return (
    <main className="min-h-screen flex flex-col m-0 items-center">
      <LeftComponents/>
      <RigthComponents/>
    </main>
  );
}
