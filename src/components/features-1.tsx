import { Card, CardContent, CardHeader } from '@/components/ui/card'
import { config } from '@/config'
import HeaderTitle from './util/header-title'

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
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                        {config.problems.items.map((problem, index) => (
                            <Card key={index} className="bg-muted h-[200px]">
                                <CardHeader className="flex flex-row items-center gap-4">
                                    <div className="p-2 rounded-lg bg-background">
                                        {problem.icon}
                                    </div>
                                    <div className="font-medium">
                                        {problem.title}
                                    </div>
                                </CardHeader>
                                <CardContent>
                                    <p className="text-sm text-muted-foreground">
                                        {problem.description}
                                    </p>
                                </CardContent>
                            </Card>
                        ))}
                    </div>
                    
                    {/* Solutions */}
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mt-8">
                        {config.skills.items.map((skill, index) => (
                            <Card key={index} className="bg-card h-[200px]">
                                <CardHeader className="flex flex-row items-center gap-4">
                                    <div className="p-2 rounded-lg bg-muted">
                                        {skill.icon}
                                    </div>
                                    <div className="font-medium">
                                        {skill.title}
                                    </div>
                                </CardHeader>
                                <CardContent>
                                    <p className="text-sm text-muted-foreground">
                                        {skill.description}
                                    </p>
                                </CardContent>
                            </Card>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}
