import { component$ } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "~/components/ui/card/card";
import { Button } from "~/components/ui/button/button";
import { Badge } from "~/components/ui/badge/badge";
import { LuExternalLink, LuGithub } from "@qwikest/icons/lucide";
import { _, getLocale } from "compiled-i18n";
import AnimatedBackground from "~/components/animated-background";

const projects = [
  {
    id: 1,
    title: "Reversi Game",
    description: "Juego de Reversi con interfaz suave y responsiva. 🎮",
    descriptionEn: "Classic 8x8 game with a smooth and responsive interface. 🎮",
    image: "https://sebastiancardoso.com/reversi.png",
    technologies: ["React", "Redux", "CSS", "Game Logic"],
    github: "https://github.com/sebaveg/Reversi-game",
    demo: "https://reversi-game.sebastiancardoso92.vercel.app/",
  }
];

export default component$(() => {
  const currentLocale = getLocale();

  return (
    <div class="min-h-screen pt-20 pb-12 animated-background dot-pattern">
      <AnimatedBackground />
      <div class="container mx-auto px-4 relative z-10">
        <div class="text-center mb-12">
          <h1 class="text-4xl md:text-6xl font-bold gradient-text mb-4">{_`myProjects`}</h1>
          <p class="text-xl text-muted-foreground max-w-2xl mx-auto">
            {_`projectsDescription`}
          </p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project) => (
            <Card key={project.id} class="glass-effect hover:scale-105 transition-all duration-300 group shadow-lg hover:shadow-xl">
              <CardHeader class="p-0">
                <div class="relative overflow-hidden rounded-t-lg">
                  <img
                    src={project.image}
                    alt={project.title}
                    width={400}
                    height={192}
                    class="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div class="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
              </CardHeader>
              <CardContent class="p-6">
                <CardTitle class="text-xl mb-2">{project.title}</CardTitle>
                <CardDescription class="mb-4">
                  {currentLocale === "es" ? project.description : project.descriptionEn}
                </CardDescription>

                <div class="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech) => (
                    <Badge key={tech} variant="secondary">
                      {tech}
                    </Badge>
                  ))}
                </div>

                <div class="flex gap-2">
                  <a href={project.github} target="_blank" rel="noopener noreferrer">
                    <Button look="outline" size="sm" class="bg-background/80 backdrop-blur-sm border-2 hover:bg-background/90 dark:bg-secondary dark:hover:bg-secondary/80">
                      <LuGithub class="w-4 h-4 mr-2" />
                      GitHub
                    </Button>
                  </a>
                  <a href={project.demo} target="_blank" rel="noopener noreferrer">
                    <Button size="sm" class="bg-primary hover:bg-primary/90">
                      <LuExternalLink class="w-4 h-4 mr-2" />
                      Demo
                    </Button>
                  </a>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
});

export const head: DocumentHead = {
  title: "Portfolio - Proyectos",
  meta: [
    {
      name: "description",
      content: "Portfolio de proyectos - Una colección de proyectos que demuestran mis habilidades y experiencia",
    },
  ],
}; 