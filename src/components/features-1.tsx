import { Card, CardContent, CardHeader } from '@/components/ui/card'
import { ReactNode } from 'react'
import { config } from '@/config'
import HeaderTitle from './util/header-title'
import { CardContainer, CardBody, CardItem } from '@/components/ui/3d-card'

export default function Features() {
    return (
        <section className="bg-zinc-50 py-8 md:py-16 w-full" id="skills">
            <div className="mx-auto max-w-5xl px-6">
                <div className="text-center mb-24">
                    <HeaderTitle>{config.skills.title}</HeaderTitle>
                    <p className="mt-8">{config.skills.description}</p>
                </div>
                
                <div>
                    {/* Problems */}
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-32">
                        {config.problems.items.map((problem, index) => (
                            <CardContainer key={index} containerClassName="py-0">
                                <CardBody className="relative h-[200px] w-[350px]">
                                    <CardItem translateZ="50" className="w-full h-full">
                                        <Card className="bg-card h-full">
                                            <CardHeader className="flex flex-row items-center gap-4">
                                                <CardItem translateZ="100" className="p-2 rounded-lg bg-muted">
                                                    {config.skills.items[index].icon}
                                                </CardItem>
                                                <CardItem translateZ="100" className="font-medium">
                                                    {problem.title}
                                                </CardItem>
                                            </CardHeader>
                                            <CardContent>
                                                <CardItem translateZ="60" className="text-sm text-muted-foreground">
                                                    {problem.description}
                                                </CardItem>
                                            </CardContent>
                                        </Card>
                                    </CardItem>
                                    <div className="hidden lg:block absolute -bottom-16 left-1/2 h-16 w-px bg-border"></div>
                                </CardBody>
                            </CardContainer>
                        ))}
                    </div>
                    
                    <div className="relative">
                        {/* Solutions */}
                        <div className="grid grid-cols-1 lg:grid-cols-3 gap-32">
                            {config.skills.items.map((skill, index) => (
                                <CardContainer key={index} containerClassName="py-16">
                                    <CardBody className="h-[200px] w-[350px]">
                                        <CardItem translateZ="50" className="w-full h-full">
                                            <Card className="bg-card w-full h-full">
                                                <CardHeader className="flex flex-row items-center gap-4">
                                                    <CardItem translateZ="100" className="p-2 rounded-lg bg-muted">
                                                        {skill.icon}
                                                    </CardItem>
                                                    <CardItem translateZ="100" className="font-medium">
                                                        {skill.title}
                                                    </CardItem>
                                                </CardHeader>
                                                <CardContent>
                                                    <CardItem translateZ="60" className="text-sm text-muted-foreground">
                                                        {skill.description}
                                                    </CardItem>
                                                </CardContent>
                                            </Card>
                                        </CardItem>
                                    </CardBody>
                                </CardContainer>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
