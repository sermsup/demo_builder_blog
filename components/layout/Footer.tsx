import Link from 'next/link';

export default function Footer() {
    return (
        <footer className="bg-white dark:bg-slate-900 border-t border-primary/5 py-12 mt-auto">
            <div className="mx-auto max-w-7xl px-6 lg:px-20">
                <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-12 mb-12">
                    <div className="col-span-2">
                        <div className="flex items-center gap-2 text-slate-900 dark:text-slate-100 mb-6">
                            <span className="material-symbols-outlined text-primary text-3xl">school</span>
                            <h2 className="text-xl font-bold tracking-tight">Builder Foundation</h2>
                        </div>
                        <p className="text-slate-500 text-sm max-w-xs leading-relaxed">
                            Where AI Builders Begin. The premier destination for building real AI products.
                        </p>
                    </div>
                    <div>
                        <h4 className="font-bold mb-6 text-sm uppercase tracking-widest">Platform</h4>
                        <ul className="space-y-4 text-sm text-slate-500">
                            <li><Link href="/courses" className="hover:text-primary transition-colors">Courses</Link></li>
                            <li><Link href="/dashboard" className="hover:text-primary transition-colors">Dashboard</Link></li>
                            <li><Link href="/pricing" className="hover:text-primary transition-colors">Pricing</Link></li>
                            <li><Link href="#" className="hover:text-primary transition-colors">For Teams</Link></li>
                        </ul>
                    </div>
                    <div>
                        <h4 className="font-bold mb-6 text-sm uppercase tracking-widest">Resources</h4>
                        <ul className="space-y-4 text-sm text-slate-500">
                            <li><Link href="#" className="hover:text-primary transition-colors">Blog</Link></li>
                            <li><Link href="#" className="hover:text-primary transition-colors">Career Guide</Link></li>
                            <li><Link href="/certificates/preview" className="hover:text-primary transition-colors">Validate Certificate</Link></li>
                            <li><Link href="#" className="hover:text-primary transition-colors">Community</Link></li>
                        </ul>
                    </div>
                    <div>
                        <h4 className="font-bold mb-6 text-sm uppercase tracking-widest">Legal</h4>
                        <ul className="space-y-4 text-sm text-slate-500">
                            <li><Link href="#" className="hover:text-primary transition-colors">Privacy Policy</Link></li>
                            <li><Link href="#" className="hover:text-primary transition-colors">Terms of Service</Link></li>
                            <li><Link href="#" className="hover:text-primary transition-colors">Cookie Policy</Link></li>
                        </ul>
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
