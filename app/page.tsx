import Link from 'next/link';
import { featuredCourses } from '@/lib/data';

export default function Home() {
  return (
    <div className="flex flex-col gap-16 pb-24">
      {/* Hero Section */}
      <section className="mx-auto max-w-7xl px-6 lg:px-20 pt-16 lg:pt-24">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="flex flex-col gap-8">
            <div className="space-y-4">

              <h1 className="text-5xl lg:text-7xl font-black leading-tight tracking-tight">
                Where AI Builders <span className="text-primary">Begin</span>
              </h1>
              <p className="text-lg text-slate-600 dark:text-slate-400 max-w-lg leading-relaxed">
                Build your own programs and turn your ideas into something usable — start creating today.
              </p>
            </div>

            <div className="flex flex-wrap gap-4">
              <Link href="/courses" className="bg-primary text-background-dark px-8 py-4 rounded-xl text-lg font-bold hover:shadow-lg hover:shadow-primary/20 transition-all text-center">
                Start Building
              </Link>

            </div>


          </div>

          <div className="relative">
            <div className="aspect-square rounded-3xl bg-primary/10 overflow-hidden shadow-2xl relative z-10 border border-primary/20">
              <div
                className="absolute inset-0 bg-cover bg-center"
                style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuDHkcHPnxEuGaHa2CSfCVtMMZGe1zSfmqKZPxtBuAHgTZVoeHDxJkJK8bQuuajtHCjDK6IS9_Qgcj8mPfarPA1_K1e06AS4oqXjOae26xulGwioG4cVVU37YHyXONCoN31fihtowgu62CKDBC5xOtluiruuUVVjpmrQF7IOOXju-T-zK_10snkNzlB6nr25_uq2m2WDH7WPlJoAFzfnT2Py-4cyUjv6Kx1sST2DrXgn735TezMhCUXRyqsA8bDLtvPHUfdCdx_9pA')" }}
              ></div>
            </div>
            <div className="absolute -bottom-6 -left-6 bg-white dark:bg-slate-800 p-6 rounded-2xl shadow-xl z-20 border border-primary/10 hidden sm:block">
              <div className="flex items-center gap-4">
                <div className="bg-primary/20 p-3 rounded-full">
                  <span className="material-symbols-outlined text-primary">rocket_launch</span>
                </div>
                <div>
                  <p className="text-xl font-bold">Beginner</p>
                  <p className="text-xs text-slate-500 uppercase font-bold tracking-widest">Friendly</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats/Benefits */}
      <section className="bg-white dark:bg-slate-900/50 py-16 border-y border-primary/5">
        <div className="mx-auto max-w-7xl px-6 lg:px-20">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div className="flex gap-4">
              <span className="material-symbols-outlined text-primary text-4xl">workspace_premium</span>
              <div>
                <h3 className="text-lg font-bold">Beginner Friendly</h3>
                <p className="text-slate-500 text-sm mt-1 leading-relaxed">Start building useful programs even if you have never written code before.</p>
              </div>
            </div>
            <div className="flex gap-4">
              <span className="material-symbols-outlined text-primary text-4xl">handyman</span>
              <div>
                <h3 className="text-lg font-bold">Practical Focus</h3>
                <p className="text-slate-500 text-sm mt-1 leading-relaxed">Less theory, more building. Every course ends with a shipped product for your portfolio.</p>
              </div>
            </div>
            <div className="flex gap-4">
              <span className="material-symbols-outlined text-primary text-4xl">all_inclusive</span>
              <div>
                <h3 className="text-lg font-bold">Lifetime Access</h3>
                <p className="text-slate-500 text-sm mt-1 leading-relaxed">Enroll once and get lifetime access to course materials, source code, and updates.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Courses */}
      <section className="mx-auto max-w-7xl px-6 lg:px-20">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tight">Featured Courses</h2>

          </div>
          <Link href="/courses" className="text-primary font-bold flex items-center gap-2 hover:underline">
            Explore all courses <span className="material-symbols-outlined">arrow_forward</span>
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuredCourses.map(course => (
            <Link href={`/courses/${course.id}`} key={course.id} className="group bg-white dark:bg-slate-800 rounded-2xl border border-primary/5 overflow-hidden hover:shadow-xl hover:shadow-primary/5 transition-all block">
              <div className="aspect-video relative overflow-hidden">
                <div
                  className="absolute inset-0 bg-cover bg-center group-hover:scale-105 transition-transform duration-500"
                  style={{ backgroundImage: `url('${course.thumbnail}')` }}
                ></div>
                {course.badge && (
                  <div className="absolute top-4 left-4 bg-primary text-background-dark text-[10px] font-black uppercase px-2 py-1 rounded">
                    {course.badge}
                  </div>
                )}
              </div>
              <div className="p-6">
                <p className="text-xs font-bold text-primary uppercase tracking-widest mb-2">{course.category}</p>
                <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors line-clamp-2 h-14">{course.title}</h3>
                <div className="flex items-center gap-2 mb-4">
                  <div className="w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center text-[10px] font-bold text-primary border border-primary/10">
                    {course.instructorAvatar}
                  </div>
                  <span className="text-xs font-medium text-slate-500">{course.instructorName}</span>
                </div>
                <div className="flex items-center justify-between border-t border-primary/5 pt-4">
                  {course.badge === 'NEW' ? (
                    <span className="text-2xl font-black text-slate-900 dark:text-slate-100">FREE</span>
                  ) : course.price > 0 ? (
                    <span className="text-2xl font-black">${course.price}</span>
                  ) : (
                    <span className="text-sm font-bold text-slate-400">Stay Tuned</span>
                  )}
                  {course.badge === 'NEW' && (
                    <button className="p-2 rounded-lg bg-primary/10 text-primary hover:bg-primary hover:text-background-dark transition-all">
                      <span className="material-symbols-outlined">add_shopping_cart</span>
                    </button>
                  )}
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>






    </div>
  );
}
