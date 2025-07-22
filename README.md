# Nuxt Multi Cache Example

## Error reproduction

npm run build

```
Nuxt Build Error: node_modules/unstorage/drivers/utils/node-fs.mjs (2:18): "dirname" is not exported by "__vite-browser-external", imported by "node_modules/unstorage/drivers/utils/node-fs.mjs".
file: /home/brainski/projects/repro-multicache/node_modules/unstorage/drivers/utils/node-fs.mjs:2:18

1: import { existsSync, promises as fsPromises } from "node:fs";
2: import { resolve, dirname } from "node:path";
^
3: function ignoreNotfound(err) {
4:   return err.code === "ENOENT" || err.code === "EISDIR" ? null : err;


    at getRollupError (node_modules/rollup/dist/es/shared/parseAst.js:401:41)
    at error (node_modules/rollup/dist/es/shared/parseAst.js:397:42)
    at Module.error (node_modules/rollup/dist/es/shared/node-entry.js:16830:16)
    at Module.traceVariable (node_modules/rollup/dist/es/shared/node-entry.js:17279:29)
    at ModuleScope.findVariable (node_modules/rollup/dist/es/shared/node-entry.js:14925:39)
    at FunctionScope.findVariable (node_modules/rollup/dist/es/shared/node-entry.js:5620:38)
    at FunctionBodyScope.findVariable (node_modules/rollup/dist/es/shared/node-entry.js:5620:38)
    at Identifier.bind (node_modules/rollup/dist/es/shared/node-entry.js:5394:40)
    at CallExpression.bind (node_modules/rollup/dist/es/shared/node-entry.js:2785:23)
    at CallExpression.bind (node_modules/rollup/dist/es/shared/node-entry.js:11986:15)
```
