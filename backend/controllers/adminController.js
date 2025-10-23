import bcrypt from "bcrypt";
import User from "../models/Admin.js";

// admin login
export const adminLogin = async (req, res) => {
  /* try {
    const hashedPassword = await bcrypt.hash("adminpassword", 10);
    const adminUser = new User({
      username: "admin",
      password: hashedPassword,
      userEmail: "admin@finmavi.com",
      role: "admin",
    });

    await adminUser.save();
    res.status(201).json({ message: "Admin created successfully" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
}*/

  const { username, password } = req.body;

  try {
    const admin = await User.findOne({ userName: username });
    if (!admin) return res.status(401).json({ message: "Invalid username" });

    const isPasswordValid = await bcrypt.compare(password, admin.password);
    if (!isPasswordValid)
      return res.status(401).json({ message: "Invalid password" });
    res.status(200).json({ message: "Login successful" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
