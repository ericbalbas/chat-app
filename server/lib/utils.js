import jwt from 'jsonwebtoken';

export const generateToken  = (userId, res) => {

    const token = jwt.sign({ userId }, process.env.JWT_SECRET, {
        expiresIn : "7d"
    });

    res.cookie("jwt", token, {
      maxAge: 7 * 24 * 60 * 60 * 100, // millisecond,
      httpOnly: true, //protection in XSS attacks
      sameSite: true,
      secure: process.env.NODE_ENV !== "development",
    });

    return token;
}   