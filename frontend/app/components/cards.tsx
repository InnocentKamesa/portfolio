import { Badge } from "./displays";
import { ExternalLink } from "lucide-react";
import type { ComponentType } from "react";
import type { IconType } from "react-icons";

type Badge = {
    title: string;
    logo: IconType;
};

type ServiceCardProps = {
  title: string;
  description: string;
  Logo: ComponentType<{ className?: string }>;
};

type ProjectCardProps = {
  title: string;
  image: string;
  description: string;
  badges: Badge[];
}

export function ProjectCard({ image, title, description, badges }: ProjectCardProps) {
  return (
    <div className="flex card hover:bg-gray-100 border-zinc-50 shadow-lg hover:shadow-2xl">
      <figure className="flex-1">
        <img
          src={image}
          alt="project cover"
          className="rounded-xl h-full" />
      </figure>
      <div className="card-body flex-1 flex flex-col items-center text-center">

        {/**title and description */}
        <div className="flex flex-col gap-2 flex-1">
          <h2 className="card-title ">{title}</h2>
          <p>{description}</p>
        </div>

        {/**card actions */}
        <div className="card-actions flex flex-col flex-1 w-full h-full  gap-1">
          <p className="text-sm my-2 text-black/60">Powered by:</p>
          <div className="flex flex-row gap-2 flex-wrap">
            {badges.map((badge) => {
              return (
                <Badge title={badge.title} Logo={badge.logo} />
              )
            })}
          </div>
          <button className=" self-end my-3 btn btn-neutral btn-sm rounded-full">View Live Demo <ExternalLink className="w-4 h-4 ml-2" /> </button>
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
