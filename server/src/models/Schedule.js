import mongoose from "mongoose";

const scheduleSchema = new mongoose.Schema({
  category: { type: String, required: true },
  date: { type: String, required: true },
  month: { type: String, required: true },
  content: { type: String, required: true },
  importance: { type: String, required: true },
  time: { type: String, required: true },
  place: { type: String, required: true },
  who: { type: String, required: true },
});

const Schedule = mongoose.model("Schedule", scheduleSchema);

export default Schedule;
