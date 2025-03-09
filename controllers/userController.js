const User = require('../models/userModel')

exports.getUsers = async (req, res) => {
    try {
        const users = await User.getAllUsers();
        res.json(users);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
}
exports.getUserById = async (req, res) => {
    try {
      const user = await User.getUserById(req.params.id);
      if (!user) return res.status(404).json({ message: "User not found" });
      res.json(user);
    } catch (err) {
      res.status(500).json({ message: err.message });
    }
};
  
exports.createUser = async (req, res) => {
    try {
      const { name, email, password } = req.body;
      const userId = await User.createUser(name, email);
      res.status(201).json({ id: userId, name, email, password });
    } catch (err) {
      res.status(500).json({ message: err.message });
    }
};
  
exports.updateUser = async (req, res) => {
    try {
      const { name, email, password } = req.body;
      await User.updateUser(req.params.id, name, email, password);
      res.json({ message: "User updated successfully" });
    } catch (err) {
      res.status(500).json({ message: err.message });
    }
};
  
exports.deleteUser = async (req, res) => {
    try {
      await User.deleteUser(req.params.id);
      res.json({ message: "User deleted successfully" });
    } catch (err) {
      res.status(500).json({ message: err.message });
    }
};