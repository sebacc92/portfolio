import { component$, useStyles$ } from "@builder.io/qwik";
import { Button } from "~/components/ui/button/button";
import { LuArrowRight, LuDownload } from "@qwikest/icons/lucide";
import { _ } from "compiled-i18n";
import AnimatedBackground from "~/components/animated-background";
import { Link } from "@builder.io/qwik-city";

export default component$(() => {
  useStyles$(`
    @keyframes fade-in {
      from { opacity: 0; transform: translateY(30px); }
      to { opacity: 1; transform: translateY(0); }
    }
    
    @keyframes float {
      0%, 100% { transform: translateY(0px); }
      50% { transform: translateY(-20px); }
    }
    
    .animate-fade-in {
      animation: fade-in 1s ease-out;
    }
    
    .animate-fade-in-delay-1 {
      animation: fade-in 1s ease-out 0.2s both;
    }
    
    .animate-fade-in-delay-2 {
      animation: fade-in 1s ease-out 0.4s both;
    }
    
    .animate-fade-in-delay-3 {
      animation: fade-in 1s ease-out 0.6s both;
    }
    
    .animate-float {
      animation: float 6s ease-in-out infinite;
    }
    
    .animate-float-delay {
      animation: float 6s ease-in-out infinite 2s;
    }
    
    .animate-float-slow {
      animation: float 8s ease-in-out infinite 1s;
    }
  `);

  return (
    <div class="h-[calc(100vh-144px)] flex items-center justify-center relative overflow-hidden animated-background dot-pattern">
      <AnimatedBackground />

      <div class="container mx-auto px-4 z-10 relative">
        <div class="text-center space-y-8 max-w-4xl mx-auto">
          {/* Main Content */}
          <div class="space-y-6">
            <div class="space-y-2">
              <p class="text-xl md:text-2xl text-muted-foreground animate-fade-in font-medium">
                {_`welcome`}
              </p>
              <h1 class="text-5xl md:text-7xl font-bold gradient-text animate-fade-in-delay-1 leading-tight">
                Sebastian Cardoso
              </h1>
            </div>

            <h2 class="text-3xl md:text-5xl font-semibold text-foreground animate-fade-in-delay-2">
              {_`developer`}
            </h2>

            <p class="text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto animate-fade-in-delay-3 leading-relaxed">
              {_`description`}
            </p>
          </div>

          {/* Action Buttons */}
          <div class="flex flex-col sm:flex-row gap-4 justify-center items-center animate-fade-in-delay-3">
            <Link href="/projects">
              <Button size="lg" class="group shadow-lg hover:shadow-xl transition-all duration-300 bg-primary hover:bg-primary/90">
                {_`viewProjects`}
                <LuArrowRight class="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Button>
            </Link>

            <Button 
              look="outline" 
              size="lg" 
              class="group bg-background/80 backdrop-blur-sm border-2 hover:bg-background/90 transition-all duration-300 shadow-lg hover:shadow-xl dark:bg-secondary dark:hover:bg-secondary/80"
              onClick$={() => {
                const link = document.createElement('a');
                link.href = '/example_cv.pdf';
                link.download = 'Sebastian_Cardoso_CV.pdf';
                document.body.appendChild(link);
                link.click();
                document.body.removeChild(link);
              }}
            >
              <LuDownload class="mr-2 h-4 w-4 transition-transform group-hover:scale-110" />
              {_`downloadCV`}
            </Button>
          </div>

          {/* Floating Elements */}
          <div class="absolute top-20 left-10 w-20 h-20 bg-primary/20 rounded-full blur-xl animate-float dark:bg-primary/30"></div>
          <div class="absolute bottom-20 right-10 w-32 h-32 bg-secondary/20 rounded-full blur-xl animate-float-delay dark:bg-secondary/30"></div>
          <div class="absolute top-1/2 left-20 w-16 h-16 bg-accent/20 rounded-full blur-xl animate-float-slow dark:bg-accent/30"></div>
        </div>
      </div>
    </div>
  );
});