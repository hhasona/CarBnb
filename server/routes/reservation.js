const reservationRouter = require("express").Router();
const {
  getAllReservations,
  getReservationsByOwnerId,
  getReservationsByCustomerId,
  getReservationById,
  createReservation,
  updateReservation,
  deleteReservation,
  deleteAllReservations,
} = require("../controllers/reservation");

reservationRouter.get("/", getAllReservations);
reservationRouter.get("/owner/:id", getReservationsByOwnerId);
reservationRouter.get("/customer/:id", getReservationsByCustomerId);
reservationRouter.get("/:id", getReservationById);
reservationRouter.post("/", createReservation);
reservationRouter.put("/:id", updateReservation);
reservationRouter.delete("/:id", deleteReservation);
reservationRouter.delete("/deleteAll", deleteAllReservations);

module.exports = reservationRouter;