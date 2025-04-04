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
            <main className="overflow-hidden h-screen w-screen">
                {/* <div className="relative min-h-screen w-full flex items-start justify-between pt-32"> */}
                    {/* Center content */}
                        {/* <div className="w-full relative flex items-center justify-center">
                            <div className="max-w-2xl text-center -mt-32">
                                <TextEffect
                                    preset="fade-in-blur"
                                    speedSegment={0.3}
                                    as="h1"
                                    className="mt-8 text-balance text-5xl md:text-6xl lg:mt-16 xl:text-7xl">
                                    {config.hero.title}
                                </TextEffect>
                                <TextEffect
                                per="line"
                                preset="fade-in-blur"
                                speedSegment={0.3}
                                delay={0.5}
                                as="p"
                                className="mt-8 text-balance text-xl">
                                {config.hero.subtitle}
                            </TextEffect>

                            <AnimatedGroup variants={transitionVariants}>
                                <div className="flex justify-center">
                                    <Link
                                        href="https://www.linkedin.com/company/kathedra/"
                                        className="hover:bg-background bg-muted group mt-8 flex w-fit items-center gap-4 rounded-full border p-2 pl-6 shadow-md shadow-zinc-950/5 transition-colors duration-300">
                                        <span className="text-foreground text-lg">what we&apos;re working on</span>
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
                                </div>
                            </AnimatedGroup>
                            </div>
                        </div>
                </div> */}
                <div className = "relative flex items-center justify-center h-full">
                    <RobotArm />
                </div> 
            </main>
        </>
    )
}
