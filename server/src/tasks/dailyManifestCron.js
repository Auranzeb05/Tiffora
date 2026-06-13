function runDailySubscriptionFreezeAndManifestJob() {
  // TODO: freeze active subscriptions scheduled for the next production day
  // TODO: compile Master Kitchen Cooking Manifest from frozen subscriptions
  // TODO: publish driver dispatch payload after manifest creation
  return {
    status: 'scheduled',
    nextRun: '0 0 * * *',
    task: 'freeze-subscriptions-and-compile-kitchen-manifest'
  };
}

module.exports = { runDailySubscriptionFreezeAndManifestJob };
