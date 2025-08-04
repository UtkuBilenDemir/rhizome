<%*
const { update } = app.plugins.plugins["dataview"].api;

const dv = app.plugins.plugins["dataview"].api;
const fs = app.vault.adapter;

const outputPath = "Dashboard/RenderedTasks.txt";  // ← where to save output
const tasks = dv.pages()
  .file
  .tasks
  .where(t => !t.completed && 
              t.text && 
              t.text.includes("#todo") &&
              !(t.text.includes("#todo/ongoing")) &&
              (t.start || t.due || t.scheduled))
  .where(t => {
    const date = t.start ?? t.due ?? t.scheduled;
    return date && date <= dv.date("tomorrow");
  });

let output = "📋 Today’s Tasks\n\n";
const groups = {
  high: [],
  normal: [],
  low: []
};

for (let task of tasks) {
  const text = task.text.replace(/\[.*?\]/, "").trim();  // remove tag bracket
  if (task.text.includes("#todo/high")) groups.high.push(text);
  else if (task.text.includes("#todo/low")) groups.low.push(text);
  else groups.normal.push(text);
}

if (groups.high.length > 0) {
  output += "\n🔥 High Priority\n";
  for (let t of groups.high) output += `- ${t}\n`;
}

if (groups.normal.length > 0) {
  output += "\n📦 Normal Priority\n";
  for (let t of groups.normal) output += `- ${t}\n`;
}

if (groups.low.length > 0) {
  output += "\n🍃 Low Priority\n";
  for (let t of groups.low) output += `- ${t}\n`;
}

await fs.write(outputPath, output);
tR += `✅ Wrote ${outputPath} at ${new Date().toLocaleTimeString()}`;
%>