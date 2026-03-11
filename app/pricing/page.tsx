import Link from 'next/link';

export default function Pricing() {
    return (
        <div className="flex flex-col min-h-screen">
            <section className="mx-auto max-w-7xl px-6 lg:px-20 py-24 text-center space-y-4">
                <h1 className="text-4xl md:text-5xl font-black">Invest in Your Career</h1>
                <p className="text-slate-500 max-w-2xl mx-auto text-lg leading-relaxed">
                    Join thousands of AI builders who have shipped real products. Choose a plan that fits your goals and get lifetime access.
                </p>
            </section>

            <section className="mx-auto max-w-7xl px-6 lg:px-20 pb-24">
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
                    {/* Starter Plan */}
                    <div className="p-8 rounded-3xl border border-primary/10 bg-white dark:bg-slate-900 flex flex-col">
                        <div className="mb-8">
                            <h3 className="text-xl font-bold mb-4">Single Course</h3>
                            <div className="flex items-baseline gap-1">
                                <span className="text-4xl font-black">From $49</span>
                            </div>
                        </div>
                        <ul className="space-y-4 mb-8 flex-1">
                            <li className="flex items-center gap-2 text-sm">
                                <span className="material-symbols-outlined text-primary text-xl gap-2">check_circle</span> Lifetime access to specific course
                            </li>
                            <li className="flex items-center gap-2 text-sm">
                                <span className="material-symbols-outlined text-primary text-xl">check_circle</span> Downloadable resources
                            </li>
                            <li className="flex items-center gap-2 text-sm">
                                <span className="material-symbols-outlined text-primary text-xl">check_circle</span> Course certificate upon completion
                            </li>
                        </ul>
                        <Link href="/courses" className="w-full py-3 border border-primary/20 rounded-xl font-bold hover:bg-primary/5 transition-all text-center">
                            Browse Courses
                        </Link>
                    </div>

                    {/* Pro Plan (Highlighted) */}
                    <div className="p-8 rounded-3xl border-2 border-primary bg-white dark:bg-slate-900 flex flex-col relative scale-105 shadow-2xl shadow-primary/10">
                        <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-primary text-background-dark px-4 py-1 rounded-full text-[10px] font-black uppercase tracking-widest">
                            Most Popular
                        </div>
                        <div className="mb-8">
                            <h3 className="text-xl font-bold mb-4">Builder Pro</h3>
                            <div className="flex items-baseline gap-1">
                                <span className="text-4xl font-black">$29</span>
                                <span className="text-slate-400">/month</span>
                            </div>
                        </div>
                        <ul className="space-y-4 mb-8 flex-1">
                            <li className="flex items-center gap-2 text-sm">
                                <span className="material-symbols-outlined text-primary text-xl">check_circle</span> <b>Unlimited</b> access to ALL courses
                            </li>
                            <li className="flex items-center gap-2 text-sm">
                                <span className="material-symbols-outlined text-primary text-xl">check_circle</span> New courses added every month
                            </li>
                            <li className="flex items-center gap-2 text-sm">
                                <span className="material-symbols-outlined text-primary text-xl">check_circle</span> Member-only Discord community
                            </li>
                            <li className="flex items-center gap-2 text-sm">
                                <span className="material-symbols-outlined text-primary text-xl">check_circle</span> Priority support
                            </li>
                            <li className="flex items-center gap-2 text-sm">
                                <span className="material-symbols-outlined text-primary text-xl">check_circle</span> Source code repository access
                            </li>
                        </ul>
                        <button className="w-full py-3 bg-primary text-background-dark rounded-xl font-bold hover:brightness-110 transition-all">
                            Start 7-Day Free Trial
                        </button>
                    </div>

                    {/* Team Plan */}
                    <div className="p-8 rounded-3xl border border-primary/10 bg-white dark:bg-slate-900 flex flex-col">
                        <div className="mb-8">
                            <h3 className="text-xl font-bold mb-4">Enterprise</h3>
                            <div className="flex items-baseline gap-1">
                                <span className="text-4xl font-black">Custom</span>
                            </div>
                        </div>
                        <ul className="space-y-4 mb-8 flex-1">
                            <li className="flex items-center gap-2 text-sm">
                                <span className="material-symbols-outlined text-primary text-xl">check_circle</span> Team analytics dashboard
                            </li>
                            <li className="flex items-center gap-2 text-sm">
                                <span className="material-symbols-outlined text-primary text-xl">check_circle</span> SSO & Advanced Security
                            </li>
                            <li className="flex items-center gap-2 text-sm">
                                <span className="material-symbols-outlined text-primary text-xl">check_circle</span> Dedicated success manager
                            </li>
                            <li className="flex items-center gap-2 text-sm">
                                <span className="material-symbols-outlined text-primary text-xl">check_circle</span> Volume discounts
                            </li>
                        </ul>
                        <button className="w-full py-3 border border-primary/20 rounded-xl font-bold hover:bg-primary/5 transition-all">
                            Contact Sales
                        </button>
                    </div>
                </div>
            </section>

            {/* FAQ Teaser */}
            <section className="bg-primary/5 py-24 mb-16">
                <div className="mx-auto max-w-4xl px-6 lg:px-20 text-center">
                    <h2 className="text-3xl font-bold mb-8">Frequently Asked Questions</h2>
                    <div className="space-y-4 text-left">
                        <details className="bg-white dark:bg-slate-800 p-6 rounded-2xl border border-slate-100 dark:border-slate-700 cursor-pointer group">
                            <summary className="font-bold flex items-center justify-between">
                                Can I cancel my subscription anytime?
                                <span className="material-symbols-outlined text-primary group-open:rotate-180 transition-transform">expand_more</span>
                            </summary>
                            <p className="mt-4 text-slate-500 text-sm leading-relaxed">Yes, you can cancel your Builder Pro subscription at any time. You will retain access to the platform until the end of your current billing cycle.</p>
                        </details>
                        <details className="bg-white dark:bg-slate-800 p-6 rounded-2xl border border-slate-100 dark:border-slate-700 cursor-pointer group">
                            <summary className="font-bold flex items-center justify-between">
                                Do I keep access to courses if I buy them individually?
                                <span className="material-symbols-outlined text-primary group-open:rotate-180 transition-transform">expand_more</span>
                            </summary>
                            <p className="mt-4 text-slate-500 text-sm leading-relaxed">Yes, any individual course you purchase comes with full lifetime access, including future updates to that specific course.</p>
                        </details>
                    </div>
                </div>
            </section>
        </div>
    );
}
