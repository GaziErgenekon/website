import { cva } from "class-variance-authority";
import PropTypes from "prop-types";
import { cn } from "../../libs/utils";

const buttonVariants = cva(
  "flex-center cursor-pointer gap-3 transition-colors px-3 py-2 font-semibold rounded-lg",
  {
    variants: {
      colorMode: {
        default: "bg-background hover:bg-background/90",
        primary: "bg-primary hover:bg-primary/90",
        secondary: "bg-secondary hover:bg-secondary/90",
        third: "bg-third hover:bg-third/90",
        danger: "bg-danger hover:bg-danger/90",
        success: "bg-success hover:bg-success/90",
        info: "bg-info hover:bg-info/90",
      },
      variant: {
        default: "text-white",
        outline: "bg-transparent border",
        surface: "bg-transparent",
        subtle: "bg-opacity-10 text-foreground",
        elevated: `
            overflow-hidden
            after:content-[''] after:absolute after:w-full after:h-[3px] after:bottom-[0px] after:rounded-b-[8px]
            relative 
        `,
        radial:
          "bg-transparent hover:bg-transparent inset-shadow-sm border bg-radial-[at_50%_25%]",
      },
      size: {
        sm: "px-3 py-1 text-sm",
        md: "px-4 py-1.5",
        lg: "px-4 py-2 text-lg",
        icon: "p-3 ",
      },
    },

    compoundVariants: [
      {
        variant: "surface",
        colorMode: "primary",
        class: "text-primary hover:bg-primary/10",
      },
      {
        variant: "surface",
        colorMode: "secondary",
        class: "text-secondary hover:bg-secondary/10",
      },
      {
        variant: "surface",
        colorMode: "third",
        class: "text-third hover:bg-third/10",
      },
      {
        variant: "surface",
        colorMode: "danger",
        class: "text-danger hover:bg-danger/10",
      },
      {
        variant: "surface",
        colorMode: "success",
        class: "text-success hover:bg-success/10",
      },
      {
        variant: "surface",
        colorMode: "info",
        class: "text-info hover:bg-info/10",
      },
      {
        variant: "surface",
        colorMode: "default",
        class: "text-foreground hover:bg-background/30",
      },
      {
        variant: "outline",
        colorMode: "primary",
        class: "border-primary text-primary hover:bg-primary/10",
      },
      {
        variant: "outline",
        colorMode: "secondary",
        class: "border-secondary text-secondary hover:bg-secondary/10",
      },
      {
        variant: "outline",
        colorMode: "third",
        class: "border-third text-third hover:bg-third/10",
      },
      {
        variant: "outline",
        colorMode: "danger",
        class: "border-danger text-danger hover:bg-danger/10",
      },
      {
        variant: "outline",
        colorMode: "success",
        class: "border-success text-success hover:bg-success/10",
      },
      {
        variant: "outline",
        colorMode: "info",
        class: "border-info text-info hover:bg-info/10",
      },
      {
        variant: "outline",
        colorMode: "default",
        class: "border-foreground/50 text-foreground/70 hover:bg-background/30",
      },
      {
        variant: "subtle",
        colorMode: "primary",
        class: "bg-primary/10 text-primary hover:bg-primary/20",
      },
      {
        variant: "subtle",
        colorMode: "secondary",
        class: "bg-secondary/10 text-secondary hover:bg-secondary/20",
      },
      {
        variant: "subtle",
        colorMode: "third",
        class: "bg-third/10 text-third hover:bg-third/20",
      },
      {
        variant: "subtle",
        colorMode: "danger",
        class: "bg-danger/10 text-danger hover:bg-danger/20",
      },
      {
        variant: "subtle",
        colorMode: "success",
        class: "bg-success/10 text-success hover:bg-success/20",
      },
      {
        variant: "subtle",
        colorMode: "info",
        class: "bg-info/10 text-info hover:bg-info/20",
      },
      {
        variant: "subtle",
        colorMode: "default",
        class: "bg-background/30 text-foreground/70 hover:bg-background/50",
      },
      {
        variant: "elevated",
        colorMode: "primary",
        class: `
      bg-primary/50 text-white
      after:bg-primary/40
      hover:bg-primary/40 hover:after:bg-primary/40
    `,
      },
      {
        variant: "elevated",
        colorMode: "secondary",
        class: `
      bg-secondary/50 text-white
      after:bg-secondary/40
      hover:bg-secondary/40 hover:after:bg-secondary/40
    `,
      },
      {
        variant: "elevated",
        colorMode: "third",
        class: `
      bg-third/50 text-white
      after:bg-third/40
      hover:bg-third/40 hover:after:bg-third/40
    `,
      },
      {
        variant: "elevated",
        colorMode: "danger",
        class: `
      bg-danger/50 text-white
      after:bg-danger/40
      hover:bg-danger/40 hover:after:bg-danger/40
    `,
      },
      {
        variant: "elevated",
        colorMode: "success",
        class: `
      bg-success/50 text-white
      after:bg-success/40
      hover:bg-success/40 hover:after:bg-success/40
    `,
      },
      {
        variant: "elevated",
        colorMode: "info",
        class: `
      bg-info/50 text-white
      after:bg-info/40
      hover:bg-info/40 hover:after:bg-info/40
    `,
      },
      {
        variant: "elevated",
        colorMode: "default",
        class: `
      bg-foreground/10 text-foreground
      after:bg-foreground/20
      hover:bg-foreground/5 hover:after:bg-foreground/10
    `,
      },
      {
        variant: "radial",
        colorMode: "default",
        class:
          "inset-shadow-foreground/40  border-foreground/30 from-foreground/20 via-foreground/10 to-foreground/5",
      },
      {
        variant: "radial",
        colorMode: "danger",
        class:
          "inset-shadow-danger/40  border-danger/30 from-danger/20 via-danger/10 to-danger/5",
      },
      {
        variant: "radial",
        colorMode: "info",
        class:
          "inset-shadow-info/40  border-info/30 from-info/20 via-info/10 to-info/5",
      },
      {
        variant: "radial",
        colorMode: "primary",
        class:
          "inset-shadow-primary/40  border-primary/30 from-primary/20 via-primary/10 to-primary/5",
      },
      {
        variant: "radial",
        colorMode: "secondary",
        class:
          "inset-shadow-secondary/40  border-secondary/30 from-secondary/20 via-secondary/10 to-secondary/5",
      },
      {
        variant: "radial",
        colorMode: "success",
        class:
          "inset-shadow-success/40  border-success/30 from-success/20 via-success/10 to-success/5",
      },
      {
        variant: "radial",
        colorMode: "third",
        class:
          "inset-shadow-third/40  border-third/30 from-third/20 via-third/10 to-third/5",
      }
    ],

    defaultVariants: {
      variant: "default",
      size: "md",
      colorMode: "default",
    },
  },
);

const Button = ({
  children,
  className,
  colorMode,
  size,
  variant,
  ...props
}) => {
  return (
    <button
      className={cn(buttonVariants({ className, colorMode, variant, size }))}
      {...props}
    >
      {children}
    </button>
  );
};

Button.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node.isRequired,
  colorMode: PropTypes.oneOf([
    "default",
    "primary",
    "secondary",
    "third",
    "danger",
    "success",
    "info",
  ]),
  size: PropTypes.oneOf(["default", "outline", "surface", "subtle"]),
  variant: PropTypes.oneOf(["sm", "md", "lg", "icon"]),
};

export default Button;
