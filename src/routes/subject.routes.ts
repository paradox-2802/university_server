import express from 'express';
import { getSubjects, createSubject } from '../controllers/subject.controller';
import { protect, admin } from '../middlewares/auth.middleware';

const router = express.Router();

router.route('/').get(protect, getSubjects).post(protect, admin, createSubject);

export default router;
