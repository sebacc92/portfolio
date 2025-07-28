import { component$, getLocale, useSignal } from "@builder.io/qwik";
import { Button } from "./ui/button/button";
import { LuMenu, LuX } from "@qwikest/icons/lucide";
import { Link, useLocation } from "@builder.io/qwik-city";
import { _ } from "compiled-i18n";
import Logo from "~/components/Logo";
import { LocaleSelector } from "./locale-selector";
import { ThemeSwitch } from "~/components/ThemeSwitch";

export default component$(() => {
  const isMenuOpen = useSignal(false);
  const loc = useLocation();
  const currentLocale = getLocale()

  const navigation = [
    { name: _`home`, href: "/" },
    { name: _`projects`, href: "/projects" },
    { name: _`about`, href: "/about" },
    { name: _`contact`, href: "/contact" },
  ];

  return (
    <header class="fixed top-0 left-0 right-0 z-50 h-16 bg-white dark:bg-gray-900/95 backdrop-blur-md border-b border-gray-200 dark:border-gray-700 shadow-sm">
      <nav class="container mx-auto px-4 py-4">
        <div class="flex items-center justify-between">
          {/* Logo */}
          <a href="/" class="flex items-center space-x-2">
            <Logo />
          </a>

          {/* Desktop Navigation */}
          <div class="hidden md:flex items-center space-x-8">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={`/${currentLocale}${item.href}`}
                class={`transition-colors hover:text-blue-600 dark:hover:text-blue-400 ${
                  loc.url.pathname === item.href 
                    ? "text-blue-600 dark:text-blue-400 font-semibold" 
                    : "text-gray-700 dark:text-gray-300"
                }`}
              >
                {item.name}
              </Link>
            ))}
          </div>

          {/* Controls */}
          <div class="flex items-center space-x-2">
            {/* Language Selector */}
            <LocaleSelector />

            {/* Theme Toggle */}
            <ThemeSwitch />

            {/* Mobile Menu Button */}
            <Button look="ghost" size="icon" class="md:hidden text-gray-700 dark:text-gray-300" onClick$={() => (isMenuOpen.value = !isMenuOpen.value)} aria-label="Toggle menu">
              {isMenuOpen.value ? <LuX class="h-5 w-5" /> : <LuMenu class="h-5 w-5" />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen.value && (
          <div class="md:hidden mt-4 pb-4 border-t border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900/95 backdrop-blur-md">
            <div class="flex flex-col space-y-3 pt-4">
              {navigation.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  class={`px-4 py-3 rounded-lg transition-all duration-300 font-medium ${
                    loc.url.pathname === item.href 
                      ? "bg-blue-600 text-white shadow-lg" 
                      : "text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800"
                  }`}
                  onClick$={() => (isMenuOpen.value = false)}
                >
                  {item.name}
                </a>
              ))}
            </div>
          </div>
        )}
      </nav>
    </header>
  );
});