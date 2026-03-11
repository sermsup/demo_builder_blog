import Link from 'next/link';
import { featuredCourses } from '@/lib/data';
import { courseCurriculum } from '@/lib/curriculum';

export default function CourseDetail({ params }: { params: { id: string } }) {
    const course = featuredCourses.find(c => c.id === params.id) || featuredCourses[0];

    return (
        <div className="max-w-7xl mx-auto px-6 lg:px-20 py-10">
            {/* Hero Section */}
            <section className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-start mb-16">
                <div className="lg:col-span-2 space-y-6">
                    {course.badge && (
                        <div className="inline-flex items-center gap-2 px-3 py-1 bg-primary/20 text-primary rounded-full text-xs font-bold uppercase tracking-wider">
                            <span className="material-symbols-outlined text-sm">workspace_premium</span>
                            {course.badge}
                        </div>
                    )}
                    <h1 className="text-4xl md:text-5xl font-extrabold text-slate-900 dark:text-slate-100 leading-tight">
                        {course.title}
                    </h1>
                    <p className="text-lg text-slate-600 dark:text-slate-400 max-w-2xl">
                        Take your AI building skills to the next level. Learn to integrate LLMs, build scalable applications, and ship real products.
                    </p>

                    <div className="flex flex-wrap items-center gap-6 text-sm text-slate-500 dark:text-slate-400">
                        <div className="flex items-center gap-2">
                            <div className="size-8 rounded-full border-2 border-primary bg-slate-300"></div>
                            <span className="font-semibold text-slate-900 dark:text-slate-100">Jane Doe</span>
                        </div>
                        <div className="flex items-center gap-1 text-primary">
                            <span className="material-symbols-outlined fill-1 text-base">star</span>
                            <span className="font-bold">{course.rating}</span>
                            <span className="text-slate-500">(12,450 ratings)</span>
                        </div>
                        <div className="flex items-center gap-1">
                            <span className="material-symbols-outlined text-base">group</span>
                            <span>45k students</span>
                        </div>
                    </div>

                    <div className="flex flex-wrap gap-4 pt-4">
                        <Link href={`/courses/${course.id}/lessons/intro-1`} className="px-8 py-4 bg-primary hover:bg-primary/90 text-background-dark font-bold rounded-xl transition-all shadow-lg shadow-primary/20 flex items-center gap-2">
                            <span className="material-symbols-outlined">shopping_cart</span>
                            Enroll Now - ${course.price}
                        </Link>
                        <button className="px-8 py-4 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 hover:border-primary text-slate-900 dark:text-slate-100 font-bold rounded-xl transition-all">
                            Wishlist
                        </button>
                    </div>
                </div>

                <div className="lg:col-span-1">
                    <div className="relative rounded-2xl overflow-hidden border-4 border-white dark:border-slate-800 shadow-2xl group">
                        <div className="aspect-video bg-slate-200 dark:bg-slate-700 relative">
                            <div
                                className="w-full h-full bg-cover bg-center"
                                style={{ backgroundImage: `url('${course.thumbnail}')` }}
                            ></div>
                            <div className="absolute inset-0 flex items-center justify-center bg-black/40 group-hover:bg-black/20 transition-all cursor-pointer">
                                <span className="material-symbols-outlined text-6xl text-white">play_circle</span>
                            </div>
                        </div>
                        <div className="p-6 bg-white dark:bg-slate-800 border-t border-slate-100 dark:border-slate-700">
                            <p className="text-center text-slate-500 text-sm font-medium">Preview this course</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Main Content Area */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
                {/* Left Column: Curriculum & Description */}
                <div className="lg:col-span-2 space-y-12">

                    {/* Navigation Tabs */}
                    <div className="border-b border-slate-200 dark:border-slate-700 sticky top-[73px] bg-background-light/95 dark:bg-background-dark/95 z-40 py-2">
                        <div className="flex gap-8 overflow-x-auto no-scrollbar">
                            <a href="#overview" className="pb-3 border-b-2 border-primary text-primary font-bold text-sm whitespace-nowrap">Overview</a>
                            <a href="#curriculum" className="pb-3 border-b-2 border-transparent text-slate-500 dark:text-slate-400 hover:text-primary transition-colors font-bold text-sm whitespace-nowrap">Curriculum</a>
                            <a href="#instructor" className="pb-3 border-b-2 border-transparent text-slate-500 dark:text-slate-400 hover:text-primary transition-colors font-bold text-sm whitespace-nowrap">Instructor</a>
                            <a href="#reviews" className="pb-3 border-b-2 border-transparent text-slate-500 dark:text-slate-400 hover:text-primary transition-colors font-bold text-sm whitespace-nowrap">Reviews</a>
                        </div>
                    </div>

                    {/* Overview */}
                    <div id="overview" className="p-8 bg-white dark:bg-slate-800 rounded-2xl border border-slate-100 dark:border-slate-700">
                        <h3 className="text-xl font-bold mb-6">What you&apos;ll learn</h3>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div className="flex gap-3">
                                <span className="material-symbols-outlined text-primary shrink-0">check_circle</span>
                                <span className="text-slate-600 dark:text-slate-300 text-sm leading-relaxed">Build scalable AI products from scratch.</span>
                            </div>
                            <div className="flex gap-3">
                                <span className="material-symbols-outlined text-primary shrink-0">check_circle</span>
                                <span className="text-slate-600 dark:text-slate-300 text-sm leading-relaxed">Master prompt engineering and LLM integration.</span>
                            </div>
                            <div className="flex gap-3">
                                <span className="material-symbols-outlined text-primary shrink-0">check_circle</span>
                                <span className="text-slate-600 dark:text-slate-300 text-sm leading-relaxed">Implement advanced RAG and vector databases.</span>
                            </div>
                            <div className="flex gap-3">
                                <span className="material-symbols-outlined text-primary shrink-0">check_circle</span>
                                <span className="text-slate-600 dark:text-slate-300 text-sm leading-relaxed">Deploy your creations to a production environment.</span>
                            </div>
                        </div>
                    </div>

                    {/* Curriculum */}
                    <div id="curriculum">
                        <div className="flex items-center justify-between mb-6">
                            <h3 className="text-2xl font-bold">Course Curriculum</h3>
                            <span className="text-sm text-slate-500">3 sections • 8 lectures • 2h 45m total length</span>
                        </div>

                        <div className="space-y-3">
                            {courseCurriculum.map((module, i) => (
                                <details key={i} className="group bg-white dark:bg-slate-800 border border-slate-100 dark:border-slate-700 rounded-xl overflow-hidden" open={i === 0}>
                                    <summary className="flex items-center justify-between p-5 cursor-pointer hover:bg-slate-50 dark:hover:bg-slate-700/50 transition-colors">
                                        <div className="flex items-center gap-4">
                                            <span className="material-symbols-outlined text-slate-400 group-open:rotate-180 transition-transform">expand_more</span>
                                            <span className="font-bold text-slate-800 dark:text-slate-200">{module.module}</span>
                                        </div>
                                        <span className="text-sm text-slate-500">{module.lessons.length} lectures</span>
                                    </summary>
                                    <div className="p-5 pt-0 border-t border-slate-50 dark:border-slate-700 space-y-4">
                                        {module.lessons.map((lesson) => (
                                            <div key={lesson.id} className="flex items-center justify-between py-2">
                                                <div className="flex items-center gap-3">
                                                    <span className="material-symbols-outlined text-slate-400 text-lg">
                                                        {lesson.type === 'video' ? 'play_circle' : 'description'}
                                                    </span>
                                                    <Link href={`/courses/${course.id}/lessons/${lesson.id}`} className="text-sm text-slate-600 dark:text-slate-400 hover:text-primary transition-colors">
                                                        {lesson.title}
                                                    </Link>
                                                </div>
                                                {lesson.type === 'video' ? (
                                                    <span className="text-xs text-slate-400">{lesson.duration}</span>
                                                ) : (
                                                    <span className="text-xs text-slate-400">Download</span>
                                                )}
                                            </div>
                                        ))}
                                    </div>
                                </details>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Right Column: Instructor & Help */}
                <div className="space-y-8">
                    <div id="instructor" className="bg-white dark:bg-slate-800 rounded-2xl border border-slate-100 dark:border-slate-700 p-6">
                        <h4 className="text-lg font-bold mb-4">Instructor</h4>
                        <div className="flex items-center gap-4 mb-4">
                            <div className="size-16 rounded-full border-2 border-primary bg-slate-300"></div>
                            <div>
                                <p className="font-bold text-slate-900 dark:text-slate-100">Jane Doe</p>
                                <p className="text-xs text-slate-500 uppercase tracking-wide">AI Product Lead</p>
                            </div>
                        </div>
                        <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed mb-6">
                            With over 10 years of experience shipping tech products, Jane specializes in AI integrations and full-stack development.
                        </p>
                    </div>

                    <div className="bg-primary/5 rounded-2xl p-6 border-2 border-dashed border-primary/30">
                        <h5 className="font-bold mb-2">Need bulk access?</h5>
                        <p className="text-xs text-slate-500 mb-4">Get Builder Foundation for Teams and train your entire engineering team at a discount.</p>
                        <button className="text-xs font-bold text-slate-900 underline">Contact Sales</button>
                    </div>
                </div>
            </div>
        </div>
    );
}
