module.exports = async (tp) => {
  const file = app.workspace.getActiveFile();
  if (!file) {
    new Notice("❌ No active file.");
    return;
  }

  const folderName = file.parent.name;
  const folderLink = `[[${folderName}]]`;

  const content = await app.vault.read(file);
  const lines = content.split("\n");

  // Find the first exact line that is "# References"
  const refIndex = lines.findIndex(line => line.trim() === "# References");
  if (refIndex === -1) {
    new Notice("⚠️ No '# References' heading found.");
    return;
  }

  // Collect numbered list lines directly following # References
  let i = refIndex + 1;
  const listLines = [];

  while (i < lines.length && /^\d+\.\s/.test(lines[i])) {
    listLines.push(lines[i]);
    i++;
  }

  const alreadyExists = listLines.some(line => line.includes(folderLink));
  if (!alreadyExists) {
    listLines.push(`${listLines.length + 1}. ${folderLink}`);
  }

  const updatedList = listLines.map((line, index) => `${index + 1}. ${line.replace(/^\d+\.\s*/, "").trim()}`);

  // Replace only the reference list section
  lines.splice(refIndex + 1, listLines.length, ...updatedList);

  await app.vault.modify(file, lines.join("\n"));
  new Notice(`✅ [[${folderName}]] added under '# References'`);
};
