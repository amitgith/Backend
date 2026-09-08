import app from "./src/app/app.js";
import { connectToDB } from "./src/config/db.js";
const port = 3000;
await connectToDB();
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
