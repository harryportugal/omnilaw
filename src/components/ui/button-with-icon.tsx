import { Button } from "@/components/ui/button";
import { ArrowUpRight } from "lucide-react";

interface ButtonWithIconProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  text?: string;
  className?: string;
}

export function ButtonWithIcon({ text = "Começar Agora", className, ...props }: ButtonWithIconProps) {
  return (
    <Button className={`relative text-sm font-semibold rounded-full h-12 p-1 ps-6 pe-14 group transition-all duration-500 hover:ps-14 hover:pe-6 w-fit overflow-hidden cursor-pointer bg-white text-black hover:bg-neutral-200 ${className || ''}`} {...props}>
      <span className="relative z-10 transition-all duration-500">
        {text}
      </span>
      <div className="absolute right-1 w-10 h-10 bg-black text-white rounded-full flex items-center justify-center transition-all duration-500 group-hover:right-[calc(100%-44px)] group-hover:rotate-45">
        <ArrowUpRight size={16} />
      </div>
    </Button>
  );
}

export default ButtonWithIcon;
