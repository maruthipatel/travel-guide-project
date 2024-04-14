exports.updateProfile = async (req, res) => {
  try {
    const { username } = req.body;
    const userId = req.userId;
    await User.findByIdAndUpdate(userId, { username });
    res.json({ message: "Profile updated successfully" });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

exports.changePassword = async (req, res) => {
  try {
    const { currentPassword, newPassword } = req.body;
    const userId = req.userId;
    const user = await User.findById(userId);
    const isMatch = await user.comparePassword(currentPassword);
    if (!isMatch) throw new Error("Incorrect current password");
    const salt = await bcrypt.genSalt(10);
    const hash = await bcrypt.hash(newPassword, salt);
    user.password = hash;
    await user.save();
    res.json({ message: "Password changed successfully" });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

exports.deleteAccount = async (req, res) => {
  try {
    const userId = req.userId;
    await User.findByIdAndDelete(userId);
    res.json({ message: "Account deleted successfully" });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};
