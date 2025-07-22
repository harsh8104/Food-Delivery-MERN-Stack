import jwt from "jsonwebtoken";

const adminAuth = async (req, res, next) => {
  try {
    const { token } = req.headers;

    if (!token) {
      return res.json({
        success: false,
        message: "Not Authorized. Login Again",
      });
    }

    const token_decode = jwt.verify(token, process.env.JWT_SECRET);

    // Check if the token is for admin
    if (token_decode.role !== "admin") {
      return res.json({
        success: false,
        message: "Admin access required",
      });
    }

    req.adminId = token_decode.username;
    next();
  } catch (error) {
    console.log(error);
    res.json({
      success: false,
      message: "Error in admin authentication",
    });
  }
};

export default adminAuth;
