import mongoose from "mongoose";

const scheduleSchema = new mongoose.Schema({
  category: { type: String, required: true },
  date: { type: String, required: true },
  content: { type: String, required: true },
  importance: { type: String, required: true },
  time: { type: String },
  place: { type: String },
  who: { type: String },
});

const Schedule = mongoose.model("Schedule", scheduleSchema);

export default Schedule;
