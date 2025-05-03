
const Scheme = require("../models/scheme-model");

const addScheme = async (req, res) => {
    try {
      const newScheme = new Scheme(req.body);
      await newScheme.save();
      res.status(201).json({ message: "Scheme created successfully!" });
    } catch (error) {
      console.error("Error creating scheme:", error);
      res.status(500).json({ message: "Server Error", error });
    }
  };
  
  const getAllSchemes = async (req, res) => {
    try {
      const schemes = await Scheme.find();
      res.status(200).json({ schemes });
    } catch (error) {
      console.error("Error fetching schemes:", error);
      res
        .status(500)
        .json({ message: "Failed to fetch schemes", error: error.message });
    }
  };
  
  const deleteScheme = async (req, res) => {
    try {
      const { id } = req.params;
      await Scheme.findByIdAndDelete(id);
      res.status(200).json({ message: "Scheme deleted successfully" });
    } catch (error) {
      console.error("Error deleting scheme:", error);
      res.status(500).json({ message: "Server Error", error });
    }
  };
  
  const getSingleScheme = async (req, res) => {
    try {
      const { id } = req.params;
      const scheme = await Scheme.findById(id);
  
      if (!scheme) {
        return res.status(404).json({ message: "Scheme not found" });
      }
  
      res.status(200).json({ scheme });
    } catch (error) {
      console.error("Error fetching scheme:", error);
      res.status(500).json({ message: "Server Error", error });
    }
  };
  
  const updateScheme = async (req, res) => {
    try {
      const { id } = req.params;
      const updatedScheme = await Scheme.findByIdAndUpdate(id, req.body, {
        new: true,
        runValidators: true,
      });
  
      if (!updatedScheme) {
        return res.status(404).json({ message: "Scheme not found" });
      }
  
      res.status(200).json({ message: "Scheme updated successfully" });
    } catch (error) {
      console.error("Error updating scheme:", error);
      res.status(500).json({ message: "Server Error", error });
    }
  };

  module.exports = {
    addScheme,
    getAllSchemes,
    deleteScheme,
    updateScheme,
    getSingleScheme,
  };