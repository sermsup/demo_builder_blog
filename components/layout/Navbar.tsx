import Link from 'next/link';

export default function Navbar() {
    return (
        <header className="sticky top-0 z-50 border-b border-primary/10 bg-background-light/80 backdrop-blur-md dark:bg-background-dark/80 px-6 lg:px-20 py-4">
            <div className="mx-auto flex max-w-7xl items-center justify-between">
                <div className="flex items-center gap-8">
                    <Link href="/" className="flex items-center gap-2 text-slate-900 dark:text-slate-100">
                        <span className="material-symbols-outlined text-primary text-3xl">school</span>
                        <h2 className="text-xl font-bold tracking-tight">Builder Foundation</h2>
                    </Link>
                    <nav className="hidden md:flex items-center gap-8">
                        <Link href="/courses" className="text-sm font-medium hover:text-primary transition-colors">Courses</Link>
                        <Link href="/dashboard" className="text-sm font-medium hover:text-primary transition-colors">Dashboard</Link>

                    </nav>
                </div>
                <div className="flex items-center gap-6">
                    <div className="hidden sm:flex items-center bg-primary/5 rounded-lg px-3 py-1.5 border border-primary/10 dark:bg-primary/5">
                        <span className="material-symbols-outlined text-primary text-xl">search</span>
                        <input
                            type="text"
                            placeholder="Search courses..."
                            className="bg-transparent border-none focus:ring-0 text-sm w-40 lg:w-64 placeholder:text-slate-400 focus:outline-none"
                        />
                    </div>

                    <div className="flex items-center gap-4">
                        <button className="hidden lg:flex h-10 w-10 items-center justify-center rounded-full hover:bg-slate-200 dark:hover:bg-slate-800 transition-colors">
                            <span className="material-symbols-outlined">notifications</span>
                        </button>
                        <Link href="/dashboard" className="size-10 rounded-full bg-primary/20 flex items-center justify-center border border-primary/40 overflow-hidden hover:ring-2 hover:ring-primary transition-all">
                            <span className="material-symbols-outlined text-primary">person</span>
                        </Link>
                    </div>
                </div>
            </div>
        </header>
    );
}
