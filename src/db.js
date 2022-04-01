import mongoose from "mongoose";

/// mongoose는 wetube라는 mongodb database를 연결해 줄 것
mongoose.connect(process.env.DB_URL, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const db = mongoose.connection;

/// on은 이벤트 생길때 마다 발생 , once는 한번만 발생
const handleOpen = () => console.log("Connected to DB ✅");
const handleError = (error) => console.log("DB Error ❌", error);
db.on("error", handleError);
db.once("open", handleOpen);
