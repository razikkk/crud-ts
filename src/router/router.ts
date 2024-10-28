import express from "express"
import controller from "../controller/controller"

const router = express.Router()



router.get('/', controller.loadDashboard)
router.post('/addUser',controller.addUser)
router.delete('/deleteUser/:userId', controller.deleteUser)
router.patch('/editUser/:userId',controller.editUser)

export default router