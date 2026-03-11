import Link from 'next/link';
import { featuredCourses, testimonials } from '@/lib/data';

export default function Home() {
  return (
    <div className="flex flex-col gap-16 pb-24">
      {/* Hero Section */}
      <section className="mx-auto max-w-7xl px-6 lg:px-20 pt-16 lg:pt-24">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="flex flex-col gap-8">
            <div className="space-y-4">
              <span className="inline-block px-3 py-1 bg-primary/20 text-primary text-xs font-bold uppercase tracking-wider rounded-full">
                Ship Real Products
              </span>
              <h1 className="text-5xl lg:text-7xl font-black leading-tight tracking-tight">
                Where AI Builders <span className="text-primary">Begin</span>
              </h1>
              <p className="text-lg text-slate-600 dark:text-slate-400 max-w-lg leading-relaxed">
                Unlock your potential with expert-led practical courses designed for professional growth, technical mastery, and shipping AI products.
              </p>
            </div>

            <div className="flex flex-wrap gap-4">
              <Link href="/courses" className="bg-primary text-background-dark px-8 py-4 rounded-xl text-lg font-bold hover:shadow-lg hover:shadow-primary/20 transition-all text-center">
                Start Building
              </Link>
              <Link href="/courses" className="border border-primary/20 bg-white/50 dark:bg-white/5 px-8 py-4 rounded-xl text-lg font-bold hover:bg-primary/5 transition-all text-center">
                View Curriculum
              </Link>
            </div>

            <div className="flex items-center gap-4 pt-4">
              <div className="flex -space-x-3">
                <div className="w-10 h-10 rounded-full border-2 border-background-light bg-slate-200"></div>
                <div className="w-10 h-10 rounded-full border-2 border-background-light bg-slate-300"></div>
                <div className="w-10 h-10 rounded-full border-2 border-background-light bg-slate-400"></div>
              </div>
              <p className="text-sm font-medium text-slate-500">Joined by 12,000+ ambitious builders</p>
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
                  <p className="text-xl font-bold">100+</p>
                  <p className="text-xs text-slate-500 uppercase font-bold tracking-widest">Products Shipped</p>
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
                <h3 className="text-lg font-bold">Expert Builders</h3>
                <p className="text-slate-500 text-sm mt-1 leading-relaxed">Learn from top industry professionals and founders who have shipped real products.</p>
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
            <p className="text-slate-500">Pick from our highest-rated practical programs.</p>
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
                <div className="flex items-center gap-1 text-primary mb-4">
                  {[...Array(Math.floor(course.rating))].map((_, i) => (
                    <span key={i} className="material-symbols-outlined text-sm fill-1">star</span>
                  ))}
                  {course.rating % 1 !== 0 && <span className="material-symbols-outlined text-sm">star_half</span>}
                  <span className="text-slate-400 text-xs ml-1">({course.rating})</span>
                </div>
                <div className="flex items-center justify-between border-t border-primary/5 pt-4">
                  <span className="text-2xl font-black">${course.price}</span>
                  <button className="p-2 rounded-lg bg-primary/10 text-primary hover:bg-primary hover:text-background-dark transition-all">
                    <span className="material-symbols-outlined">add_shopping_cart</span>
                  </button>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* Testimonials */}
      <section className="bg-primary/5 py-24 my-8">
        <div className="mx-auto max-w-7xl px-6 lg:px-20 text-center">
          <h2 className="text-3xl font-bold mb-4">Loved by 12,000+ Builders</h2>
          <p className="text-slate-500 mb-16 max-w-xl mx-auto">See what our community has to say about their learning and shipping practical experience.</p>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 text-left">
            {testimonials.map(testimonial => (
              <div key={testimonial.id} className="bg-white dark:bg-slate-800 p-8 rounded-2xl shadow-sm border border-primary/5 flex flex-col h-full">
                <div className="flex gap-1 text-primary mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <span key={i} className="material-symbols-outlined fill-1 text-sm">star</span>
                  ))}
                </div>
                <p className="text-slate-600 dark:text-slate-400 italic mb-6 flex-1">&quot;{testimonial.comment}&quot;</p>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-slate-200 uppercase flex items-center justify-center font-bold text-slate-500">
                    {testimonial.name.charAt(0)}
                  </div>
                  <div>
                    <h4 className="font-bold text-sm">{testimonial.name}</h4>
                    <p className="text-xs text-slate-500">{testimonial.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Teaser */}
      <section className="mx-auto max-w-7xl px-6 lg:px-20 text-center">
        <div className="bg-white dark:bg-slate-900 border-2 border-primary/20 rounded-3xl p-12 max-w-3xl mx-auto shadow-2xl shadow-primary/5 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-primary/10 rounded-full blur-3xl translate-x-1/2 -translate-y-1/2"></div>

          <div className="relative z-10">
            <h2 className="text-3xl font-black mb-4">Go Pro. Ship Faster.</h2>
            <p className="text-slate-500 mb-8 max-w-lg mx-auto">
              Get unlimited access to all specific courses, source code templates, and our private builder community.
            </p>
            <div className="flex items-baseline justify-center gap-2 mb-8">
              <span className="text-5xl font-black">$29</span>
              <span className="text-slate-400 font-medium">/ month</span>
            </div>
            <Link href="/pricing" className="inline-block bg-primary text-background-dark px-10 py-4 rounded-xl font-bold hover:brightness-110 transition-all text-lg shadow-lg shadow-primary/20">
              View Pricing Options
            </Link>
          </div>
        </div>
      </section>

      {/* Newsletter CTA */}
      <section className="mx-auto max-w-7xl px-6 lg:px-20">
        <div className="bg-background-dark dark:bg-primary/10 rounded-3xl p-12 text-center relative overflow-hidden">
          <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-primary via-transparent to-transparent"></div>
          <div className="relative z-10 space-y-6">
            <h2 className="text-3xl font-bold text-white dark:text-slate-100">Ready to start your journey?</h2>
            <p className="text-slate-400 max-w-md mx-auto">Get monthly tips on AI product building and exclusive discounts on new courses.</p>

            <form className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 rounded-xl bg-white/10 border-white/20 text-white placeholder:text-slate-400 focus:border-primary focus:ring-1 focus:ring-primary px-4 py-3 outline-none"
              />
              <button type="button" className="bg-primary text-background-dark px-8 py-3 rounded-xl font-bold hover:brightness-110 transition-all">
                Subscribe
              </button>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
}
