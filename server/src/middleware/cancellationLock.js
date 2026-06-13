function getCancellationCutoff(mealDateInput) {
  const mealDate = new Date(mealDateInput);

  if (Number.isNaN(mealDate.getTime())) {
    throw new Error('Invalid mealDate provided');
  }

  const cutoff = new Date(mealDate);
  cutoff.setDate(cutoff.getDate() - 1);
  cutoff.setHours(18, 0, 0, 0);
  return cutoff;
}

function isCancellationLocked(mealDateInput, now = new Date()) {
  const cutoff = getCancellationCutoff(mealDateInput);
  return now > cutoff;
}

function enforceOneDayCancellationRule(req, res, next) {
  const mealDate = req.body?.mealDate || req.order?.mealDate;

  if (!mealDate) {
    return res.status(400).json({ message: 'mealDate is required for cancellation checks' });
  }

  try {
    if (isCancellationLocked(mealDate, new Date())) {
      return res.status(423).json({
        message: 'Cancellation window is locked after 18:00 on the previous day'
      });
    }

    return next();
  } catch (error) {
    return res.status(400).json({ message: error.message });
  }
}

module.exports = {
  enforceOneDayCancellationRule,
  getCancellationCutoff,
  isCancellationLocked
};
