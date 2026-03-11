import Link from 'next/link';
import { featuredCourses } from '@/lib/data';

export default function CourseCatalog() {
    return (
        <div className="max-w-7xl mx-auto px-6 lg:px-20 py-8">
            <div className="flex flex-col md:flex-row gap-8">

                {/* Sidebar Filters */}
                <aside className="w-full md:w-64 shrink-0 space-y-8">
                    <div>
                        <h3 className="text-lg font-bold mb-4 flex items-center gap-2">
                            <span className="material-symbols-outlined text-primary">filter_list</span>
                            Filters
                        </h3>

                        {/* Categories */}
                        <div className="space-y-4">
                            <p className="text-xs font-semibold uppercase tracking-wider text-slate-500">Category</p>
                            <div className="flex flex-col gap-2">
                                {['All Categories', 'Design', 'Development', 'Business'].map((cat, i) => (
                                    <label key={i} className="flex items-center gap-3 cursor-pointer group">
                                        <div className={`w-5 h-5 rounded border-2 border-primary/30 group-hover:border-primary flex items-center justify-center transition-colors`}>
                                            <div className={`w-2.5 h-2.5 bg-primary rounded-sm transition-opacity ${i === 0 ? 'opacity-100' : 'opacity-0'}`}></div>
                                        </div>
                                        <input type="checkbox" className="hidden" defaultChecked={i === 0} />
                                        <span className="text-sm font-medium">{cat}</span>
                                    </label>
                                ))}
                            </div>
                        </div>

                        {/* Level */}
                        <div className="space-y-4">
                            <p className="text-xs font-semibold uppercase tracking-wider text-slate-500">Level</p>
                            <div className="flex flex-wrap gap-2">
                                <button className="px-3 py-1.5 rounded-lg bg-primary text-background-dark text-xs font-bold">All</button>
                                <button className="px-3 py-1.5 rounded-lg bg-primary/10 hover:bg-primary/20 text-xs font-bold transition-colors">Beginner</button>
                                <button className="px-3 py-1.5 rounded-lg bg-primary/10 hover:bg-primary/20 text-xs font-bold transition-colors">Intermediate</button>
                                <button className="px-3 py-1.5 rounded-lg bg-primary/10 hover:bg-primary/20 text-xs font-bold transition-colors">Expert</button>
                            </div>
                        </div>

                        {/* Price Range */}
                        <div className="space-y-4">
                            <p className="text-xs font-semibold uppercase tracking-wider text-slate-500">Price Range</p>
                            <div className="px-2">
                                <input type="range" className="w-full accent-primary bg-primary/20 h-1.5 rounded-full appearance-none cursor-pointer" />
                                <div className="flex justify-between mt-2 text-xs font-medium text-slate-500">
                                    <span>Free</span>
                                    <span>$200+</span>
                                </div>
                            </div>
                        </div>

                        <div className="pt-4 border-t border-primary/10">
                            <button className="w-full py-3 bg-primary text-background-dark font-bold rounded-lg shadow-lg shadow-primary/20 hover:scale-[1.02] active:scale-95 transition-all">
                                Apply Filters
                            </button>
                        </div>
                    </div>
                </aside>

                {/* Course Grid */}
                <section className="flex-1">
                    <div className="flex items-center justify-between mb-8">
                        <div>
                            <h1 className="text-3xl font-bold mb-1">Course Catalog</h1>
                            <p className="text-slate-500 text-sm">Discover top practical courses by AI builders</p>
                        </div>
                        <div className="flex items-center gap-2 bg-primary/10 p-1 rounded-lg">
                            <button className="p-2 rounded-md bg-primary text-background-dark shadow-sm">
                                <span className="material-symbols-outlined">grid_view</span>
                            </button>
                            <button className="p-2 rounded-md hover:bg-primary/10">
                                <span className="material-symbols-outlined">view_list</span>
                            </button>
                        </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                        {featuredCourses.map(course => (
                            <Link href={`/courses/${course.id}`} key={course.id} className="group bg-white dark:bg-background-dark/50 border border-primary/10 rounded-xl overflow-hidden hover:shadow-xl hover:shadow-primary/5 transition-all duration-300 block">
                                <div className="relative aspect-video overflow-hidden">
                                    <div
                                        className="absolute inset-0 bg-cover bg-center group-hover:scale-105 transition-transform duration-500"
                                        style={{ backgroundImage: `url('${course.thumbnail}')` }}
                                    ></div>
                                    <div className="absolute top-3 left-3 bg-primary text-background-dark text-[10px] font-bold px-2 py-1 rounded uppercase tracking-wider">{course.category}</div>
                                    <button className="absolute top-3 right-3 p-1.5 rounded-full bg-white/20 backdrop-blur-md text-white hover:bg-primary transition-colors">
                                        <span className="material-symbols-outlined text-sm">favorite</span>
                                    </button>
                                </div>
                                <div className="p-5">
                                    <div className="flex items-center gap-2 mb-2">
                                        <span className="material-symbols-outlined text-primary text-sm">star</span>
                                        <span className="text-sm font-bold">{course.rating}</span>
                                        <span className="text-xs text-slate-500">(1.2k reviews)</span>
                                    </div>
                                    <h3 className="text-lg font-bold leading-tight group-hover:text-primary transition-colors line-clamp-2 h-12 mb-4">{course.title}</h3>
                                    <div className="flex items-center gap-3 mb-4">
                                        <div className="size-8 rounded-full bg-primary/20 flex items-center justify-center overflow-hidden">
                                            <div className="w-full h-full bg-slate-300"></div>
                                        </div>
                                        <span className="text-xs font-medium text-slate-500">Instructor Name</span>
                                    </div>
                                    <div className="flex items-center justify-between border-t border-primary/5 pt-4">
                                        <span className="text-xl font-bold text-primary">${course.price}</span>
                                        <button className="p-2 rounded-lg bg-primary/10 text-primary hover:bg-primary hover:text-background-dark transition-all">
                                            <span className="material-symbols-outlined">add_shopping_cart</span>
                                        </button>
                                    </div>
                                </div>
                            </Link>
                        ))}
                        {/* Duplicate courses for UI padding */}
                        {featuredCourses.map(course => (
                            <Link href={`/courses/${course.id}`} key={`${course.id}-dup`} className="group bg-white dark:bg-background-dark/50 border border-primary/10 rounded-xl overflow-hidden hover:shadow-xl hover:shadow-primary/5 transition-all duration-300 block">
                                <div className="relative aspect-video overflow-hidden">
                                    <div
                                        className="absolute inset-0 bg-cover bg-center group-hover:scale-105 transition-transform duration-500"
                                        style={{ backgroundImage: `url('${course.thumbnail}')` }}
                                    ></div>
                                    <div className="absolute top-3 left-3 bg-primary text-background-dark text-[10px] font-bold px-2 py-1 rounded uppercase tracking-wider">{course.category}</div>
                                </div>
                                <div className="p-5">
                                    <h3 className="text-lg font-bold leading-tight group-hover:text-primary transition-colors line-clamp-2 h-12 mb-4">{course.title} Part 2</h3>
                                    <div className="flex items-center justify-between border-t border-primary/5 pt-4">
                                        <span className="text-xl font-bold text-primary">${course.price}</span>
                                    </div>
                                </div>
                            </Link>
                        ))}
                    </div>

                    {/* Pagination */}
                    <div className="mt-12 flex justify-center">
                        <nav className="flex items-center gap-1">
                            <button className="size-10 flex items-center justify-center rounded-lg bg-primary/10 text-slate-600 hover:bg-primary hover:text-background-dark transition-colors">
                                <span className="material-symbols-outlined">chevron_left</span>
                            </button>
                            <button className="size-10 flex items-center justify-center rounded-lg bg-primary text-background-dark font-bold">1</button>
                            <button className="size-10 flex items-center justify-center rounded-lg bg-primary/10 text-slate-600 hover:bg-primary hover:text-background-dark transition-colors font-bold">2</button>
                            <button className="size-10 flex items-center justify-center rounded-lg bg-primary/10 text-slate-600 hover:bg-primary hover:text-background-dark transition-colors font-bold">3</button>
                            <span className="px-2 text-slate-400">...</span>
                            <button className="size-10 flex items-center justify-center rounded-lg bg-primary/10 text-slate-600 hover:bg-primary hover:text-background-dark transition-colors">
                                <span className="material-symbols-outlined">chevron_right</span>
                            </button>
                        </nav>
                    </div>
                </section>
            </div>
        </div>
    );
}
