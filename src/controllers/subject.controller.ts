import { Request, Response } from 'express';
import Subject from '../models/Subject';

export const getSubjects = async (req: Request, res: Response) => {
    try {
        const subjects = await Subject.find({});
        res.json(subjects);
    } catch (error) {
        res.status(500).json({ message: 'Server error' });
    }
};

export const createSubject = async (req: Request, res: Response) => {
    const { name, code, faculty, credits, semester, course } = req.body;

    try {
        const subject = await Subject.create({
            name,
            code,
            faculty,
            credits,
            semester,
            course,
        });
        res.status(201).json(subject);
    } catch (error) {
        res.status(500).json({ message: 'Server error' });
    }
};
