import HeaderTitle from "./util/header-title";
import { config } from "@/config";
import Link from "next/link";
import Image from 'next/image'

export function Problem() {
  return (
    <section className="py-20" id="education">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <HeaderTitle>{config.problems.title}</HeaderTitle>
          <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
            {config.problems.subtitle}
          </p>
        </div>
        <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 pt-12 md:grid-cols-2">
          {config.problems.items.map((edu) => (
            <div
              key={edu.title}
              className="group relative overflow-hidden rounded-xl border-2 border-silver/50 bg-background p-6 shadow-lg hover:border-silver"
            >
              <div className="space-y-3">
                <h3 className="text-xl font-semibold tracking-tight">
                  {edu.title}
                </h3>
                <p className="text-sm text-muted-foreground">
                  {edu.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}