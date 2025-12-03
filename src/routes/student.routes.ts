import express from 'express';
import {
    getStudents,
    getStudentById,
    createStudent,
    updateStudent,
    deleteStudent,
} from '../controllers/student.controller';
import { protect, admin } from '../middlewares/auth.middleware';

const router = express.Router();

router.route('/').get(protect, admin, getStudents).post(protect, admin, createStudent);
router
    .route('/:id')
    .get(protect, getStudentById) // Students can view their own profile? Or admin only? Let's allow both for now, but maybe restrict later.
    .put(protect, admin, updateStudent)
    .delete(protect, admin, deleteStudent);

export default router;
