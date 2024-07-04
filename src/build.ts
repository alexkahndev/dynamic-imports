import { readdir, writeFile, rm, mkdir } from "node:fs/promises";
import { extname, join } from "node:path";
import shell from "shelljs";

const buildDir = "./build";

const reactIndexDir = "./src/indexes";

const reactPagesDir = "./src/pages";

async function generateReactIndexFiles() {
	await rm(reactIndexDir, { recursive: true, force: true });
	await mkdir(reactIndexDir);

	try {
		const files = await readdir(reactPagesDir);

		for (const file of files) {
			const componentName = file.split(".")[0];

			const content = [
				'import { hydrateRoot } from "react-dom/client";',
				`import { ${componentName} } from "../pages/${componentName}";\n`,
				`hydrateRoot(document, <${componentName} />);`
			].join("\n");

			await writeFile(
				join(reactIndexDir, `${componentName}Index.tsx`),
				content
			);
		}
	} catch (error) {
		console.error(`Error generating index files: ${error}`);
	}
}

export async function build() {
	await rm(buildDir, { recursive: true, force: true });
	await generateReactIndexFiles();

	const reactFiles = await readdir(reactIndexDir);

	const entryPaths = reactFiles.map((file) => join(reactIndexDir, file));

	const buildTimeStamp = Date.now();

	const { logs, success } = await Bun.build({
		entrypoints: entryPaths,
		outdir: "./build",
		root: "./src",
		naming: `[dir]/[name].[ext]`,
		//minify: true,
		splitting: true,
		target: "browser",
		format: "esm"
	});

	if (!success) {
		throw new AggregateError(logs);
	}

	return buildTimeStamp;
}
