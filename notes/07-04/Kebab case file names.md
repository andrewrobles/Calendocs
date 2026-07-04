[Kebab case file names](../07-04.md)

Create note
```diff
% note month
Created month: "January"
```
```diff
% note "Lorem Ipsum"
Created note: "Lorem Ipsum"
```
- [x] Test day link
```diff
% cat 01-01.md
[1/1](./README.md)

- * [Lorem Ipsum](./01-01/Lorem%20Ipsum.md)
+ * [Lorem Ipsum](./01-01/lorem-ipsum.md)
```
- [x] Test file name
```diff
% cat 01-01.md
% ls 01-01  
- Lorem Ipsum.md
+ lorem-ipsum.md
```
<!--

TODO: Rename note