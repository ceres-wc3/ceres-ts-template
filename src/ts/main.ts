// This initializes Cerrie and brings its utility functions into scope.
import "cerrie/init"

// This will enable live-reload in your map!
// Simply press F2 when in-game and it will trigger a recompilation
// It's useful to run `npm run watch` to automatically recompile all TS files as you edit them
import "cerrie/livereload"

import { example } from "example"
import { hello } from "./submodule"

print(`example: ${example()}`)
print(`submodule: ${hello()}`)
