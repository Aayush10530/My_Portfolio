import Navbar from "@/components/layout/Navbar";
import Hero from "@/components/sections/Hero";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      <Navbar />
      <div className="w-full flex flex-col gap-0">
        <Hero />
      </div>

      {/* Footer */}
      <footer className="w-full py-8 text-center text-gray-600 text-sm border-t border-border-subtle bg-black/20 backdrop-blur-lg mt-12">
        <p>&copy; 2025 Aayush Mishra. Built with precision.</p>
      </footer>
    </main>
  );
}
