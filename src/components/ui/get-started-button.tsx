import { Button } from "@/components/ui/button";
import { ChevronRight } from "lucide-react";

export function GetStartedButton({
  text = "Testar Grátis",
  className = "",
}: {
  text?: string;
  className?: string;
}) {
  return (
    <Button
      className={`group relative overflow-hidden bg-[#173CE0] hover:bg-[#173CE0]/90 text-white rounded-xl h-12 px-8 text-base font-semibold shadow-[0_0_20px_rgba(23,60,224,0.4)] hover:shadow-[0_0_30px_rgba(23,60,224,0.6)] transition-all cursor-pointer ${className}`}
      size="lg"
    >
      <span className="mr-8 transition-opacity duration-500 group-hover:opacity-0">
        {text}
      </span>
      <i className="absolute right-1 top-1 bottom-1 rounded-lg z-10 grid w-10 place-items-center transition-all duration-500 bg-white/20 group-hover:w-[calc(100%-0.5rem)] group-active:scale-95 text-white not-italic">
        <ChevronRight size={18} strokeWidth={2.5} aria-hidden="true" />
      </i>
    </Button>
  );
}
