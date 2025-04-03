import React from 'react'
import Link from 'next/link'
import { ArrowRight, ChevronRight } from 'lucide-react'
import { Button } from '@/components/ui/button'
import Image from 'next/image'



import { AnimatedGroup } from './ui/animated-group'
import { TextEffect } from './ui/text-effect'
import { config } from '@/config'
import RobotArm from './robot-arm'

const transitionVariants = {
    item: {
        hidden: {
            opacity: 0,
            filter: 'blur(12px)',
            y: 12,
        },
        visible: {
            opacity: 1,
            filter: 'blur(0px)',
            y: 0,
            transition: {
                type: 'spring',
                bounce: 0.3,
                duration: 1.5,
            },
        },
    },
}

export default function HeroSection() {
    return (
        <>
            <main className="overflow-hidden">
                <div className="relative min-h-[80vh] w-full flex items-center justify-between overflow-visible">
                    {/* Left side - Text content */}
                    <div className="w-1/2 pl-12 relative z-10 h-[80vh] flex items-center">
                        <div className="text-left max-w-2xl">
                            <TextEffect
                                preset="fade-in-blur"
                                speedSegment={0.3}
                                as="h1"
                                className="mt-8 text-balance text-6xl md:text-7xl lg:mt-16 xl:text-[5.25rem]">
                                {config.hero.title}
                            </TextEffect>
                            <TextEffect
                                per="line"
                                preset="fade-in-blur"
                                speedSegment={0.3}
                                delay={0.5}
                                as="p"
                                className="mt-8 text-balance text-lg">
                                {config.hero.subtitle}
                            </TextEffect>

                            <AnimatedGroup variants={transitionVariants}>
                                <Link
                                    href="https://www.linkedin.com/company/kathedra/"
                                    className="hover:bg-background dark:hover:border-t-border bg-muted group mt-8 flex w-fit items-center gap-4 rounded-full border p-1 pl-4 shadow-md shadow-zinc-950/5 transition-colors duration-300 dark:border-t-white/5 dark:shadow-zinc-950">
                                    <span className="text-foreground text-sm">See what we&apos;re working on</span>
                                    <span className="dark:border-background block h-4 w-0.5 border-l bg-white dark:bg-zinc-700"></span>

                                    <div className="bg-background group-hover:bg-muted size-6 overflow-hidden rounded-full duration-500">
                                        <div className="flex w-12 -translate-x-1/2 duration-500 ease-in-out group-hover:translate-x-0">
                                            <span className="flex size-6">
                                                <ArrowRight className="m-auto size-3" />
                                            </span>
                                            <span className="flex size-6">
                                                <ArrowRight className="m-auto size-3" />
                                            </span>
                                        </div>
                                    </div>
                                </Link>
                            </AnimatedGroup>
                        </div>
                    </div>

                    {/* Right side - Robot Arm */}
                    <div className="w-1/2 relative h-[80vh] flex items-center justify-center scale-125">
                        <RobotArm />
                    </div>
                </div>
                <section className="bg-background pb-4 pt-16 md:pb-32">
                    <div className="group relative m-auto max-w-5xl px-6">
                        <div className="absolute inset-0 z-10 flex scale-95 items-center justify-center opacity-0 duration-500 group-hover:scale-100 group-hover:opacity-100">
                            <Link
                                href="/"
                                className="block text-sm duration-150 hover:opacity-75">
                                <span> Meet Our Clients</span>

                                <ChevronRight className="ml-1 inline-block size-3" />
                            </Link>
                        </div>
                        <div className="group-hover:blur-xs mx-auto mt-12 grid max-w-2xl grid-cols-4 gap-x-12 gap-y-8 transition-all duration-500 group-hover:opacity-50 sm:gap-x-16 sm:gap-y-14">
                            <div className="flex">
                                <Image
                                    className="mx-auto h-5 w-auto dark:invert"
                                    src="https://html.tailus.io/blocks/customers/nvidia.svg"
                                    alt="Nvidia Logo"
                                    width={80}
                                    height={20}
                                />
                            </div>
                            <div className="flex">
                                <Image
                                    className="mx-auto h-4 w-auto dark:invert"
                                    src="https://html.tailus.io/blocks/customers/column.svg"
                                    alt="Column Logo"
                                    width={64}
                                    height={16}
                                />
                            </div>
                            <div className="flex">
                                <Image
                                    className="mx-auto h-4 w-auto dark:invert"
                                    src="https://html.tailus.io/blocks/customers/github.svg"
                                    alt="GitHub Logo"
                                    width={64}
                                    height={16}
                                />
                            </div>
                            <div className="flex">
                                <Image
                                    className="mx-auto h-5 w-auto dark:invert"
                                    src="https://html.tailus.io/blocks/customers/nike.svg"
                                    alt="Nike Logo"
                                    width={80}
                                    height={20}
                                />
                            </div>
                            <div className="flex">
                                <Image
                                    className="mx-auto h-5 w-auto dark:invert"
                                    src="https://html.tailus.io/blocks/customers/lemonsqueezy.svg"
                                    alt="Lemon Squeezy Logo"
                                    width={80}
                                    height={20}
                                />
                            </div>
                            <div className="flex">
                                <Image
                                    className="mx-auto h-4 w-auto dark:invert"
                                    src="https://html.tailus.io/blocks/customers/laravel.svg"
                                    alt="Laravel Logo"
                                    width={64}
                                    height={16}
                                />
                            </div>
                            <div className="flex">
                                <Image
                                    className="mx-auto h-7 w-auto dark:invert"
                                    src="https://html.tailus.io/blocks/customers/lilly.svg"
                                    alt="Lilly Logo"
                                    width={112}
                                    height={28}
                                />
                            </div>
                            <div className="flex">
                                <Image
                                    className="mx-auto h-6 w-auto dark:invert"
                                    src="https://html.tailus.io/blocks/customers/openai.svg"
                                    alt="OpenAI Logo"
                                    width={96}
                                    height={24}
                                />
                            </div>
                        </div>
                    </div>
                </section>
            </main>
        </>
    )
}
