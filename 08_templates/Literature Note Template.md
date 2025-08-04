---
category: literature_note
aliases: 
  - {{title}}
  - {{citekey}}
tags:
  - literature_note
  - zotero
  - {% if allTags %}{{allTags}}{% endif %}
citekey: {{citekey}}
---

|       Created       |    Last Modified    |          Exists Since           |
| :-----------------: | :-----------------: | :-----------------------------: |
| `= this.file.ctime` | `= this.file.mtime` | `= date(now) - this.file.ctime` |
>[!info] Metadata
{% for type, creators in creators | groupby("creatorType") -%}
{%- for creator in creators -%}
> **{{"First" if loop.first}}{{type | capitalize}}**::
{%- if creator.name %} {{creator.name}}  
{%- else %} {{creator.lastName}}, {{creator.firstName}}  
{%- endif %}  
{% endfor %}~ 
{%- endfor %}    
> **Title**:: {{title}}  
> **Year**:: {{date | format("YYYY")}}   
> **Citekey**:: {{citekey}} {%- if itemType %}  
> **itemType**:: {{itemType}}{%- endif %}{%- if itemType == "journalArticle" %}  
> **Journal**:: *{{publicationTitle}}* {%- endif %}{%- if volume %}  
> **Volume**:: {{volume}} {%- endif %}{%- if issue %}  
> **Issue**:: {{issue}} {%- endif %}{%- if itemType == "bookSection" %}  
> **Book**:: {{publicationTitle}} {%- endif %}{%- if publisher %}  
> **Publisher**:: {{publisher}} {%- endif %}{%- if place %}  
> **Location**:: {{place}} {%- endif %}{%- if pages %}   
> **Pages**:: {{pages}} {%- endif %}{%- if DOI %}  
> **url**:: {{url}}
> **DOI**:: {{DOI}} {%- endif %}{%- if ISBN %}  
> **ISBN**:: {{ISBN}} {%- endif %}    

> [!link]-
> zotero_link:: {{pdfZoteroLink}}

> [!cite]-
> citekey:: {{citekey}}

> [!abstract]-
> abstract:: {{abstractNote}}

> [!keywords]-
> keywords:: {{allTags}}

> [!authors]-
> authors:: {{authors}}{{directors}}

> [!related]-
{% for relation in relations -%}
{%- if relation.citekey -%}
> related:: {{relation.citekey}}
{% endif -%}
{%- endfor %}

```dataview
TABLE created, updated as modified, tags, type
FROM ""
WHERE related != null
AND contains(related, "{{citekey}}")
```

> [!hypothesis]-
> hypothesis:: 

> [!methodology]- 
> methodology:: 

> [!result]- Result(s) 
> results::

> [!summary]- Summary of Key Points
> summary:: 

# Notes

| <mark class="hltr-grey">Highlight Color</mark> | Meaning                       |
| ---------------------------------------------- | ----------------------------- |
| <mark class="hltr-yellow">Yellow</mark>        | Interesting Point             |
| <mark class="hltr-orange">Orange</mark>        | Important Point By Author     |
| <mark class="hltr-red">Red</mark>              | Disagree with Author          |
| <mark class="hltr-blue">Blue</mark>            | Support the Author            |
| <mark class="hltr-magenta">Magenta</mark>      | Important To Me               |
| <mark class="hltr-purple">Purple</mark>        | Literary Note To Lookup Later |
| <mark class="hltr-green">Green</mark>          | Example                       |
| <mark class="hltr-grey">Grey</mark>            | New term, - definition        |

{% for attachments in attachments -%}
    {% for annotation in annotations -%}
        {%- if annotation.annotatedText -%} 
    		- <mark class="hltr-{{annotation.colorCategory | lower}}">"{{annotation.annotatedText | escape}}”</mark> [Page {{annotation.page}}](zotero://open-pdf/library/items/{{annotation.attachment.itemKey}}?page={{annotation.page}}&annotation={{annotation.id}})
        {%- endif %} 
        {%- if annotation.imageRelativePath -%}
        ![[{{annotation.imageRelativePath}}]] {%- endif %} 
	 {%- if annotation.comment %} 
	 	- {{annotation.comment}} 
	 {%- endif %} 
	{% endfor %}
{% endfor %}

> [!context]-
> ==(How this article relates to other work in the field; how it ties in with key issues and findings by others, including yourself)==
> context:: 

> [!significance]-
> ==(to the field; in relation to your own work)==
> significance:: 