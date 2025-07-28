import { component$, type PropsOf } from "@builder.io/qwik";
import { cn } from "@qwik-ui/utils";

export const Progress = component$<PropsOf<"div"> & { value?: number }>(({ class: className, value = 0, ...props }) => {
  return (
    <div
      class={cn(
        "relative h-4 w-full overflow-hidden rounded-full bg-secondary",
        className
      )}
      {...props}
    >
      <div
        class="h-full w-full flex-1 bg-primary transition-all"
        style={{ transform: `translateX(-${100 - (value || 0)}%)` }}
      />
    </div>
  );
}); 