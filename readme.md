# Reproduction for TypeScript memory usage issue

[microsoft/TypeScript#58011](https://github.com/microsoft/TypeScript/issues/58011)

To reproduce the problem on Windows:

```shell
cd Workspace
npm install
npm start
```

This will create a "watch compiler host" in a similar way to [what the `@typescript-eslint` plugin does](https://github.com/typescript-eslint/typescript-eslint/blob/d5615d72fbd899b0827b10a00192e6bce9f0c4eb/packages/typescript-estree/src/create-program/getWatchProgramsForProjects.ts#L253-L363).

The key to the problem is the path to the TypeScript config file does not match the real file name on disk - it's all lowercase, while the `Workspace/` folder has a capital "W".

To run the same code using the _real_ file path, run:

```shell
npm run real-path
```

| Extended Diagnostics      | `npm start` | `npm run real-path` |
| ------------------------- | ----------: | ------------------: |
| Files                     |        4843 |                4843 |
| Lines of Library          |       38041 |               38041 |
| Lines of Definitions      |      174189 |              174189 |
| Lines of TypeScript       |       32561 |               32561 |
| Lines of JavaScript       |          30 |                  30 |
| Lines of JSON             |           0 |                   0 |
| Lines of Other            |           0 |                   0 |
| Identifiers               |      201753 |              201753 |
| Symbols                   |      140060 |              140060 |
| Types                     |        2272 |                2272 |
| Instantiations            |         168 |                 168 |
| Memory used               |    1448950K |             335819K |
| Assignability cache size  |          24 |                  24 |
| Identity cache size       |           0 |                   0 |
| Subtype cache size        |           0 |                   0 |
| Strict subtype cache size |           0 |                   0 |
| I/O Read time             |       0.57s |               0.69s |
| Parse time                |       1.62s |               1.76s |
| ResolveModule time        |       1.12s |               1.56s |
| ResolveTypeReference time |       0.02s |               0.02s |
| ResolveLibrary time       |       0.07s |               0.07s |
| Program time              |      26.18s |               8.88s |
| Bind time                 |       0.59s |               0.62s |
| Check time                |       0.80s |               1.09s |
| printTime time            |       0.00s |               0.00s |
| Emit time                 |       0.00s |               0.00s |
| Total time                |      27.57s |              10.60s |
