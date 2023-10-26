import express from 'express';
import JWTVERIFY from '../../middleware/jwtAuth';
import sendChatController from '../../controllers/websController/sendChatController';
import uploadGridFS, { upload } from '../../middleware/uploadGridFS';

const router = express.Router();

router.post('/sendChat', upload.array('files'), sendChatController.sendChat);
router.get('/getRoom', sendChatController.getRoom);
router.get('/getChat', sendChatController.getChat);
router.delete('/delete', sendChatController.delete);
router.post('/delChatAll', uploadGridFS.delete, sendChatController.delChatAll);
router.post('/delChatSelf', sendChatController.delChatSelf);
router.post('/undo', sendChatController.undo);

export default router;
