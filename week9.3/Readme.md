1.at first run in terminal
 - npm -g install typescript
 - tsc  -init
 2.then in tsconfig.json file change :
  - outDir: ./ to outDir:./dist
  - rootDir: ./ to rootDir: ./src

3.then run: tsc -b
4. then run : node dist/a.js

###  typescript does not run any code its just check the all types of your code and convert it into js then js run and compile the code.

