import { Navbar } from "@/components/Navbar";
import { TodoApp } from "@/components/TodoApp";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main className="p-5 min-h-screen space-y-10">
      <Navbar />
      <TodoApp />
    </main>
  );
}
