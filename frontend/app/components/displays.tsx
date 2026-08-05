import { ChevronRight } from "lucide-react";
import { useEffect, useState } from "react";
import type { ComponentType } from "react";

type SkillProps = {
    title: string;
    value: number;
}

type InfoProps = {
    title: string;
    value: string;
}

type BadgeProps = {
    title:string;
    Logo: ComponentType<{ className?: string }>;
}

export function InfoDisplay({ title, value }: InfoProps) {
    return (
        <div className="flex flex-row gap-2">
            <ChevronRight className="w-4 h-4" />
            <p className="text-md text-black font-bold">{title}:</p>
            <p className="text-md font-normal">{value}</p>
        </div>
    )
}

export function SectionUnderline() {
    return (
        <div className="relative mx-auto  h-1 w-44">
            {/* Full horizontal line */}
            <div className="absolute top-1/2 w-full -translate-y-1/2 border-t border-base-300" />

            {/* Accent line */}
            <div className="absolute left-1/2 top-1/2 h-1 w-16 -translate-x-1/2 -translate-y-1/2 bg-black" />
        </div>
    )
}

export function SkillDisplay({ title, value }: SkillProps) {
    const [progress, setProgress] = useState<number>(0);

    useEffect(() => {
        const timer = setTimeout(() => {
            setProgress(value);
        }, 400);

        return () => clearTimeout(timer);
    }, [value]);


    return (
        <div className="flex flex-col w-full gap-1">
            <div className="flex flex-row justify-between items-center">
                <p>{title}</p>
                <p>{progress}%</p>
            </div>
            <progress className="progress  text-black/80" value={progress} max="100"></progress>
        </div>

    )
}

export function Badge({ title, Logo }: BadgeProps) {
    return (
        <div className="rounded-md shadow-sm badge bg-gray-100 border-zinc-100 text-black/80  p-3 flex flex-row gap-1 items-center">
            <Logo className="w-4 h-4" />
            <p className="text-sm">{title}</p>
        </div>
    )
}
