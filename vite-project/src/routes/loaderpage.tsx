import { cn } from '../lib/utils'
import { Loader } from 'lucide-react'

interface LoaderPageProps {
  className?: string
}

export const LoaderPage = ({ className }: LoaderPageProps) => {
  return (
    <div className={cn(
        "w-screen h-screen flex items-center justify-center bg-transparent z-50",
        className
      )} >
    <Loader className="w-6 h-6 min-h-0 animate-spin"/>
    </div>
  );
};
