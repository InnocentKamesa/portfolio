import {Badge} from "./displays";
import { SiTypescript, SiTailwindcss, SiExpress, SiNextdotjs, SiPostgresql } from "react-icons/si";
import {ExternalLink, View} from "lucide-react";
import type { ComponentType } from "react";

type ServiceCardProps = {
    title: string;
    description: string;
    Logo: ComponentType<{ className?: string }>;
};

export function ProjectCard(){
    return (
<div className="card hover:bg-gray-100 border-zinc-50 shadow-lg hover:shadow-2xl">
  <figure className="">
    <img
      src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
      alt="Shoes"
      className="rounded-xl" />
  </figure>
  <div className="card-body items-center text-center">
    <h2 className="card-title ">Secure User Management</h2>
    <p>A secure user management system developed for web platforms</p>
        
    {/**card actions */}
    <div className="card-actions flex flex-col gap-1">
      <p className="text-sm my-2 text-black/60">Powered by:</p>
        <div className="flex flex-row gap-2 flex-wrap">
            <Badge title="Express.js" Logo={SiExpress} />
            <Badge title="Next.js" Logo={SiNextdotjs} />
            <Badge title="TypeScript" Logo={SiTypescript} />
            <Badge title="PostgreSQL" Logo={SiPostgresql} />
            <Badge title="Tailwindcss" Logo={SiTailwindcss} />
        </div>
      <button className=" self-end my-3 btn btn-neutral btn-sm rounded-full">View Live Project <ExternalLink className="w-4 h-4 ml-2" /> </button>    
    </div>
  </div>
</div>
    )
}

export function ServiceCard({ title, description, Logo }: ServiceCardProps) {

    return (
     <div className="card w-96  hover:bg-zinc-100 hover:shadow-lg transition-all duration-300 ease-in-out ">
  <figure>
    <Logo className="w-16 h-16 mx-auto my-6" />
  </figure>
  <div className="card-body">
    <h2 className="card-title mx-auto text-xl my-4">{title}</h2>
    <div className="card-actions justify-end">
      <p className="text-sm text-black/80">{description}</p>
    </div>
  </div>
</div>
    )
}
