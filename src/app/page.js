import Image from "next/image";
import HomePage from "./components/page";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between  w-full">
      <HomePage />
    </main>
  );
}
