import Image from "next/image";
import NavbarLayout from "./components/NavBar.js";
import PhotoBg from "./components/PhotoBg.js";

export default function Home() {
  return (
    <>
      <NavbarLayout />
      <PhotoBg />
    </>
  );
}
