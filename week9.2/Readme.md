1.at first run in terminal
 - npm -g install typescript
 - tsc  -init
 2.then in tsconfig.json file change :
  - outDir: ./ to outDir:./dist
  - rootDir: ./ to rootDir: ./src

3.then run: tsc -b
4. then run : node dist/a.js