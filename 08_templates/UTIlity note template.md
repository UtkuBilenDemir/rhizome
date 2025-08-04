<%*
  let title = tp.file.title
  if (title.startsWith("Untitled")) {
    title = await tp.system.prompt("Title");
    await tp.file.rename(`${title}`);
  } 
  let folder = tp.file.folder(false)
  tR += "---"
%>
title: <%* tR += `${title}` %>
tags:
  - project_note <%tp.file.creation_date("YYYY")%>
  - utility
---
|     Created      |  Last Modified   |       Exists Since        |
|:----------------:|:----------------:|:----------------:|
| `= this.file.ctime` | `= this.file.mtime` | `= date(now) - this.file.ctime`|

# <%* tR += `${title}` %>
<% tp.file.cursor() %>

# References
1. [[<%* tR += `${folder}` %>]]