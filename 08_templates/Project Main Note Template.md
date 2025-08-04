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
- project_main_note <%tp.file.creation_date("YYYY")%>
---
|     Created      |  Last Modified   |       Now        |
|:----------------:|:----------------:|:----------------:|
| <% tp.file.creation_date("YYYY-MM-DD HH:mm") %> | <% tp.file.last_modified_date("YYYY-MM-DD HH:mm") %> | `<% tp.date.now("YYYY-MM-DD HH:mm") %>|

# <%* tR += `${title}` %>
<% tp.file.cursor() %>

## TODO

# References
