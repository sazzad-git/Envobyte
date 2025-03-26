import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva } from "class-variance-authority";

import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-all disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive",
  {
    variants: {
      variant: {
        default:
          "bg-primary text-primary-foreground shadow-xs hover:bg-primary/90",
        destructive:
          "bg-destructive text-white shadow-xs hover:bg-destructive/90 focus-visible:ring-destructive/20 dark:focus-visible:ring-destructive/40 dark:bg-destructive/60",
        outline:
          "border bg-background shadow-xs hover:bg-accent hover:text-accent-foreground dark:bg-input/30 dark:border-input dark:hover:bg-input/50",
        secondary:
          "bg-secondary text-secondary-foreground shadow-xs hover:bg-secondary/80",
        ghost:
          "hover:bg-accent hover:text-accent-foreground dark:hover:bg-accent/50",
        link: "text-primary underline-offset-4 hover:underline",
        header: "text-white font-medium text-[14px]  bg-[#FF693B] ",
        hero1: "text-white font-medium text-[16px]  bg-[#FF693B] uppercase",
        hero2: "text-white font-medium text-[16px] border uppercase",
        service: "text-white font-normal text-[14px]  bg-[#FF693B]",
        portfolio: "text-white font-normal text-[14px] bg-[#0c89ff]",
        order: "text-[#0c89ff] font-normal text-[14px] border border-[#0c89ff]",
        carousel:
          "bg-[#FF693B] border border-[#FF693B] disabled:border-[#0c89ff] disabled:bg-transparent",
      },
      size: {
        default: "h-9 px-4 py-2 has-[>svg]:px-3",
        sm: "h-8 rounded-md gap-1.5 px-3 has-[>svg]:px-2.5",
        lg: "h-10 rounded-md px-6 has-[>svg]:px-4",
        icon: "size-9",
        header: "px-[81px] py-[20px] rounded-[4px]",
        hero1: "px-[69px] py-[19px] rounded-[4px]",
        hero2: "px-[21px] py-[19px] rounded-[4px]",
        service: "px-[46px] py-[16px] rounded-[4px]",
        portfolio: "px-[36px] py-[13px] rounded-[30px]",
        order: "px-[23px] py-[13px] rounded-[30px]",
        carousel: " px-[14px] py-[11px] rounded-[6px]",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);

function Button({ className, variant, size, asChild = false, ...props }) {
  const Comp = asChild ? Slot : "button";

  return (
    <Comp
      data-slot="button"
      className={cn(buttonVariants({ variant, size, className }))}
      {...props}
    />
  );
}

export { Button, buttonVariants };
