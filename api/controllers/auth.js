import {db} from "../db.js";
import bcrypt from "bcryptjs";
import {response} from "express";

export const register = (req, res) => {

    //CHECK existing user
    const query = "SELECT * FROM users WHERE email = ? OR username = ?"
    db.query(query, [req.body.email, req.body.username], (err, data) => {
        if (err) return res.json(err);
        if (data.length) return res.status(409).json("User already exists");

        //hash to password and create a user
        const salt = bcrypt.genSaltSync(10);
        const hash = bcrypt.hashSync(req.body.password, salt);

        const query = "INSERT INTO users(`username`, `email`, `password`) VALUES (?)";
        const values = [
            req.body.username,
            req.body.email,
            hash,
        ]
        db.query(query, [values], (err, data) => {
            if (err) return res.json(err);
            return res.status(200).json("User has been created.");
        });
    });
}

export const login = (req, res) => {
    //CHECK USER

    const query = "SELECT * FROM users WHERE username = ?"
    db.query(query, [req, body, username], (err, data) => {
        if (err) return res.json(err);
        if(data.length === 0) return response.status(404).json("User not found!")

        //CHECK Password
        const isPasswordCorrect = bcrypt.compareSync(req.body.password, data[0].password);
        if(!isPasswordCorrect) return err.response.status(404).json("Wrong username or password!");
    });
};

export const logout = (req, res) => {

}