import { Router } from 'express';

// Controllers
import * as vc from '../controllers/videos.controller';

const router = Router();

// GET
router.get('/videos', vc.getVideos);
router.get('/video/:id', vc.getVideo);

// POST
router.post('/videos', vc.createVideo);

// PUT
router.put('/video/:id', vc.updateVideo);

// DELETE
router.delete('/video/:id', vc.deleteVideo);

export default router;
