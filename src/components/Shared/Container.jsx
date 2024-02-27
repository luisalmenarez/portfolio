import { cn } from "@/app/libs/utils";

const Container = ({ children, className }) => {
  return (
    <div className={cn("container mx-auto px-5 lg:px-0 z-30", className)}>
      {children}
    </div>
  );
};

export default Container;
