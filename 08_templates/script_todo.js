module.exports = async (tp) => {
  try {
    const file = tp.file?.path;

    if (!file) {
      new Notice("❌ Must run from a saved, open note.");
      return;
    }

    const vault = app.vault;
    const inputFile = vault.getAbstractFileByPath(file);
    const content = await vault.read(inputFile);

    const match = content.match(/## TODOs assigned([\s\S]*?)(?=\n## |\n# |\n$)/);

    if (!match || !match[1].trim()) {
      new Notice("⚠️ Couldn't find TODOs block.");
      return;
    }

    const outputPath = "00_todo/daily_todo/todos_today.txt";
    await vault.adapter.write(outputPath, match[0].trim());
    new Notice("✅ Exported TODOs to: " + outputPath);
  } catch (err) {
    console.error("Templater Script Error:", err);
    new Notice("❌ Script failed. See console for details.");
  }
};
