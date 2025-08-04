module.exports = async (tp) => {
  const vault = app.vault;
  const fm = app.fileManager;
  const moment = window.moment;

  let file = app.workspace.getActiveFile();
  if (!file) {
    new Notice("❌ No active file.");
    return;
  }

  const content = await vault.read(file);

  const yamlMatch = content.match(/^---\n([\s\S]*?)\n---/);
  if (!yamlMatch) {
    new Notice("❌ No YAML frontmatter found.");
    return;
  }

  const yamlBlock = yamlMatch[1];
  const titleLine = yamlBlock.split("\n").find((line) => line.startsWith("title:"));
  if (!titleLine) {
    new Notice("❌ No 'title:' in frontmatter.");
    return;
  }

  const rawTitle = titleLine.split("title:")[1].trim();
  const cleanTitle = rawTitle;
  const newFilename = `${cleanTitle}.md`;
  const newPath = `${file.parent.path}/${newFilename}`;

  if (file.name !== newFilename) {
    try {
      await fm.renameFile(file, newPath);
    } catch (err) {
      new Notice(`❌ Rename failed: ${err.message}`);
      return;
    }
    file = vault.getAbstractFileByPath(newPath);
  }

  const freshContent = await vault.read(file);
  const year = moment(file.stat.ctime).format("YYYY");

  const updatedYaml = freshContent.replace(
    /^---\n([\s\S]*?)title:\s*.*?\n([\s\S]*?)---/,
    `---\n$1title: ${cleanTitle}\n$2---`
  );

  const updatedHeading = updatedYaml.replace(/^# .+$/m, `# ${cleanTitle}`);

  const metadataTable = [
    "|       Created       |    Last Modified    |        Exists Since         |",
    "| :-----------------: | :-----------------: | :-------------------------: |",
    "| `= this.file.ctime` | `= this.file.mtime` | `= date(now) - this.file.ctime` |"
  ].join("\n");

  const titleMatch = updatedHeading.match(/^# .+/m);
  const refMatch = updatedHeading.match(/^# References/m);

  let middleContent = "";
  let referenceSection = "";

  if (titleMatch && refMatch) {
    const start = updatedHeading.indexOf(titleMatch[0]) + titleMatch[0].length;
    const end = updatedHeading.indexOf(refMatch[0]);
    middleContent = updatedHeading.slice(start, end).trim();
    referenceSection = updatedHeading.slice(refMatch.index).trim();
  } else if (titleMatch) {
    const start = updatedHeading.indexOf(titleMatch[0]) + titleMatch[0].length;
    middleContent = updatedHeading.slice(start).trim();
    referenceSection = "# References";
  } else {
    middleContent = updatedHeading.trim();
    referenceSection = "# References";
  }
  
  const finalContent = [
    "---",
    `title: ${cleanTitle}`,
    `tags:\n  - zettel ${year}`,
    "---",
    "",
    metadataTable,
    "",
    `# ${cleanTitle}`,
    "",
    middleContent,
    "",
    referenceSection
  ].join("\n");

  await vault.modify(file, finalContent);
  new Notice(`✅ Zettel renamed and updated: ${cleanTitle}`);
};