import { Request, Response } from 'express';

export class AuthController {
    constructor() {}

    public registerUser = (req: Request, res: Response) => {
        res.status(200).json({ message: 'User registered' });
    }


    public loginUser = (req: Request, res: Response) => {
        res.status(200).json({ message: 'User logged in' });
    }

}