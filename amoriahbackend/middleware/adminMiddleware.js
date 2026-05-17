//
// ✅ Admin Middleware
//
const admin = (req, res, next) => {
  if (!req.user) {
    res.status(401);
    throw new Error("Not authenticated");
  }

  if (!req.user.isAdmin) {
    res.status(403);
    throw new Error("Access denied. Admin only.");
  }

  next();
};

module.exports = admin;