import mongoose from "mongoose";

const videoSchema = new mongoose.Schema({
  title: String,
  description: String,
  createdAt: Date,
  hashtags: [{ type: String }],
  meta: {
    views: Number,
    rating: Number,
  },
});

/*
<< schema Example - data >>
 
const video = {
  title: "Heki",
  descripton: "lalalal",
  createdAt: 121212,
  hashtags: ["#hi", "#mongo"],
  meta: {
      views: 234,
      rating: 412,
  }
};

*/

const Video = mongoose.model("Video", videoSchema);
export default Video;
