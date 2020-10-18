const { User } = require('../../models/')

module.exports = {
  create: async (req, res) => {
    const user = await User.create(req.body)
    return res.json(user)
  },
  findOne: async (req, res) => {
    const user = await User.findOne({
      where: {
        id: req.params.id
      }
    })
    return res.json(user)
  }
}
