---
title: BIODIV
tags:
  - MOC 2025
---

|       Created       |    Last Modified    |        Exists Since         |
| :-----------------: | :-----------------: | :-------------------------: |
| `= this.file.ctime` | `= this.file.mtime` | `= date(now) - this.file.ctime` |

# BIODIV
```dataview
table
  file.folder as "Folder",
  dateformat(file.ctime, "yyyy-MM-dd") as "Created",
  dateformat(file.mtime, "yyyy-MM-dd") as "Last Edited",
  file.tags as "Tags",
  file.outlinks as "Links"
from [[BIODIV]]
where file.path != this.file.path
sort file.name asc
```

## Sources
1. [CALL](https://cordis.europa.eu/programme/id/HORIZON_HORIZON-CL6-2025-01-BIODIV-08)
2. [WP1-DRAFT](https://zsiat.sharepoint.com/:w:/r/sites/BioDiv-08-Bioregions/_layouts/15/Doc2.aspx?action=edit&sourcedoc=%7B8f3911f4-6d0c-4719-875b-27e6e967eadd%7D&wdOrigin=TEAMS-MAGLEV.teamsSdk_ns.rwc&wdExp=TEAMS-TREATMENT&wdhostclicktime=1754563486144&web=1)
3. [PROPOSAL](https://zsiat.sharepoint.com/:w:/r/sites/BioDiv-08-Bioregions/_layouts/15/Doc2.aspx?action=edit&sourcedoc=%7Bf80981f5-6036-41ae-9a20-c953bc22a36c%7D&wdOrigin=TEAMS-MAGLEV.teamsSdk_ns.rwc&wdExp=TEAMS-TREATMENT&wdhostclicktime=1754563434073&web=1)

## TODO

# References
1. [[BIDODIV]]