const userSchema = require("../Models/user")


exports.createuser = async (req, res) => {
    const {username,email,phone} = req.body
    try {
        const user = new userSchema({username:"mon",email,phone});
        await user.save();
        res.status(200).json(user);
    } catch (error) {
        res.status(500).json({ massage: error.message });
    }

};

exports.getuser = async (req, res) => {
    try {
        const users = await userSchema.find();
        res.status(200).json(users);
    } catch (error) {
        res.status(500).json({ massage: error.message });
    }
};

exports.getoneuser = async (req, res) => {
    try {
        const id = req.params.id;
        const users = await userSchema.findById(id);
        res.status(200).json(users);
    } catch (error) {
        res.status(500).json({ massage: error.message });

    }
};

exports.update = async (req, res) => {
    try {
        const id = req.params.id;
        const update = await userSchema.findByIdAndUpdate(id, req.body)
        res.status(200).json("Updated")
    } catch (error) {
        res.status(500).json({ massage: error.message });
    }
};

exports.delete = async (req, res) => {
    try {
        const id = req.params.id;
        const remove = await userSchema.findByIdAndDelete(id)
        res.status(200).json("deleted");
    } catch (error) {
        res.status(500).json({ massage: error.message });
    }
}