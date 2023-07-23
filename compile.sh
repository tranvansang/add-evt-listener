rm -rf index.d.cts index.d.mts index.cjs index.mjs \
	&& yarn tsc --declaration --inlineSourceMap --outDir . index.ts --module commonjs --target esnext \
	&& mv index.d.ts index.d.cts \
	&& mv index.js index.cjs \
	&& yarn tsc --declaration --inlineSourceMap --outDir . index.ts --module esnext --target esnext \
	&& mv index.d.ts index.d.mts \
	&& mv index.js index.mjs
