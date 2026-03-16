import Link from 'next/link';

export default function Footer() {
    return (
        <footer className="bg-white dark:bg-slate-900 border-t border-primary/5 py-12 mt-auto">
            <div className="mx-auto max-w-7xl px-6 lg:px-20">
                <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-12 mb-12">
                    <div className="col-span-2">
                        <div className="flex items-center gap-2 text-slate-900 dark:text-slate-100 mb-6">
                            <span className="material-symbols-outlined text-primary text-3xl">school</span>
                            <h2 className="text-xl font-semibold tracking-tight">Builder Foundation</h2>
                        </div>
                        <p className="text-slate-500 text-sm max-w-xs leading-relaxed">
                            Where AI Builders Begin.
                        </p>
                    </div>

                </div>
                <div className="pt-8 border-t border-primary/5 flex flex-col md:flex-row justify-between items-center gap-4 text-slate-400 text-xs">
                    <p>© {new Date().getFullYear()} Builder Foundation Inc. All rights reserved.</p>
                    <div className="flex gap-6">
                        <Link href="#" className="hover:text-primary">Twitter</Link>
                        <Link href="#" className="hover:text-primary">LinkedIn</Link>
                        <Link href="#" className="hover:text-primary">Instagram</Link>
                    </div>
                </div>
            </div>
        </footer>
    );
}
