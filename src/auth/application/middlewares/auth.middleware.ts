import jwt from 'jsonwebtoken';
import { Request, Response, NextFunction } from 'express';
import { secret } from '../../domain/constants/jwt.secret';

export function verifyToken(req: Request, res: Response, next: NextFunction): void {
    const token = req.headers.authorization;
    if (!token) {
        res.status(401).json({ msg: 'Token not provided' });
        return;
    }

    try {
        const decoded = jwt.verify(token, secret) as { email: string };
        (req as any).user = decoded;
        console.log((req as any).user.email);
        next();
    } catch (error) {
        console.error('Error at verify token:', error);
        res.status(403).json({ msg: 'Invalid token' });
    }
}