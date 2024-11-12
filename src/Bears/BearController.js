
const Bear = require("./BearModel");

const helloBear = (req, res) => {
  res.send("Helloww Bear");
};

const createBear = async (req, res) => {
  const { species, latinName } = req.body;
  try {
    const createdBear = await Bear.create({ species, latinName });
    res.status(201).json({ createdBear });
  } catch (error) {
    console.log(error);
    res.status(400).json({
      error: "There was an error while saving the Bear to the Database",
    });
  }
};

const getAllBears = async (req, res) => {
    try {
        const allBears = await Bear.find({})
        res.status(200).json(allBears)
    }catch (error) {
        console.log(error);
        res.status(400).json({
          error: "There was an error while saving the Bear to the Database",
        });
      }
}

const getBearById = (req, res) => {
    const { id } = req.params;
    Bear.findById(id)
      .then((bear) => {
        res.status(200).json(bear);
      })
      .catch((error) => {
        res.status(400).json({ error: "Whatever" });
      });
  };

  const deleteBearById = async (req, res) => {
    const { id } = req.params;
    try {
      await Bear.findByIdAndDelete(id);
      res.status(204).json({ success: true });
    } catch (error) {
      res.status(400).json({ error: "Could Not delete bhalu" });
    }
  };
  const updateBearById = async (req, res) => {
    const { id } = req.params;
    const { species, latinName } = req.body;
    try {
      const bear = await Bear.findByIdAndUpdate(
        id,
        { species, latinName },
        { new: true }
      );
      res.status(202).json(bear);
    } catch (error) {
      res.status(400).json({ error: "Could Not update bhalu" });
    }
  };
module.exports = { helloBear, createBear, getAllBears, getBearById, deleteBearById, updateBearById };
