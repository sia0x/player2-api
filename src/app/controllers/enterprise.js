class Enterprise {
  async index(req, res) {
    res.json({ message: "Player2 Api!" });
  }
}

export default new Enterprise();
