// diaryEntryController.js

exports.readEntry = async (req, res) => {
  try {
    const diaryEntryId = req.params.id;
    const diaryEntry = await DiaryEntry.findById(diaryEntryId);
    if (!diaryEntry) throw new Error("Diary entry not found");
    res.json(diaryEntry);
  } catch (error) {
    res.status(404).json({ error: error.message });
  }
};

exports.updateEntry = async (req, res) => {
  try {
    const diaryEntryId = req.params.id;
    const { title, description, location } = req.body;
    const updatedEntry = await DiaryEntry.findByIdAndUpdate(
      diaryEntryId,
      { title, description, location },
      { new: true }
    );
    res.json(updatedEntry);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

exports.deleteEntry = async (req, res) => {
  try {
    const diaryEntryId = req.params.id;
    await DiaryEntry.findByIdAndDelete(diaryEntryId);
    res.json({ message: "Diary entry deleted successfully" });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};
