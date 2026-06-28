[Date note](../06-27.md)

* [x] Remove date note title
* [x] Test dated note creation 
```diff
note today
cat 06-27.md
- [6/26](../README.md)
```

* [ ] Test dated subnote creation 
```diff
note "A"
cat 06-27.md
- [6/26](../README.md)
```

###### Test dated note creation 
```diff
andrew@Andrews-MBP-2 test % ls
README.md
andrew@Andrews-MBP-2 test % cat README.md
andrew@Andrews-MBP-2 test % note month
Created month: "June"
andrew@Andrews-MBP-2 test % cat README.md
| S | M | T | W | T | F | S |
|---|---|---|---|---|---|---|
|   | 1 | 2 | 3 | 4 | 5 | 6 |
| 7 | 8 | 9 | 10 | 11 | 12 | 13 |
| 14 | 15 | 16 | 17 | 18 | 19 | 20 |
| 21 | 22 | 23 | 24 | 25 | 26 | 27 |
| 28 | 29 | 30 |   |   |   |   |

andrew@Andrews-MBP-2 test % ls
README.md
andrew@Andrews-MBP-2 test % note today
andrew@Andrews-MBP-2 test % cat README.md
| S | M | T | W | T | F | S |
|---|---|---|---|---|---|---|
|   | 1 | 2 | 3 | 4 | 5 | 6 |
| 7 | 8 | 9 | 10 | 11 | 12 | 13 |
| 14 | 15 | 16 | 17 | 18 | 19 | 20 |
| 21 | 22 | 23 | 24 | 25 | 26 | [27](./06-27.md) |
| 28 | 29 | 30 |   |   |   |   |

andrew@Andrews-MBP-2 test % ls
06-27.md        README.md
+ andrew@Andrews-MBP-2 test % cat 06-27.md
```