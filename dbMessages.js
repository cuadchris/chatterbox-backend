import mongoose from "mongoose";

const messagingSchema = mongoose.schema({
  message: String,
  name: String,
  timestamp: String,
  received: Boolean,
});

export default mongoose.model("messagingmessages", messagingSchema);
