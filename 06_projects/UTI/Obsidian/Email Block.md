---
title: Email Block
tags:
  - project_note 2024
  - utility
---
|     Created      |  Last Modified   |       Exists Since        |
|:----------------:|:----------------:|:----------------:|
| `= this.file.ctime` | `= this.file.mtime` | `= date(now) - this.file.ctime`|

# Email Block
```email
to: info@randommail.com
subject: My Subject
# body: [[MyMail4711]] if you want to link a note
variables:
  myvar: TestVar
---
Hi there {{myvar}},

this is my new body

Best!
Utku.
```

## References
1. [[Obsidian]]