import { component$ } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";

export default component$(() => {
  return (
    <>
      <h1>Hi 👋</h1>
      <div>
        Pagina about
      </div>
    </>
  );
});

export const head: DocumentHead = {
  title: "Sebastian",
  meta: [
    {
      name: "description",
      content: "Qwik site description",
    },
  ],
};
