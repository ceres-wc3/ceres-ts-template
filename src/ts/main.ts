/* eslint-disable @typescript-eslint/triple-slash-reference */
// This is necessary to bring in Lua and Ceres declarations into the scope
// Another alternative is to put these into the `types` array in `tsconfig.json`
/// <reference types="lua-types/5.3"/>
/// <reference types="ceres-decl/ceres"/>

import { example } from "example"
import { hello } from "./submodule"

print(`example: ${example()}`)
print(`submodule: ${hello()}`)
