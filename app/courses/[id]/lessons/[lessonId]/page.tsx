import Link from 'next/link';
import { featuredCourses } from '@/lib/data';
import { courseCurriculum } from '@/lib/curriculum';

export default function LessonPlayer({ params }: { params: { id: string, lessonId: string } }) {
    const course = featuredCourses.find(c => c.id === params.id) || featuredCourses[0];

    // Find current lesson
    let currentLesson = null;
    for (const courseModule of courseCurriculum) {
        const found = courseModule.lessons.find(l => l.id === params.lessonId);
        if (found) {
            currentLesson = found;
            break;
        }
    }

    if (!currentLesson) {
        currentLesson = courseCurriculum[0].lessons[0];
    }

    return (
        <div className="flex flex-col lg:flex-row h-full">
            {/* Left Column: Video Player & Content */}
            <div className="flex-1 overflow-y-auto bg-white dark:bg-slate-900/50 p-4 md:p-8">
                <div className="mx-auto max-w-5xl space-y-8">

                    {/* Video Player */}
                    {currentLesson.type === 'video' ? (
                        <div className="group relative aspect-video overflow-hidden rounded-xl bg-slate-900 shadow-2xl ring-1 ring-slate-200 dark:ring-slate-800">
                            <div
                                className="absolute inset-0 flex items-center justify-center bg-cover bg-center opacity-80"
                                style={{ backgroundImage: `url('${course.thumbnail}')` }}
                            >
                                <button className="group-hover:scale-110 flex h-20 w-20 items-center justify-center rounded-full bg-primary text-background-dark shadow-xl transition-transform">
                                    <span className="material-symbols-outlined text-4xl leading-none">play_arrow</span>
                                </button>
                            </div>

                            <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/80 to-transparent p-6 opacity-0 transition-opacity group-hover:opacity-100">
                                <div className="flex flex-col gap-3">
                                    <div className="relative h-1.5 w-full overflow-hidden rounded-full bg-white/20">
                                        <div className="absolute h-full w-1/3 bg-emerald-accent"></div>
                                    </div>
                                    <div className="flex items-center justify-between text-white">
                                        <div className="flex items-center gap-4">
                                            <span className="material-symbols-outlined cursor-pointer">pause</span>
                                            <span className="material-symbols-outlined cursor-pointer">volume_up</span>
                                            <span className="text-sm font-medium">04:12 / {currentLesson.duration}</span>
                                        </div>
                                        <div className="flex items-center gap-4">
                                            <span className="material-symbols-outlined cursor-pointer">closed_caption</span>
                                            <span className="material-symbols-outlined cursor-pointer">settings</span>
                                            <span className="material-symbols-outlined cursor-pointer">fullscreen</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ) : (
                        <div className="aspect-video bg-slate-100 dark:bg-slate-800 rounded-xl flex flex-col items-center justify-center p-8 text-center border-2 border-dashed border-slate-300 dark:border-slate-700">
                            <span className="material-symbols-outlined text-6xl text-slate-400 mb-4">description</span>
                            <h3 className="text-xl font-bold mb-2">Reading Material</h3>
                            <p className="text-slate-500 mb-6 max-w-md">This lesson contains document resources you need to review before moving forward.</p>
                            <button className="flex items-center gap-2 rounded-lg bg-primary px-6 py-3 text-sm font-bold text-background-dark shadow-sm hover:brightness-105 transition-all">
                                <span className="material-symbols-outlined text-sm">download</span>
                                Download Assets
                            </button>
                        </div>
                    )}

                    {/* Lesson Info */}
                    <div className="flex flex-col gap-4 border-b border-slate-200 dark:border-slate-800 pb-8">
                        <div className="flex flex-wrap items-center justify-between gap-4">
                            <h1 className="text-3xl font-bold tracking-tight">{currentLesson.title}</h1>
                            <div className="flex gap-3">
                                <button className="flex items-center gap-2 rounded-lg border border-slate-200 dark:border-slate-700 px-4 py-2 text-sm font-semibold hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors">
                                    <span className="material-symbols-outlined text-sm">download</span>
                                    Resources
                                </button>
                                <Link href={`/quiz`} className="flex items-center gap-2 rounded-lg bg-primary px-6 py-2 text-sm font-bold text-background-dark shadow-sm hover:brightness-105 transition-all">
                                    Complete Lesson
                                </Link>
                            </div>
                        </div>
                        <p className="max-w-3xl text-lg leading-relaxed text-slate-600 dark:text-slate-400">
                            In this lesson, we dive deep into the core principles required to build AI features successfully. Pay close attention to the architecture patterns we establish here, as they&apos;ll be used throughout the course.
                        </p>
                    </div>

                    {/* Additional Content / Tabs */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        <div className="md:col-span-2 space-y-6">
                            <h3 className="text-xl font-bold">Notes from the Instructor</h3>
                            <div className="prose dark:prose-invert max-w-none text-slate-600 dark:text-slate-400">
                                <p>This module focuses on the practical application. Make sure to download the exercise file from the resources tab before starting the challenge.</p>
                                <ul className="list-disc pl-5 space-y-2 mt-4">
                                    <li>Why architecture matters for AI apps.</li>
                                    <li>Balancing API costs and performance.</li>
                                    <li>Prompt security and rate limiting best practices.</li>
                                </ul>
                            </div>
                        </div>

                        <div className="rounded-xl bg-slate-100 dark:bg-slate-800/50 p-6">
                            <h4 className="mb-4 font-bold">Quick Links</h4>
                            <div className="space-y-3">
                                <a href="#" className="flex items-center gap-2 text-sm text-slate-600 dark:text-slate-400 hover:text-primary">
                                    <span className="material-symbols-outlined text-base">link</span>
                                    Code Repository
                                </a>
                                <a href="#" className="flex items-center gap-2 text-sm text-slate-600 dark:text-slate-400 hover:text-primary">
                                    <span className="material-symbols-outlined text-base">link</span>
                                    API Documentation
                                </a>
                                <a href="#" className="flex items-center gap-2 text-sm text-slate-600 dark:text-slate-400 hover:text-primary">
                                    <span className="material-symbols-outlined text-base">chat</span>
                                    Ask a Question
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Right Column: Sidebar Navigation */}
            <aside className="w-full lg:w-96 border-l border-slate-200 dark:border-slate-800 bg-background-light dark:bg-background-dark flex flex-col h-[calc(100vh-73px)] overflow-hidden lg:sticky lg:top-[73px]">
                {/* Progress Overview */}
                <div className="border-b border-slate-200 dark:border-slate-800 p-6 space-y-4 shrink-0">
                    <div className="flex items-center justify-between">
                        <h3 className="font-bold">Course Syllabus</h3>
                        <span className="text-xs font-bold text-emerald-accent bg-emerald-accent/10 px-2 py-1 rounded">35% COMPLETED</span>
                    </div>
                    <div className="relative h-2 w-full overflow-hidden rounded-full bg-slate-200 dark:bg-slate-800">
                        <div className="absolute h-full bg-emerald-accent" style={{ width: '35%' }}></div>
                    </div>
                </div>

                {/* Lesson List */}
                <div className="flex-1 overflow-y-auto">
                    <div className="flex flex-col">
                        {courseCurriculum.map((courseModule, mIdx) => (
                            <div key={mIdx}>
                                <div className="bg-slate-50 dark:bg-slate-800/30 px-6 py-2 text-[10px] font-bold tracking-widest text-slate-400 uppercase sticky top-0 z-10">
                                    {courseModule.module}
                                </div>
                                {courseModule.lessons.map((lesson) => {
                                    const isActive = lesson.id === params.lessonId;
                                    const isCompleted = lesson.id === 'intro-1' && !isActive; // mock state

                                    return (
                                        <Link
                                            href={`/courses/${course.id}/lessons/${lesson.id}`}
                                            key={lesson.id}
                                            className={`flex items-center gap-4 px-6 py-4 hover:bg-slate-100 dark:hover:bg-slate-800/50 transition-colors cursor-pointer ${isActive ? 'active-lesson' : ''}`}
                                        >
                                            {isCompleted ? (
                                                <div className="flex h-8 w-8 items-center justify-center rounded-full bg-emerald-accent text-white shrink-0">
                                                    <span className="material-symbols-outlined text-lg">check</span>
                                                </div>
                                            ) : isActive ? (
                                                <div className="flex h-8 w-8 items-center justify-center rounded-full bg-primary text-background-dark shrink-0">
                                                    <span className="material-symbols-outlined text-lg">{lesson.type === 'video' ? 'play_arrow' : 'description'}</span>
                                                </div>
                                            ) : (
                                                <div className="flex h-8 w-8 items-center justify-center rounded-full border-2 border-slate-300 dark:border-slate-700 text-slate-400 group-hover:border-primary group-hover:text-primary shrink-0">
                                                    <span className="material-symbols-outlined text-lg">{lesson.type === 'video' ? 'play_arrow' : 'description'}</span>
                                                </div>
                                            )}

                                            <div className="flex-1 min-w-0">
                                                <p className={`text-sm truncate ${isActive ? 'font-bold' : 'font-medium'}`}>{lesson.title}</p>
                                                <p className={`text-xs ${isActive ? 'text-primary font-medium italic' : 'text-slate-500'}`}>
                                                    {isActive && lesson.type === 'video' ? 'Now Playing' : lesson.duration}
                                                </p>
                                            </div>
                                        </Link>
                                    );
                                })}
                            </div>
                        ))}
                    </div>
                </div>

                {/* Bottom Nav Actions */}
                <div className="border-t border-slate-200 dark:border-slate-800 p-6 flex items-center justify-between shrink-0">
                    <button className="flex items-center gap-1 text-sm font-bold text-slate-500 hover:text-slate-900 transition-colors">
                        <span className="material-symbols-outlined">chevron_left</span>
                        Previous
                    </button>
                    <button className="flex items-center gap-1 text-sm font-bold text-slate-900 dark:text-slate-100 hover:text-primary transition-colors">
                        Next Lesson
                        <span className="material-symbols-outlined">chevron_right</span>
                    </button>
                </div>
            </aside>
        </div>
    );
}
