import Backgrou from "@/components/Backgrou";
import Globals from "@/components/Globals";
import Hero from "@/components/Hero"
import Last from "@/components/Last";
import Parallax from "@/components/Parallax";
import Tendence from "@/components/Tendence";
import Tester from "@/components/Tester";

export default function Home() {
  return (
    <div className=" ">
     <Hero />
     <Last />
     <Tendence />
     <Parallax />
     <Globals />
     <Backgrou />
     <Tester />
    </div>
  );
}
