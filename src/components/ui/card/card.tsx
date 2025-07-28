import { component$, Slot, type PropsOf } from "@builder.io/qwik";
import { cn } from "@qwik-ui/utils";

export const Card = component$<PropsOf<"div">>(({ class: className, ...props }) => {
  return (
    <div
      class={cn(
        "rounded-lg border bg-card text-card-foreground shadow-sm",
        className
      )}
      {...props}
    >
      <Slot />
    </div>
  );
});

export const CardHeader = component$<PropsOf<"div">>(({ class: className, ...props }) => {
  return (
    <div class={cn("flex flex-col space-y-1.5 p-6", className)} {...props}>
      <Slot />
    </div>
  );
});

export const CardTitle = component$<PropsOf<"h3">>(({ class: className, ...props }) => {
  return (
    <h3
      class={cn(
        "text-2xl font-semibold leading-none tracking-tight",
        className
      )}
      {...props}
    >
      <Slot />
    </h3>
  );
});

export const CardDescription = component$<PropsOf<"p">>(({ class: className, ...props }) => {
  return (
    <p
      class={cn("text-sm text-muted-foreground", className)}
      {...props}
    >
      <Slot />
    </p>
  );
});

export const CardContent = component$<PropsOf<"div">>(({ class: className, ...props }) => {
  return (
    <div class={cn("p-6 pt-0", className)} {...props}>
      <Slot />
    </div>
  );
});

export const CardFooter = component$<PropsOf<"div">>(({ class: className, ...props }) => {
  return (
    <div class={cn("flex items-center p-6 pt-0", className)} {...props}>
      <Slot />
    </div>
  );
}); 