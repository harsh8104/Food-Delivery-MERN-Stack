import jwt from "jsonwebtoken";

const ADMIN_USERNAME = "admin";
const ADMIN_PASSWORD = "admin123";

const adminLogin = async (req, res) => {
  try {
    const { username, password } = req.body;

    if (username === ADMIN_USERNAME && password === ADMIN_PASSWORD) {
      const token = jwt.sign(
        { username: ADMIN_USERNAME, role: "admin" },
        process.env.JWT_SECRET,
        { expiresIn: "24h" }
      );

      res.json({
        success: true,
        message: "Admin login successful",
        token: token,
      });
    } else {
      res.json({
        success: false,
        message: "Invalid credentials",
      });
    }
  } catch (error) {
    console.log(error);
    res.json({
      success: false,
      message: "Login failed",
    });
  }
};

const verifyAdmin = async (req, res) => {
  try {
    const token = req.headers.token;

    if (!token) {
      return res.json({
        success: false,
        message: "No token provided",
      });
    }

    const decoded = jwt.verify(token, process.env.JWT_SECRET);

    if (decoded.role === "admin") {
      res.json({
        success: true,
        message: "Valid admin token",
        admin: decoded,
      });
    } else {
      res.json({
        success: false,
        message: "Invalid admin token",
      });
    }
  } catch (error) {
    res.json({
      success: false,
      message: "Token verification failed",
    });
  }
};

export { adminLogin, verifyAdmin };
