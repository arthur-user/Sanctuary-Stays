/*When to use tailwind.config.js

Only if you need:

plugins
complex logic
advanced customization

If you define it in @theme, Tailwind will always generate it
If you define it in tailwind.config.js, Tailwind might ignore it depending on setup


👉 Best practice (v4)

Keep everything in CSS:

@theme {
  --color-primary-500: #5E82A6;
  --color-accent-500: #C69963;
}

*/