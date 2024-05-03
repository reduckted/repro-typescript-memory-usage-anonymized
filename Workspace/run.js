// @ts-check

const ts = require("typescript");
const path = require("path");
const { reportStatistics } = require("./extended-diagnostics");

let tsconfigPath = path.join(__dirname, "tsconfig.eslint.json");

if (!process.argv.includes("--real-path")) {
  tsconfigPath = tsconfigPath.toLowerCase();
}

// @ts-ignore
ts.performance.enable();

let host = ts.createWatchCompilerHost(
  tsconfigPath,
  {
    noEmit: true,
    noUnusedLocals: true,
    noUnusedParameters: true,
    allowNonTsExtensions: true,
    allowJs: true,
    checkJs: true,
    extendedDiagnostics: true,
  },
  ts.sys,
  ts.createAbstractBuilder,
  () => {},
  () => {},
);

host.onUnRecoverableConfigFileDiagnostic = (diagnostic) => {
  console.log(
    ts.flattenDiagnosticMessageText(diagnostic.messageText, ts.sys.newLine),
  );
};

host.trace = () => undefined;

console.log(`TypeScript Config:    ${tsconfigPath}`);
console.log(`TypeScript Version:   ${ts.version}`);

let memoryBefore = process.memoryUsage().heapUsed;
let program = ts.createWatchProgram(host);
let memoryAfter = process.memoryUsage().heapUsed;

console.log(
  `Memory used:          ${Math.trunc((memoryAfter - memoryBefore) / 1048576)} MB`,
);

console.log();
console.log(`Extended Diagnostics:`);
reportStatistics(ts.sys, program.getProgram().getProgram(), undefined);

program.close();
