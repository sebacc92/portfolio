import { component$ } from "@builder.io/qwik";
import { _ } from "compiled-i18n";
import { 
  LuGithub, 
  LuTwitter, 
  LuLinkedin, 
  LuInstagram, 
  LuYoutube,
  LuMusic
} from "@qwikest/icons/lucide";

export default component$(() => {
  const socialLinks = [
    {
      name: "GitHub",
      url: "https://github.com/sebacc92",
      icon: LuGithub,
      color: "hover:text-gray-400"
    },
    {
      name: "Twitter",
      url: "https://twitter.com/sebacc92",
      icon: LuTwitter,
      color: "hover:text-blue-400"
    },
    {
      name: "LinkedIn",
      url: "https://linkedin.com/in/sebastiancardoso92/",
      icon: LuLinkedin,
      color: "hover:text-blue-600"
    },
    {
      name: "Instagram",
      url: "https://instagram.com/sebacc92",
      icon: LuInstagram,
      color: "hover:text-pink-500"
    },
    {
      name: "YouTube",
      url: "https://youtube.com/@sebacc92",
      icon: LuYoutube,
      color: "hover:text-red-500"
    },
    {
      name: "TikTok",
      url: "https://tiktok.com/@sebacc92",
      icon: LuMusic,
      color: "hover:text-pink-400"
    }
  ];

  return (
    <footer class="h-20 glass-effect border-t border-border flex-shrink-0">
      <div class="container mx-auto px-4 py-4">
        {/* Social Links */}
        <div class="flex justify-center space-x-4 mb-2">
          {socialLinks.map((social) => (
            <a
              key={social.name}
              href={social.url}
              target="_blank"
              rel="noopener noreferrer"
              class={`text-muted-foreground hover:text-foreground transition-all duration-300 hover:scale-110 ${social.color}`}
              aria-label={social.name}
            >
              <social.icon class="w-5 h-5" />
            </a>
          ))}
        </div>

        {/* Copyright */}
        <div class="text-center">
          <p class="text-xs text-muted-foreground">
            © 2025 Sebastian Cardoso. {_`allRightsReserved`}
          </p>
        </div>
      </div>
    </footer>
  );
}); 