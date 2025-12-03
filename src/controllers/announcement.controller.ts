import { Request, Response } from 'express';
import Announcement from '../models/Announcement';

export const getAnnouncements = async (req: Request, res: Response) => {
    try {
        const announcements = await Announcement.find({}).sort({ date: -1 });
        res.json(announcements);
    } catch (error) {
        res.status(500).json({ message: 'Server error' });
    }
};

export const createAnnouncement = async (req: Request, res: Response) => {
    const { title, content, type } = req.body;

    try {
        const announcement = await Announcement.create({
            title,
            content,
            type,
        });
        res.status(201).json(announcement);
    } catch (error) {
        res.status(500).json({ message: 'Server error' });
    }
};
