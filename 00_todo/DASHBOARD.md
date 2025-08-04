# Habits

```dataviewjs
dv.span("**🤓 Productive ️🏛️**")

const calendarData = {
    colors: {
        scale: ["#ffffd9",
			  "#edf8b1",
			  "#c7e9b4",
			  "#7fcdbb",
			  "#41b6c4",
			  "#1d91c0",
			  "#225ea8",
			  "#253494",
			  "#081d58"]
    },
    entries: []
}

for(let page of dv.pages('"01_daily_notes"').where(p=>p.productive)){
    calendarData.entries.push({
        date: page.file.name,
        intensity: page.productive,
        content: await dv.span(`[](${page.file.name})`), //for hover preview
    })
       
}

renderHeatmapCalendar(this.container, calendarData)
```
```dataviewjs
dv.span("**🏋️ Exercise/Run ️🏃**")

const calendarData = {
    colors: {
        red: ["#B80E65","#1791B1","#1C1B4D",]
    },
    entries: []
}

for(let page of dv.pages('"01_daily_notes"').where(p=>p.exercise)){
    calendarData.entries.push({
        date: page.file.name,
        intensity: page.exercise,
        content: await dv.span(`[](${page.file.name})`), //for hover preview
    })
       
}

renderHeatmapCalendar(this.container, calendarData)
```

```dataviewjs
dv.span("**🧘‍♂️ Meditation 🧘‍♀️**")

const calendarData = {
    year: 2024,
    colors: {
        white: ["#6495ED"],
    },
    entries: []
}

for(let page of dv.pages('"01_daily_notes"').where(p=>p.meditation)){
	 
    calendarData.entries.push({
        date: page.file.name,
        //intensity: 4,
        //content: "🧘‍♂️",
        content: await dv.span(`[](${page.file.name})`), //for hover preview
    })   
}

//console.log(calendarData)
	
renderHeatmapCalendar(this.container, calendarData)
```

```dataviewjs
dv.span("**💸 Money Spent 💸**")

const calendarData = {
    entries: [],
    colors: {
        oldGithubGreen11:[
            "hsl(65, 83%, 88%)",
            "hsl(70, 77%, 78%)",
            "hsl(80, 62%, 72%)",
            "hsl(95, 52%, 66%)",
            "hsl(112, 45%, 61%)",
            "hsl(125, 43%, 56%)",
            "hsl(132, 41%, 49%)",
            "hsl(132, 45%, 43%)",
            "hsl(132, 49%, 36%)",
            "hsl(132, 54%, 29%)", 
            "hsl(132, 59%, 24%)",
        ]
    },
}

 
for(let page of dv.pages('"01_daily_notes"').where(p=>p.moneySpent)){

    calendarData.entries.push({
        date: page.file.name,
        intensity: page.moneySpent,
        content: await dv.span(`[](${page.file.name})`), //for hover preview
    })  
}

renderHeatmapCalendar(this.container, calendarData)
```

>[!info] Deneme
> ```tracker
> searchType: frontmatter
> searchTarget: meditation
> datasetName: 🧘‍♂️ Meditation 🧘‍♀️
> folder: 01_daily_notes
> month:	
>     startWeekOn: 'Mon'
> ```
> ```tracker
> searchType: frontmatter
> searchTarget: meditation
> datasetName: 🧘‍♂️ Meditation 🧘‍♀️
> folder: 01_daily_notes
> summary:
 >   template: "Longest Streak: {{maxStreak()}} day(s)\nLongest Breaks: {{maxBreaks()}} day(s)\nLast streak: {{currentStreak()}} day(s)"

```tracker
searchType: frontmatter
searchTarget: moneySpent
folder: 01_daily_notes
startDate: 2024-04-30
accum: true
line:
    title: Finance
    yAxisLabel: EUR
    lineWidth: 4
    
```

# To Read

> [!todoist] read
> ```dataview
> TASK FROM ""
> WHERE contains(tags, "#todo/read")
> ```

> [!todoist] research
> ```dataview
> TASK FROM ""
> WHERE contains(tags, "#todo/research")
> ```

# Productivity
>[!example]- Today
> ```toggl
> summary today
> ```

>[!example]- This Week
> ```toggl
> summary week
> ```

>[!example]- Last 7 Days
> ```toggl
> LIST
> PAST 30 DAYS
> TITLE "PAST 30 DAYS"
> ```
# TODOs
>[!question]- TODOs all
> ```tasks
> not done
> group by priority
> group by filename
> ```

>[!success]- TODOs done this week
> ```tasks
> # done after one week ago
> done after sunday
> group by done
>  ```

# Literature Notes

> [!info]- All Literature Notes
>
> 
> ```dataview  
> TABLE  
> title as Title,   
> FirstAuthor as "First Author",   
> Year as Year,  
> itemType as Item,   
> Citekey as Citekey,   
> Contribution as Contribution  
> FROM "04_literature_notes"  
> ```

```dataview
TABLE productive
FROM #daily_note 
WHERE file.day >= date(sow) and file.day <= date(eow)
```
