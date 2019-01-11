class ExampleController {
  constructor (Model) {
    this.Model = Model;
  }

  async create(req, res) {
    try {
      const { email, password } = req.body;
  
      const user = await this.Model.createUser(email, password)
      return res.status(200).send({
        success: true,
        data: { user}
      });
    }
    catch (error) {
      return res.status(500).send({
        success: false,
        error: error.message
      })
    }
  }

  

}

export default ExampleController;