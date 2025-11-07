import BrittanyInspiredPortfolio from "@/components/BrittanyInspiredPortfolio";
import UrlAnimation from "@/components/UrlAnimation";


export default function Home() {
  return (
    <>
      <UrlAnimation text="happy.to.see.you.here👋" speed={150} maxWidth={60} cyclic={true} />
      <BrittanyInspiredPortfolio />
    </>
  );
}