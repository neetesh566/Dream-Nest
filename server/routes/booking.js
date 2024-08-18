const router = require("express").Router();
const Booking = require("../models/Booking");

/* CREATE BOOKING */
router.post("/create", async (req, res) => {
  try {
    // Destructure the required fields from the request body
    const { customerId, hostId, listingId, startDate, endDate, totalPrice } = req.body;

    // Validate the required fields
    if (!customerId || !hostId || !listingId || !startDate || !endDate || !totalPrice) {
      return res.status(400).json({ message: "All fields are required." });
    }

    // Create a new booking instance
    const newBooking = new Booking({
      customerId,
      hostId,
      listingId,
      startDate: new Date(startDate), // Ensure dates are correctly formatted
      endDate: new Date(endDate),
      totalPrice,
    });

    // Save the booking to the database
    await newBooking.save();

    // Return the created booking
    res.status(200).json(newBooking);
  } catch (err) {
    console.log("Error creating booking:", err);
    res.status(500).json({ message: "Failed to create a new Booking!", error: err.message });
  }
});

module.exports = router;
