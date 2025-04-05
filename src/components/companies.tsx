"use client";

import Image from 'next/image'

export function Companies() {
  return (
   
    <section className="opacity-90  md:pb-32">
                        <div className="group-hover:blur-xs mx-auto grid max-w-4xl grid-cols-4 gap-x-12 gap-y-12 transition-all duration-500 group-hover:opacity-50 sm:gap-x-16 sm:gap-y-14">
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