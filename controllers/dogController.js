const Dog = require("../models/Dog");

// Get all dogs
exports.getAllDogs = async (req, res) => {
  try {
    const dogs = await Dog.findAll();
    res.json(dogs);
  } catch (err) {
    console.error(err);
    res
      .status(500)
      .json({ error: "An error occurred while retrieving all dogs" });
  }
};

// Get a specific dog by ID
exports.getDogById = async (req, res) => {
  const id = req.params.id;
  try {
    const dog = await Dog.findByPk(id);
    if (dog) {
      res.json(dog);
    } else {
      res.status(404).json({ error: `Dog with ID ${id} not found` });
    }
  } catch (err) {
    console.error(err);
    res
      .status(500)
      .json({ error: "An error occurred while retrieving the dog" });
  }
};

// Add a new dog
exports.addDog = async (req, res) => {
  const { name, breed, age, imageUrl } = req.body;
  try {
    const dog = await Dog.create({ name, breed, age, imageUrl });
    res.status(201).json(dog);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "An error occurred while adding a new dog" });
  }
};

// Update a dog
exports.updateDog = async (req, res) => {
  const id = req.params.id;
  const { name, breed, age, imageUrl } = req.body;
  try {
    const dog = await Dog.findByPk(id);
    if (dog) {
      await dog.update({ name, breed, age, imageUrl });
      res.json(dog);
    } else {
      res.status(404).json({ error: `Dog with ID ${id} not found` });
    }
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "An error occurred while updating the dog" });
  }
};

// Delete a dog
exports.deleteDog = async (req, res) => {
  const id = req.params.id;
  try {
    const dog = await Dog.findByPk(id);
    if (dog) {
      await dog.destroy();
      res.status(204).json();
    } else {
      res.status(404).json({ error: `Dog with ID ${id} not found` });
    }
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "An error occurred while deleting the dog" });
  }
};
