import {StatusCodes} from 'http-status-codes';
import User from '../models/UserModel.js'

export const register = async (req, res) => {
    const isFirstAccount = (await User.countDocuments()) === 0;
    req.body.role = isFirstAccount ? 'admin' : 'user';
    const user = await User.create(req.body)
    console.log(user);
    res.status(StatusCodes.CREATED).json({user})
}

export const login = async (req, res) => {
    res.send('login')
}