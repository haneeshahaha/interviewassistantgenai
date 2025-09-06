import { cn } from '@/lib/utils'
import{Loa}from

export const loaderpage = ({className ?: string}) => {
  return (
    <div className={cn(
        "w-screen h-screen flex items-center justify-center bg-transparent z-50",
        className
      )} >
    <Loader className="w-6 h-6 min-h-0 animate-spin"/>
    </div>
  );
};
