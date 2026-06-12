import * as React from "react";
import * as SelectPrimitive from "@radix-ui/react-select";

import { cn } from "../../lib/utils";
import {
  ChevronDownIcon,
  CheckIcon,
  ChevronUpIcon,
} from "lucide-react";

function Select({ ...props }) {
  return <SelectPrimitive.Root data-slot="select" {...props} />;
}

function SelectGroup({ className, ...props }) {
  return (
    <SelectPrimitive.Group
      data-slot="select-group"
      className={cn("scroll-my-1 p-1", className)}
      {...props}
    />
  );
}

function SelectValue(props) {
  return <SelectPrimitive.Value data-slot="select-value" {...props} />;
}

function SelectTrigger({
  className,
  size = "default",
  children,
  ...props
}) {
  return (
    <SelectPrimitive.Trigger
      data-slot="select-trigger"
      data-size={size}
      className={cn(
        // ✅ BASE LIGHT
        "flex w-fit items-center justify-between gap-1.5 rounded-lg border px-3 py-2 text-sm transition-all outline-none select-none",

        // 🌞 LIGHT MODE
        "bg-white border-zinc-200 text-zinc-900 hover:bg-zinc-50",

        // 🌙 DARK MODE
        "dark:bg-zinc-900 dark:border-zinc-800 dark:text-zinc-100 dark:hover:bg-zinc-800",

        // focus states
        "focus-visible:ring-2 focus-visible:ring-zinc-400 dark:focus-visible:ring-zinc-600",

        "disabled:opacity-50 disabled:cursor-not-allowed",

        className
      )}
      {...props}
    >
      {children}

      <SelectPrimitive.Icon asChild>
        <ChevronDownIcon className="size-4 opacity-70" />
      </SelectPrimitive.Icon>
    </SelectPrimitive.Trigger>
  );
}

function SelectContent({
  className,
  children,
  position = "item-aligned",
  align = "center",
  ...props
}) {
  return (
    <SelectPrimitive.Portal>
      <SelectPrimitive.Content
        className={cn(
          "z-50 min-w-40 overflow-hidden rounded-lg border shadow-lg",

          // 🌞 LIGHT
          "bg-white border-zinc-200 text-zinc-900",

          // 🌙 DARK
          "dark:bg-zinc-900 dark:border-zinc-800 dark:text-zinc-100",

          className
        )}
        position={position}
        align={align}
        {...props}
      >
        <SelectScrollUpButton />

        <SelectPrimitive.Viewport className="p-1">
          {children}
        </SelectPrimitive.Viewport>

        <SelectScrollDownButton />
      </SelectPrimitive.Content>
    </SelectPrimitive.Portal>
  );
}

function SelectItem({ className, children, ...props }) {
  return (
    <SelectPrimitive.Item
      className={cn(
        "relative flex w-full cursor-default items-center gap-2 rounded-md px-2 py-2 text-sm outline-none select-none",

        // 🌞 LIGHT
        "hover:bg-zinc-100 focus:bg-zinc-100",

        // 🌙 DARK
        "dark:hover:bg-zinc-800 dark:focus:bg-zinc-800",

        "data-disabled:opacity-50 data-disabled:pointer-events-none",

        className
      )}
      {...props}
    >
      <span className="absolute right-2 flex size-4 items-center justify-center">
        <SelectPrimitive.ItemIndicator>
          <CheckIcon className="size-4" />
        </SelectPrimitive.ItemIndicator>
      </span>

      <SelectPrimitive.ItemText>{children}</SelectPrimitive.ItemText>
    </SelectPrimitive.Item>
  );
}

function SelectLabel({ className, ...props }) {
  return (
    <SelectPrimitive.Label
      className={cn(
        "px-2 py-1 text-xs text-zinc-500 dark:text-zinc-400",
        className
      )}
      {...props}
    />
  );
}

function SelectSeparator({ className, ...props }) {
  return (
    <SelectPrimitive.Separator
      className={cn(
        "my-1 h-px bg-zinc-200 dark:bg-zinc-800",
        className
      )}
      {...props}
    />
  );
}

function SelectScrollUpButton({ className, ...props }) {
  return (
    <SelectPrimitive.ScrollUpButton
      className={cn(
        "flex items-center justify-center py-1",
        "bg-white dark:bg-zinc-900",
        className
      )}
      {...props}
    >
      <ChevronUpIcon className="size-4" />
    </SelectPrimitive.ScrollUpButton>
  );
}

function SelectScrollDownButton({ className, ...props }) {
  return (
    <SelectPrimitive.ScrollDownButton
      className={cn(
        "flex items-center justify-center py-1",
        "bg-white dark:bg-zinc-900",
        className
      )}
      {...props}
    >
      <ChevronDownIcon className="size-4" />
    </SelectPrimitive.ScrollDownButton>
  );
}

export {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectScrollDownButton,
  SelectScrollUpButton,
  SelectSeparator,
  SelectTrigger,
  SelectValue,
};