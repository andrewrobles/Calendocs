[Kebab case file names](../07-04.md)

```diff
% note month
Created month: "January"
% note "Lorem Ipsum"
Created note: "Lorem Ipsum"
```

```diff
% cat 01-01.md
[1/1](./README.md)

- * [Lorem Ipsum](./01-01/Lorem%20Ipsum.md)
+ * [Lorem Ipsum](./01-01/lorem-ipsum.md)
```

```diff
% cat 01-01.md
% ls 01-01  
- Lorem Ipsum.md
+ lorem-ipsum.md
```