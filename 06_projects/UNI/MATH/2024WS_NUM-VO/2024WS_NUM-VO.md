---
title: 2024WS_NUM-VO
tags:
  - MOC 2025
---

|       Created       |    Last Modified    |          Exists Since           |
| :-----------------: | :-----------------: | :-----------------------------: |
| `= this.file.ctime` | `= this.file.mtime` | `= date(now) - this.file.ctime` |

# 2024WS_NUM-VO
```dataview
table
  file.folder as "Folder",
  dateformat(file.ctime, "yyyy-MM-dd") as "Created",
  dateformat(file.mtime, "yyyy-MM-dd") as "Last Edited",
  file.tags as "Tags",
  file.outlinks as "Links"
from [[2024WS_NUM-VO]]
where file.path != this.file.path
sort file.name asc
```

## TODO

- [x] Kapitel 1
	- [ ] Check [@deuflhard2003] starting with p. 21 for error, stability, condition
- [ ] Kapitel 2
- [ ] Kapitel 3
- [ ] Kapitel 4
- [ ] Kapitel 5
- [ ] Kapitel 6

# References
1. [[MATH]]