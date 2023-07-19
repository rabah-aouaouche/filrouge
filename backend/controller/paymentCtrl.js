const Razorpay = require("razorpay");

const instance = new Razorpay({
  key_id: "rzp_test_WmhSJEC7XcdV87",
  key_secret: "r6GLolq49MHr8jfSRdex9tED",
});

const checkout = async (req, res) => {
  const { amount } = req.body;
  const option = {
    amount: amount * 100,
    currency: "DZD",
  };
  const order = await instance.orders.create(option);
  res.json({ success: true, order });
};

const paymentVerification = async (req, res) => {
  const { razorpayOrderId, razorpayPaymentId } = req.body;
  res.json({
    razorpayOrderId,
    razorpayPaymentId,
  });
};

module.exports = {
  checkout,
  paymentVerification,
};
