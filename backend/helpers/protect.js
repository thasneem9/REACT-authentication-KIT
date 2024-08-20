import jwt from "jsonwebtoken";

const protect = (req, res, next) => {
    const token = req.cookies.jwt; // Retrieve token from cookies

    if (!token) {
        return res.status(401).json({ message: "Not authorized, no token" });
    }

    try {
        // Verify token
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        req.user = decoded.userId; // Attach the user ID to the request object
        next(); // Proceed to the next middleware or route handler
    } catch (error) {
        return res.status(401).json({ message: "Not authorized, token failed" });
    }
};

export default protect;
