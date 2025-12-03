import express from 'express';
import { getAnnouncements, createAnnouncement } from '../controllers/announcement.controller';
import { protect, admin } from '../middlewares/auth.middleware';

const router = express.Router();

router.route('/').get(protect, getAnnouncements).post(protect, admin, createAnnouncement);

export default router;
