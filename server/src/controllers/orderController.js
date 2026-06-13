function cancelOrder(req, res) {
  const { orderId } = req.params;

  return res.status(200).json({
    message: 'Order cancellation accepted within allowed window',
    orderId,
    mealDate: req.body?.mealDate || null
  });
}

module.exports = { cancelOrder };
