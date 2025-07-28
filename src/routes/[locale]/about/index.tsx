import { component$ } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";
import { Card, CardContent, CardHeader, CardTitle } from "~/components/ui/card/card";
import { Progress } from "~/components/ui/progress/progress";
import { _ } from "compiled-i18n";
import { LuCode, LuDatabase, LuGlobe, LuServer, LuMonitor, LuWrench, LuSmartphone, LuZap } from "@qwikest/icons/lucide";
import AnimatedBackground from "~/components/animated-background";

const skills = {
  frontend: [
    { name: _`qwikTypescript`, level: 99 },
    { name: _`reactNextjs`, level: 90 },
    { name: _`vueVuex`, level: 75 },
    { name: "Tailwind CSS", level: 95 },
  ],
  backend: [
    { name: _`nodeExpress`, level: 88 },
    { name: _`pythonFastapi`, level: 82 },
    { name: "GraphQL", level: 75 },
    { name: "REST APIs", level: 90 },
  ],
  database: [
    { name: _`postgresql`, level: 85 },
    { name: "MongoDB", level: 80 },
    { name: "Redis", level: 70 },
    { name: "Prisma", level: 88 },
  ],
  tools: [
    { name: _`docker`, level: 78 },
    { name: _`githubActions`, level: 75 },
    { name: "Git", level: 95 },
    { name: "Linux", level: 82 },
  ],
};

const workstation = [
  { name: "AMD Ryzen 7 4700U", description: "2.0 GHz with Radeon Graphics" },
  { name: "RAM", description: "24 GB" },
  { name: "OS", description: "Linux Mint 22.1 / Windows 11 Home" },
  { name: "Mouse", description: "Logitech MX Anywhere 3S - Graphite Gray" },
];

const coding = [
  { name: _`vscode`, description: "Main code editor with custom theme and extensions" },
  { name: _`cursor`, description: "AI-first code editor" },
  { name: _`warp`, description: "Modern terminal with AI capabilities" },
];

const apps = [
  { name: _`notion`, description: "All-in-one workspace for notes and project management" },
  { name: _`capcut`, description: "Video editing software" },
  { name: _`youtube`, description: "Content creation and learning platform" },
];

const devops = [
  { name: _`docker`, description: "Containerization for consistent deployments" },
  { name: _`githubActions`, description: "Automated CI/CD pipelines" },
  { name: _`netlifyRailway`, description: "Modern platforms for web deployment and hosting" },
];

export default component$(() => {
  return (
    <div class="min-h-screen pt-20 pb-12 animated-background dot-pattern">
      <AnimatedBackground />
      <div class="container mx-auto px-4 relative z-10">
        <div class="text-center mb-12">
          <h1 class="text-4xl md:text-6xl font-bold gradient-text mb-4">{_`aboutMe`}</h1>
          <p class="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
            {_`aboutDescription`}
          </p>
          
          {/* Profile Image */}
          <div class="flex justify-center mb-8">
            <div class="profile-image-container">
              <div class="w-48 h-80 md:w-64 md:h-96 rounded-2xl overflow-hidden profile-image">
                <img
                  src="/images/sebastian-profile.png"
                  alt="Sebastian Cardoso"
                  class="w-full h-full object-cover object-top"
                />
              </div>
              <div class="absolute -bottom-2 -right-2 w-16 h-16 rounded-full flex items-center justify-center profile-badge">
                <span class="text-white font-bold text-lg">SC</span>
              </div>
            </div>
          </div>
        </div>

        <div class="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          {/* About Text */}
          <Card class="glass-effect">
            <CardHeader>
              <CardTitle class="text-2xl">{_`myStory`}</CardTitle>
            </CardHeader>
            <CardContent class="space-y-4">
              <p class="text-muted-foreground">
                {_`myStoryText1`}
              </p>
              <p class="text-muted-foreground">
                {_`myStoryText2`}
              </p>
            </CardContent>
          </Card>

          {/* Experience */}
          <Card class="glass-effect">
            <CardHeader>
              <CardTitle class="text-2xl">{_`experience`}</CardTitle>
            </CardHeader>
            <CardContent class="space-y-6">
              <div class="border-l-2 border-primary pl-4 space-y-4">
                <div>
                  <h3 class="font-semibold">{_`freelanceFullstack`}</h3>
                  <p class="text-sm text-muted-foreground">{_`freelancePeriod`}</p>
                  <p class="text-sm mt-1">
                    {_`freelanceDescription`}
                  </p>
                </div>
                <div>
                  <h3 class="font-semibold">{_`frontendDeveloper`}</h3>
                  <p class="text-sm text-muted-foreground">
                    <a href="https://arzion.com" target="_blank" rel="noopener noreferrer" class="text-primary hover:underline">
                      {_`arzion`}
                    </a> • {_`frontendPeriod`}
                  </p>
                  <p class="text-sm mt-1">
                    {_`frontendDescription`}
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Skills */}
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          <Card class="glass-effect">
            <CardHeader class="text-center">
              <LuGlobe class="w-8 h-8 mx-auto mb-2 text-primary" />
              <CardTitle>{_`frontend`}</CardTitle>
            </CardHeader>
            <CardContent class="space-y-4">
              {skills.frontend.map((skill) => (
                <div key={skill.name}>
                  <div class="flex justify-between mb-1">
                    <span class="text-sm font-medium">{skill.name}</span>
                    <span class="text-sm text-muted-foreground">{skill.level}%</span>
                  </div>
                  <Progress value={skill.level} class="h-2" />
                </div>
              ))}
            </CardContent>
          </Card>

          <Card class="glass-effect">
            <CardHeader class="text-center">
              <LuServer class="w-8 h-8 mx-auto mb-2 text-primary" />
              <CardTitle>{_`backend`}</CardTitle>
            </CardHeader>
            <CardContent class="space-y-4">
              {skills.backend.map((skill) => (
                <div key={skill.name}>
                  <div class="flex justify-between mb-1">
                    <span class="text-sm font-medium">{skill.name}</span>
                    <span class="text-sm text-muted-foreground">{skill.level}%</span>
                  </div>
                  <Progress value={skill.level} class="h-2" />
                </div>
              ))}
            </CardContent>
          </Card>

          <Card class="glass-effect">
            <CardHeader class="text-center">
              <LuDatabase class="w-8 h-8 mx-auto mb-2 text-primary" />
              <CardTitle>{_`database`}</CardTitle>
            </CardHeader>
            <CardContent class="space-y-4">
              {skills.database.map((skill) => (
                <div key={skill.name}>
                  <div class="flex justify-between mb-1">
                    <span class="text-sm font-medium">{skill.name}</span>
                    <span class="text-sm text-muted-foreground">{skill.level}%</span>
                  </div>
                  <Progress value={skill.level} class="h-2" />
                </div>
              ))}
            </CardContent>
          </Card>

          <Card class="glass-effect">
            <CardHeader class="text-center">
              <LuCode class="w-8 h-8 mx-auto mb-2 text-primary" />
              <CardTitle>{_`tools`}</CardTitle>
            </CardHeader>
            <CardContent class="space-y-4">
              {skills.tools.map((skill) => (
                <div key={skill.name}>
                  <div class="flex justify-between mb-1">
                    <span class="text-sm font-medium">{skill.name}</span>
                    <span class="text-sm text-muted-foreground">{skill.level}%</span>
                  </div>
                  <Progress value={skill.level} class="h-2" />
                </div>
              ))}
            </CardContent>
          </Card>
        </div>

        {/* Additional Sections */}
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <Card class="glass-effect">
            <CardHeader class="text-center">
              <LuMonitor class="w-8 h-8 mx-auto mb-2 text-primary" />
              <CardTitle>{_`workstation`}</CardTitle>
            </CardHeader>
            <CardContent class="space-y-3">
              {workstation.map((item) => (
                <div key={item.name}>
                  <div class="font-medium text-sm">{item.name}</div>
                  <div class="text-xs text-muted-foreground">{item.description}</div>
                </div>
              ))}
            </CardContent>
          </Card>

          <Card class="glass-effect">
            <CardHeader class="text-center">
              <LuWrench class="w-8 h-8 mx-auto mb-2 text-primary" />
              <CardTitle>{_`coding`}</CardTitle>
            </CardHeader>
            <CardContent class="space-y-3">
              {coding.map((item) => (
                <div key={item.name}>
                  <div class="font-medium text-sm">{item.name}</div>
                  <div class="text-xs text-muted-foreground">{item.description}</div>
                </div>
              ))}
            </CardContent>
          </Card>

          <Card class="glass-effect">
            <CardHeader class="text-center">
              <LuSmartphone class="w-8 h-8 mx-auto mb-2 text-primary" />
              <CardTitle>{_`apps`}</CardTitle>
            </CardHeader>
            <CardContent class="space-y-3">
              {apps.map((item) => (
                <div key={item.name}>
                  <div class="font-medium text-sm">{item.name}</div>
                  <div class="text-xs text-muted-foreground">{item.description}</div>
                </div>
              ))}
            </CardContent>
          </Card>

          <Card class="glass-effect">
            <CardHeader class="text-center">
              <LuZap class="w-8 h-8 mx-auto mb-2 text-primary" />
              <CardTitle>{_`devops`}</CardTitle>
            </CardHeader>
            <CardContent class="space-y-3">
              {devops.map((item) => (
                <div key={item.name}>
                  <div class="font-medium text-sm">{item.name}</div>
                  <div class="text-xs text-muted-foreground">{item.description}</div>
                </div>
              ))}
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
});

export const head: DocumentHead = {
  title: "Sebastian Cardoso - Acerca de",
  meta: [
    {
      name: "description",
      content: "Portfolio - Acerca de mí, experiencia y habilidades de desarrollo",
    },
  ],
}; 