const TaskModel = require("../helper/TaskModel")
exports.AllTasks = (req, res, next) => {
    try {
        const list = await TaskModel.find();
        return response.status(200).json({
          message: true,
          data: list,
        });
      } catch (error) {
        return response.status(400).json({ message: error, data: null });``
      }
}
exports.IsDoneTasks = (req, res, next) => {
    try {

    }
    catch (error) {
        console.log(error)
        return res.status(400).json({})
    }
}

exports.CreateTask = (req, res, next) => {
    const [id] = req.params; 
    try {
        const users = await TaskModel.findByIdAndUpdate(id, {...req.body});
        res.status(201).json({
            message: `done`,
            data: users
        })
    } catch (error) {
        return res.status(401).json({
            message: error
        })
    }
}
exports.DeleteTask = (req, res, next) => {
    try {

    }
    catch (error) {
        console.log(error)
        return res.status(400).json({})
    }
}

exports.CheckTask = (req, res, next) => {
    try {

    }
    catch (error) {
        console.log(error)
        return res.status(400).json({})
    }
}


exports.EditTask = (req, res, next) => {
    try {

    }
    catch (error) {
        console.log(error)
        return res.status(400).json({})
    }
}
