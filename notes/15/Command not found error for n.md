# [Command not found error for n](../15.md)

Read [](file:///c%3A/Users/M345373/Projects/n/app/package.json)

The `n` command points to `bin/note`, but that file doesn't exist. Let me check the bin directory. 

Read [](file:///c%3A/Users/M345373/Projects/n/app/bin)

Read [](file:///c%3A/Users/M345373/Projects/n/app/bin/main.js#1-1), lines 1 to 40

The problem: your `bin` config maps `n` to `bin/note`, but that file doesn't exist (the actual entry point is `bin/main.js`). npm can't create a working symlink to a missing file, so `n` isn't found.

Let me fix the `bin` mapping to point `n` at the existing entry file: 

Replacing 4 lines with 4 lines in [](file:///c%3A/Users/M345373/Projects/n/app/package.json)


```

```
Now re-link so npm regenerates the `n` symlink: 

Ran terminal command:  npm link && n --help
Completed with input:  npm link && n --help

Ran terminal command:  cd app && npm link && n --help

Fixed. The `n` command now works.

The issue was in package.json: the `n` bin entry pointed to `bin/note`, which doesn't exist. I changed it to `bin/main.js` (the same working entry point as notes), then re-ran `npm link` to regenerate the symlink.

Made changes.