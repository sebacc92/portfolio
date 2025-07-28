import { component$ } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";
import { _ } from 'compiled-i18n'

export default component$(() => {
  return (
    <>
      <h1>Hi 👋</h1>
      <div>
        <span>{_`welcome`}</span>
        <br />
        <span>{_`happy_coding.`}</span>

        <span>{_`herramientas que necesitamos:`}</span>

        1. Tailwind
        2. Qwik ui
        3. i18n
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
