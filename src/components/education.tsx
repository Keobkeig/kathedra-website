"use client";

import { ChevronRight, GraduationCap } from "lucide-react";
import HeaderTitle from "./util/header-title";
import { config } from "@/config";
import Link from "next/link";
import Image from 'next/image'

export function Education() {
  return (
    // <section className="py-20" id="education">
    //   <div className="container px-4 md:px-6">
    //     <div className="flex flex-col items-center justify-center space-y-4 text-center">
    //       <div className="space-y-2">
    //         <HeaderTitle>{config.education.title}</HeaderTitle>
    //         <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
    //           {config.education.subtitle}
    //         </p>
    //       </div>
    //     </div>
    //     <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 pt-12 md:grid-cols-2">
    //       {config.education.items.map((edu) => (
    //         <div
    //           key={edu.school}
    //           className="group relative overflow-hidden rounded-xl border-2 border-silver/50 bg-background p-6 shadow-lg hover:border-silver"
    //         >
    //           <div className="space-y-6">
    //             <div className="flex items-start justify-between gap-4">
    //               <div className="space-y-3">
    //                 <div className="space-y-1">
    //                   <h3 className="text-xl font-semibold tracking-tight">
    //                     {edu.school}
    //                   </h3>
    //                   <p className="text-sm text-muted-foreground">
    //                     {edu.startDate} - {edu.endDate}
    //                   </p>
    //                 </div>
    //                 <div className="flex items-center gap-2">
    //                   <GraduationCap className="h-4 w-4 text-primary" />
    //                   <span className="text-sm font-medium">{edu.degree}</span>
    //                 </div>
    //                 <p className="text-sm text-muted-foreground">
    //                   {edu.description}
    //                 </p>
    //               </div>
    //               <div className="relative h-16 w-16 overflow-hidden rounded-lg">
    //                 <img
    //                   src={edu.logo}
    //                   alt={edu.school}
    //                   className="absolute inset-0 h-full w-full object-cover"
    //                 />
    //               </div>
    //             </div>
                
    //             {edu.grades && edu.grades.length > 0 && (
    //               <div className="mt-4 border-t border-silver/30 pt-4">
    //                 <h4 className="mb-2 text-sm font-semibold">Academic Achievements</h4>
    //                 <div className="grid grid-cols-2 gap-2 sm:grid-cols-3">
    //                   {edu.grades.map((grade) => (
    //                     <div
    //                       key={`${grade.subject}-${grade.year}`}
    //                       className="rounded-lg border border-silver/30 p-2 text-center"
    //                     >
    //                       <div className="text-xs text-muted-foreground">
    //                         {grade.subject}
    //                       </div>
    //                       <div className="text-lg font-bold text-primary">
    //                         {grade.grade}
    //                       </div>
    //                       <div className="text-xs text-muted-foreground">
    //                         {grade.year}
    //                       </div>
    //                     </div>
    //                   ))}
    //                 </div>
    //               </div>
    //             )}
    //           </div>
    //         </div>
    //       ))}
    //     </div>
    //   </div>
    // </section>
    <section className="opacity-90 pb-4 pt-16 md:pb-32">
                    {/* <div className="group relative m-auto max-w-5xl px-6">
                        <div className="absolute inset-0 z-10 flex scale-95 items-center justify-center opacity-0 duration-500 group-hover:scale-100 group-hover:opacity-100">
                             <Link
                                href="/"
                                className="block text-sm duration-150 hover:opacity-75">
                                <span> Meet Our Team</span>

                                <ChevronRight className="ml-1 inline-block size-3" />
                            </Link>
                        </div> */}
                        <div className="group-hover:blur-xs mx-auto mt-12 grid max-w-4xl grid-cols-4 gap-x-12 gap-y-12 transition-all duration-500 group-hover:opacity-50 sm:gap-x-16 sm:gap-y-14">
                            <div className="flex">
                                <Image
                                    className="mx-auto h-12 w-auto"
                                    src="/logos/nyu.png"
                                    alt="NYU Logo"
                                    width={200}
                                    height={48}
                                />
                            </div>
                            <div className="flex">
                                <Image
                                    className="mx-auto pt-2 h-8 w-auto"
                                    src="/logos/triatomic.png"
                                    alt="Triatomic Capital Logo"
                                    width={200}
                                    height={48}
                                />
                            </div>
                            <div className="flex">
                                <Image
                                    className="mx-auto h-8 w-auto"
                                    src="/logos/lockheed.png"
                                    alt="Lockheed Martin Logo"
                                    width={200}
                                    height={48}
                                />
                            </div>
                            <div className="flex">
                                <Image
                                    className="mx-auto h-16 w-auto" // Increased from h-8 to h-16
                                    src="/logos/columbia.jpg"
                                    alt="Columbia University Logo"
                                    width={300} // Increased from 200
                                    height={64} // Increased from 48
                                />
                            </div>
                            <div className="flex">
                                <Image
                                    className="mx-auto h-8 w-auto"
                                    src="/logos/cmu.png"
                                    alt="Carnegie Mellon University Logo"
                                    width={200}
                                    height={48}
                                />
                            </div>
                            <div className="flex">
                                <Image
                                    className="mx-auto h-8 w-auto"
                                    src="/logos/stanford.png"
                                    alt="Stanford University Logo"
                                    width={200}
                                    height={48}
                                />
                            </div>
                            <div className="flex">
                                <Image
                                    className="mx-auto h-8 w-auto"
                                    src="/logos/googlex.png"
                                    alt="Google X Logo"
                                    width={200}
                                    height={48}
                                />
                            </div>
                            <div className="flex">
                                <Image
                                    className="mx-auto h-8 w-auto"
                                    src="/logos/northwestern.svg"
                                    alt="Northwestern Engineering Logo"
                                    width={200}
                                    height={48}
                                />
                            </div>
                        </div>
                    {/* </div> */}
                </section>
  );
} 