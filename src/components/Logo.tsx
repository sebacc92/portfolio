import { component$ } from "@builder.io/qwik";

export default component$(() => {
  return (
    <svg 
      xmlns="http://www.w3.org/2000/svg" 
      viewBox="0 0 200 200"
      class="w-10 h-10"
    >
      {/* Texto "SC" */}
      <text 
        x="50%" 
        y="50%" 
        dominant-baseline="central" 
        text-anchor="middle"
        font-family="Arial, sans-serif"
        font-weight="bold"
        font-size="120"
        fill="#0066cc"
      >
        SC
      </text>
    </svg>
  );
}); 