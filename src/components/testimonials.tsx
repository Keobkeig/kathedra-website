import { Card, CardContent } from '@/components/ui/card'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { config } from '@/config'
import HeaderTitle from './util/header-title'

export default function Team() {
    return (
        <section className="py-16 md:py-32" id="team">
            <div className="mx-auto max-w-6xl px-6 md:space-y-16">
                <div className="relative z-10 mx-auto max-w-xl space-y-6 text-center md:space-y-12">
                    <HeaderTitle>{config.testimonials.title}</HeaderTitle>
                </div>

                <div className="grid gap-4 [--color-card:var(--color-muted)] *:border-none *:shadow-none grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-rows-2 dark:[--color-muted:var(--color-zinc-900)]">
                    {config.testimonials.items.map((testimonial, index) => (
                        <Card key={index} className={`
                            ${index < 2 ? "md:col-span-1 lg:row-span-1" : ""}
                            ${index >= 2 ? "md:col-span-1" : ""}
                            ${index === 2 ? "sm:col-start-1" : ""}
                        `}>
                            <CardContent className="h-full pt-6">
                                <blockquote className="grid h-full grid-rows-[auto_1fr] gap-6">
                                    <div className="grid grid-cols-[auto_1fr] items-center gap-3">
                                        <Avatar className="size-30"> 
                                            <AvatarImage src={testimonial.image} alt={testimonial.name} height="400" width="400" loading="lazy" />
                                            <AvatarFallback>{testimonial.name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
                                        </Avatar>

                                        <div>
                                            <cite className="font-bold not-italic">{testimonial.name}</cite>
                                            {testimonial.company && (
                                                <span className="text-foreground block font-bold not-italic">{testimonial.company}</span>
                                            )}
                                        </div>
                                    </div>

                                    <p className={`text-muted-foreground ${index === 0 ? "text-lg" : "text-base"}`}>{testimonial.quote}</p> {/* Added muted color, adjusted size */}
                                </blockquote>
                            </CardContent>
                        </Card>
                    ))}
                </div>
            </div>
        </section>
    )
}
