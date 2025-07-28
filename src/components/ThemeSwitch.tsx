import { component$, useSignal, $ } from "@builder.io/qwik";
import { LuMoon, LuSun } from "@qwikest/icons/lucide";
import { Button } from "./ui/button/button";

export const ThemeSwitch = component$(() => {
  const theme = useSignal("dark");

  // Inicializar el tema desde localStorage o preferencias del sistema
  const initializeTheme = $(
    () => {
      if (typeof document !== "undefined") {
        const savedTheme = localStorage.getItem("theme");
        const isDark = document.documentElement.classList.contains('dark');
        
        if (savedTheme) {
          theme.value = savedTheme;
        } else if (isDark) {
          theme.value = "dark";
        } else {
          // Default to dark mode
          theme.value = "dark";
        }
      }
    }
  );

  const toggleTheme = $(
    () => {
      const isDark = document.documentElement.classList.contains('dark');
      const newTheme = isDark ? "light" : "dark";
      
      if (newTheme === 'dark') {
        document.documentElement.classList.add('dark');
      } else {
        document.documentElement.classList.remove('dark');
      }
      
      localStorage.setItem("theme", newTheme);
      theme.value = newTheme;
    }
  );

  // Inicializar el tema cuando el componente se monta
  initializeTheme();

  return (
    <Button look="ghost" size="icon" onClick$={toggleTheme} aria-label="Toggle theme">
      {theme.value === "light" ? <LuMoon class="h-5 w-5" /> : <LuSun class="h-5 w-5" />}
    </Button>
  );
}); 