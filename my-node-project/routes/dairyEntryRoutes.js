const DiaryEntry = require("../models/DiaryEntry");

// Controller method for creating a new diary entry
exports.createEntry = async (req, res) => {
  try {
    const { title, description, location } = req.body;
    const diaryEntry = new DiaryEntry({ title, description, location });
    await diaryEntry.save();
    res
      .status(201)
      .json({ message: "Diary entry created successfully", diaryEntry });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// Controller method for reading a specific diary entry
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

// Controller method for updating a specific diary entry
exports.updateEntry = async (req, res) => {
  try {
    const diaryEntryId = req.params.id;
    const { title, description, location } = req.body;
    const updatedEntry = await DiaryEntry.findByIdAndUpdate(
      diaryEntryId,
      { title, description, location },
      { new: true }
    );
    if (!updatedEntry) throw new Error("Diary entry not found");
    res.json(updatedEntry);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// Controller method for deleting a specific diary entry
exports.deleteEntry = async (req, res) => {
  try {
    const diaryEntryId = req.params.id;
    const deletedEntry = await DiaryEntry.findByIdAndDelete(diaryEntryId);
    if (!deletedEntry) throw new Error("Diary entry not found");
    res.json({ message: "Diary entry deleted successfully" });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};
