import { Elysia } from "elysia";
import { staticPlugin } from "@elysiajs/static";
import { build } from "./build";
import { createElement } from "react";
import { renderToReadableStream } from "react-dom/server";
import { App } from "./pages/App";

const host = Bun.env.HOST || "localhost";
const port = Bun.env.PORT || 3000;

const buildTimeStamp = await build();

async function handleRequest(pageComponent: any, index: string) {
	const page = createElement(pageComponent);
	const stream = await renderToReadableStream(page, {
		bootstrapModules: [index]
	});

	return new Response(stream, {
		headers: { "Content-Type": "text/html" }
	});
}

const app = new Elysia()
	.get("/", () => handleRequest(App, `indexes/AppIndex-${buildTimeStamp}.js`))
	.use(
		staticPlugin({
			assets: "./build",
			prefix: ""
		})
	)
	.listen(port);

if (app) {
	console.log(`server started on http://${host}:${port}`);
}
