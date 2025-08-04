<%*
  let title = tp.file.title
  if (title.startsWith("Untitled")) {
    title = await tp.system.prompt("Title");
    await tp.file.rename(`${title}`);
  } 
  tR += "---"
%>
title: <%* tR += `${title}` %>
tags:
  - zettel <%tp.file.creation_date("YYYY")%>
---
|     Created      |  Last Modified   |       Exists Since        |
|:----------------:|:----------------:|:----------------:|
| `= this.file.ctime` | `= this.file.mtime` | `= date(now) - this.file.ctime`|

# <%* tR += `${title}` %>
<% tp.file.cursor() %>

# References