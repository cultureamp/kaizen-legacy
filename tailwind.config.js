const { Preset } = require("@kaizen/tailwind")

module.exports = {
  // Glob pattern to match files containing TW classes. May be different for your project.
  content: ["./**/*.{ts,tsx,mdx}"],
  // Override the default Tailwind preset with the Kaizen one.
  presets: [Preset],
  // Preflight is a heavy-handed css reset. We recommend disabling it in your project.
  corePlugins: {
    preflight: false,
  },
}
