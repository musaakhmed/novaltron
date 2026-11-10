import fs from "node:fs";
import path from "node:path";
import { compile, optimize } from "@tailwindcss/node";
import { Scanner } from "@tailwindcss/oxide";

const inputPath = path.resolve(process.cwd(), "src/app/tailwind.css");
const outputPath = path.resolve(process.cwd(), "src/app/globals.css");

const css = fs.readFileSync(inputPath, "utf8");
const compiler = await compile(css, {
  from: inputPath,
  base: path.dirname(inputPath),
  onDependency: () => {},
});

const scanner = new Scanner({
  sources: [{ base: path.resolve(process.cwd(), "src"), pattern: "**/*", negated: false }],
});

const candidates = scanner.scan();
const built = compiler.build(candidates);
const optimized = optimize(built, { minify: false });

fs.writeFileSync(
  outputPath,
  `/* Auto-generated from src/app/tailwind.css via @tailwindcss/node */\n${optimized.code}`,
  "utf8"
);
console.log(`✓ Compiled Tailwind CSS v4 (${candidates.length} candidates) -> src/app/globals.css`);
