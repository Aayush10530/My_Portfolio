import Navbar from "@/components/layout/Navbar";
import Experience from "@/components/sections/Experience";

export default function ExperiencePage() {
    return (
        <main className="flex min-h-screen flex-col items-center justify-between">
            <Navbar />
            <div className="w-full flex flex-col gap-0 pt-20">
                <Experience />
            </div>

            {/* Footer */}
            <footer className="w-full py-8 text-center text-gray-600 text-sm border-t border-border-subtle bg-black/20 backdrop-blur-lg mt-12">
                <p>© 2024 Senior Engineer Portfolio. Built with precision.</p>
            </footer>
        </main>
    );
}
