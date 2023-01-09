import User from "./models/userModel.js";

const loginUser = async (req, res) => {
    const { email, lockerKey } = req.body;

    try {
        const user = await User.findOne({ "email": email });
        if (user?.lockerKey == lockerKey) {
            res.status(200).json({
                message: `You just called out ${user.email}`,
                data: user
            })
        } else {
            res.status(404).json({
                message: "Get off, you bloody theif",
            })
        }
    } catch (err) {
        console.log(err);
        return res.status(400).json({ message: err, data: null })
    }
}

export default loginUser;