module.exports = {
  "{apps,libs}/**/*.{ts,tsx}": (files) => {
    return `nx affected --target=typecheck --files=${files.join(",")} --noEmit`;
  },
  "{apps,libs}/**/*.{js,ts,jsx,tsx,json}": [
    (files) => `nx affected:lint --files=${files.join(",")}`,
    (files) => `nx format:write --files=${files.join(",")}`,
  ],
};
