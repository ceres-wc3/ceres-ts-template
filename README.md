# Ceres + TypeScript + Cerrie Template

This branch contains a sample configuration for using Ceres with TypeScript and [Cerrie](https://github.com/ceres-wc3/cerrie).

## Quick Start

### Prerequisites:

1. Make sure you have [NPM](https://www.npmjs.com/) installed.
2. Make sure you have downloaded [Ceres](https://github.com/ceres-wc3/ceres) and put it either into this project, or your `$PATH`

### Steps

1. Clone the repository - `git clone git@github.com:ceres-wc3/ceres-ts-template.git`.
2. Run `npm install` to download all necessary dependencies.
3. Run `npm run build` to compile all TypeScript code into Lua.
4. Run `ceres build -- --map mpq.w3x --output mpq` to build the map. The final map will be placed in `target/`

## Extra Things

### Running the map via Ceres

**_ Important! This section differs from the normal `ceres-ts-template` setup. If you want Live Reload to work (which is enabled by default), you will need to also setup `ceres.runConfig.mapDataDir`! You can read more about Live Reload in the [Cerrie repository](https://github.com/ceres-wc3/cerrie)._**

If you want to make Ceres to run WC3 by itself, you can use the `ceres run` command. However, before you can do that, it requires some configuration on your part.
Open up `runconfig.lua` and fill out the necessary configuration parameters. As a minimal example:

```lua
ceres.runConfig = {
    command = "C:/Program Files/Warcraft III/x86_64/Warcraft III.exe",
    args = {"-windowmode", "windowed"},
    mapDataDir = "C:/Users/Me/My Documents/Warcraft III/CustomMapData"
}
```

### Compilation in "watch" mode

You can also run the TSTL compiler in "watch" mode, so that it automatically recompiles code as soon as you edit it. There's a convenience NPM script to do that - `npm run watch`. Alternatively, you could start the compiler manually by using `npx ceres-tstl --watch` and specify whichever paramterers you so desire.

### VS Code Tasks

This project also includes some convenience VS Code tasks to be able to run the above things from within VS Code if you use it. Simply press `Ctrl-Shift-P` and type `runtask`, and select what you want to run.

### Project Anatomy

```
maps/           - folder to put your map files in
src/
    lua/        - pure Lua files which can be included by Ceres
    ts/         - TypeScript files which will be compiled into Lua files
target/         - directory where build artifacts will be placed
    compiled/   - artifact directory for Lua files produced by TSTL
build.lua       - Ceres build script, can be used to customize the build process
runconfig.lua   - user-local configuration for `ceres.runConfig`
tsconfig.json   - TSC/TSTL configuration, contains some Lua-specific settings
```
