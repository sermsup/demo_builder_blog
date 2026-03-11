import Link from 'next/link';

export default function CertificatePage() {
    return (
        <div className="min-h-[calc(100vh-73px)] bg-slate-50 dark:bg-slate-900/50 py-16 flex flex-col items-center">

            <div className="w-full max-w-5xl px-6 lg:px-20 mb-8 flex items-center justify-between">
                <Link href="/dashboard" className="flex items-center gap-2 text-slate-500 hover:text-slate-900 dark:hover:text-slate-100 font-bold text-sm transition-colors">
                    <span className="material-symbols-outlined">arrow_back</span>
                    Back to Dashboard
                </Link>
                <div className="flex gap-4">
                    <button className="flex items-center gap-2 rounded-lg border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 px-4 py-2 text-sm font-bold shadow-sm hover:bg-slate-50 dark:hover:bg-slate-700 transition-all">
                        <span className="material-symbols-outlined text-sm">share</span>
                        Share
                    </button>
                    <button className="flex items-center gap-2 rounded-lg bg-primary px-6 py-2 text-sm font-bold text-background-dark shadow-sm hover:brightness-105 transition-all">
                        <span className="material-symbols-outlined text-sm">download</span>
                        Download PDF
                    </button>
                </div>
            </div>

            <div className="w-full max-w-5xl px-6 lg:px-20 relative">
                {/* Certificate Container */}
                <div className="bg-white dark:bg-background-dark border-[16px] border-primary/20 p-2 rounded-sm shadow-2xl relative overflow-hidden aspect-[1.414/1] w-full flex items-center justify-center text-center">

                    {/* Decorative Corner Elements */}
                    <div className="absolute top-8 left-8 w-16 h-16 border-t-4 border-l-4 border-primary"></div>
                    <div className="absolute top-8 right-8 w-16 h-16 border-t-4 border-r-4 border-primary"></div>
                    <div className="absolute bottom-8 left-8 w-16 h-16 border-b-4 border-l-4 border-primary"></div>
                    <div className="absolute bottom-8 right-8 w-16 h-16 border-b-4 border-r-4 border-primary"></div>

                    <div className="z-10 bg-white/95 dark:bg-background-dark/95 w-full h-full p-12 md:p-24 flex flex-col items-center justify-center border-2 border-slate-100 dark:border-slate-800">

                        <div className="flex items-center gap-2 text-primary mb-8 md:mb-12">
                            <span className="material-symbols-outlined text-4xl md:text-5xl font-black">school</span>
                            <h2 className="text-2xl md:text-3xl font-black tracking-tight text-slate-900 dark:text-slate-100 uppercase">
                                Builder Foundation
                            </h2>
                        </div>

                        <h1 className="text-sm md:text-base font-bold text-slate-500 uppercase tracking-[0.3em] mb-4">
                            Certificate of Completion
                        </h1>
                        <p className="text-sm text-slate-500 mb-8 max-w-xs">
                            This is to certify that
                        </p>

                        <h2 className="text-4xl md:text-6xl font-black text-slate-900 dark:text-slate-100 mb-8 border-b-2 border-slate-200 dark:border-slate-700 pb-4 inline-block px-12">
                            Alex Developer
                        </h2>

                        <p className="text-sm text-slate-500 mb-4 max-w-sm">
                            has successfully completed all coursework, quizzes, and projects for
                        </p>

                        <h3 className="text-2xl md:text-3xl font-bold text-primary max-w-lg mb-12 md:mb-16">
                            Advanced UI/UX Design Mastery
                        </h3>

                        <div className="flex w-full justify-between items-end mt-auto px-8 md:px-16">
                            <div className="text-center">
                                <div className="w-32 border-b border-slate-400 dark:border-slate-600 mb-2 pb-2">
                                    <span className="font-display font-medium text-lg">Jane Doe</span>
                                </div>
                                <p className="text-[10px] text-slate-500 uppercase font-bold tracking-widest">Lead Instructor</p>
                            </div>

                            <div className="flex flex-col items-center">
                                <span className="material-symbols-outlined text-primary text-5xl md:text-6xl mb-2">workspace_premium</span>
                                <p className="text-[10px] text-slate-500 font-medium">Valid ID: CERT-2024-89A1</p>
                            </div>

                            <div className="text-center">
                                <div className="w-32 border-b border-slate-400 dark:border-slate-600 mb-2 pb-2">
                                    <span className="font-display text-sm">October 24, 2024</span>
                                </div>
                                <p className="text-[10px] text-slate-500 uppercase font-bold tracking-widest">Date Issued</p>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    );
}
