import Link from 'next/link';

export default function DashboardPage() {
    return (
        <div className="max-w-7xl mx-auto px-6 lg:px-20 py-10 min-h-screen">

            {/* Welcome Banner */}
            <div className="bg-primary/5 border border-primary/20 rounded-3xl p-8 mb-12 flex flex-col md:flex-row justify-between items-center gap-6">
                <div className="flex items-center gap-6">
                    <div className="size-20 rounded-full border-4 border-white dark:border-slate-800 bg-slate-300 shadow-md"></div>
                    <div>
                        <h1 className="text-3xl font-black mb-1">Welcome back, Alex!</h1>
                        <p className="text-slate-500 text-sm">You are on a 14-day learning streak. Keep it up!</p>
                    </div>
                </div>
                <div className="bg-white dark:bg-slate-800 p-4 rounded-2xl flex items-center gap-6 shadow-sm border border-slate-100 dark:border-slate-700">
                    <div className="text-center">
                        <span className="block text-2xl font-black text-primary">4</span>
                        <span className="text-[10px] font-bold text-slate-500 uppercase tracking-widest">Courses In Progress</span>
                    </div>
                    <div className="w-px h-10 bg-slate-200 dark:bg-slate-700"></div>
                    <div className="text-center">
                        <span className="block text-2xl font-black text-emerald-accent">2</span>
                        <span className="text-[10px] font-bold text-slate-500 uppercase tracking-widest">Certificates Earned</span>
                    </div>
                </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
                {/* Main Content Area */}
                <div className="lg:col-span-2 space-y-12">

                    {/* Continue Learning */}
                    <section>
                        <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
                            <span className="material-symbols-outlined text-primary">play_circle</span>
                            Continue Learning
                        </h2>

                        <div className="bg-white dark:bg-slate-800 rounded-2xl border border-slate-100 dark:border-slate-700 p-6 flex flex-col sm:flex-row items-center gap-6 shadow-sm hover:shadow-md transition-shadow">
                            <div
                                className="w-full sm:w-48 aspect-video bg-cover bg-center rounded-xl shrink-0"
                                style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuBSBZpRU4QdwS843qiC85GxZ0VPwLxbsM4sNKLpuVyinEpTCPYutWlaT1hp-rJW3_QRbacmk-Ig5Vm25E9nFy2jFUBt0rypcc0T2vhYDwn14Q_o8ZfMT2kIaRXSGDHKjmQMdDMAMrAe-fx58LLgmaw-vEh9iot_LCLgua_82zh-gW4vx4kOvh4Bzs-4uVfJClqwgJFeR0MjqKtnVGo4_JUpeAuN0r-5l3M4_e0OwcRZ4bG54w2VIwEAqRqhI3PUBq_vGubTuvtD-w')" }}
                            ></div>
                            <div className="flex-1 w-full space-y-3">
                                <p className="text-xs font-bold text-primary uppercase tracking-widest">Design</p>
                                <h3 className="text-lg font-bold">Advanced UI/UX Design Mastery</h3>
                                <p className="text-sm text-slate-500">Module 3: Visual Hierarchy & Layouts</p>
                                <div className="flex items-center gap-4">
                                    <div className="flex-1 h-2 bg-slate-100 dark:bg-slate-700 rounded-full overflow-hidden">
                                        <div className="h-full bg-emerald-accent w-[65%]"></div>
                                    </div>
                                    <span className="text-xs font-bold text-emerald-accent">65%</span>
                                </div>
                            </div>
                            <Link href="/courses/1/lessons/lesson-1" className="w-full sm:w-auto shrink-0 bg-primary text-background-dark font-bold px-6 py-3 rounded-xl hover:brightness-105 transition-all text-center">
                                Resume
                            </Link>
                        </div>
                    </section>

                    {/* My Courses Enrolled */}
                    <section>
                        <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
                            <span className="material-symbols-outlined text-primary">library_books</span>
                            My Courses
                        </h2>

                        <div className="grid sm:grid-cols-2 gap-6">
                            {[1, 2].map(i => (
                                <div key={i} className="bg-white dark:bg-slate-800 rounded-2xl border border-slate-100 dark:border-slate-700 p-5 flex flex-col">
                                    <h3 className="font-bold mb-2">Digital Marketing Strategy</h3>
                                    <div className="flex items-center gap-2 mb-4">
                                        <div className="flex-1 h-1.5 bg-slate-100 dark:bg-slate-700 rounded-full overflow-hidden">
                                            <div className="h-full bg-emerald-accent w-[15%]"></div>
                                        </div>
                                        <span className="text-xs font-bold text-slate-500">15%</span>
                                    </div>
                                    <Link href="/courses/2" className="mt-auto text-sm font-bold text-primary hover:text-primary/80 transition-colors">
                                        View Details →
                                    </Link>
                                </div>
                            ))}
                        </div>
                    </section>

                    {/* Certificates */}
                    <section>
                        <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
                            <span className="material-symbols-outlined text-primary">workspace_premium</span>
                            Certificates
                        </h2>

                        <div className="bg-white dark:bg-slate-800 rounded-2xl border border-slate-100 dark:border-slate-700 p-5 flex flex-col sm:flex-row justify-between items-center shadow-sm gap-4">
                            <div className="flex items-center gap-4 w-full sm:w-auto">
                                <div className="size-12 rounded-lg bg-emerald-accent/10 text-emerald-accent flex items-center justify-center">
                                    <span className="material-symbols-outlined">workspace_premium</span>
                                </div>
                                <div>
                                    <h3 className="font-bold text-sm">Data Science Foundations</h3>
                                    <p className="text-xs text-slate-500">Issued Oct 24, 2024</p>
                                </div>
                            </div>
                            <Link href="/certificates/certificate-123" className="text-sm font-bold text-slate-700 dark:text-slate-300 border border-slate-300 dark:border-slate-600 px-4 py-2 rounded-lg hover:bg-slate-50 dark:hover:bg-slate-700 w-full sm:w-auto text-center transition-colors">
                                View Certificate
                            </Link>
                        </div>
                    </section>
                </div>

                {/* Right Sidebar */}
                <div className="space-y-8">
                    {/* Subscription Status */}
                    <div className="bg-gradient-to-br from-slate-900 to-slate-800 rounded-2xl p-6 text-white border border-slate-700 shadow-xl shadow-slate-900/10">
                        <h3 className="font-bold text-lg mb-1 flex items-center gap-2">
                            <span className="material-symbols-outlined text-primary">star</span>
                            Builder Pro
                        </h3>
                        <p className="text-sm text-slate-400 mb-6 border-b border-slate-700 pb-4">Active Plan</p>

                        <div className="space-y-3 mb-6">
                            <p className="text-sm flex justify-between">
                                <span className="text-slate-400">Next billing date</span>
                                <span className="font-semibold">Nov 24, 2024</span>
                            </p>
                            <p className="text-sm flex justify-between">
                                <span className="text-slate-400">Payment method</span>
                                <span className="font-semibold">•••• 4242</span>
                            </p>
                        </div>

                        <button className="w-full py-2 bg-white/10 hover:bg-white/20 transition-colors rounded-lg text-sm font-bold">
                            Manage Subscription
                        </button>
                    </div>

                    {/* Recent Quiz Results */}
                    <div className="bg-white dark:bg-slate-800 rounded-2xl border border-slate-100 dark:border-slate-700 p-6">
                        <h3 className="font-bold text-lg mb-4">Quiz Results</h3>

                        <div className="space-y-4">
                            <div className="flex justify-between items-center">
                                <div>
                                    <p className="text-sm font-bold">Module 2 Final Quiz</p>
                                    <p className="text-xs text-slate-500">Advanced UI/UX Design</p>
                                </div>
                                <div className="bg-emerald-accent/10 text-emerald-accent px-3 py-1 rounded-full text-xs font-bold">
                                    100%
                                </div>
                            </div>
                            <div className="flex justify-between items-center">
                                <div>
                                    <p className="text-sm font-bold">Module 1 Basics</p>
                                    <p className="text-xs text-slate-500">Advanced UI/UX Design</p>
                                </div>
                                <div className="bg-emerald-accent/10 text-emerald-accent px-3 py-1 rounded-full text-xs font-bold">
                                    85%
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
