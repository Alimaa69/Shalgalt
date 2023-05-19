const { model, Schema } = require("mongoose");

const TaskSchema = new Schema({
    isDone: Boolean,
    text: String,
    createdDate: Date,
})

const TaskModel = model("Text", TaskSchema);

module.exports = TaskModel;