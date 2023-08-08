rm -rf index.d.{m,c}ts index.{m,c}js \
	&& yarn tsc --declaration --outDir . index.ts --module commonjs --target esnext \
	&& mv index.d.{,c}ts \
	&& mv index.{,c}js \
	&& yarn tsc --declaration --outDir . index.ts --module esnext --target esnext \
	&& mv index.d.{,m}ts \
	&& mv index.{,m}js \
	&& echo 'manually edit index.cjs' \
	&& exit 1 # exit 1 to prevent using this script in auto publish command
