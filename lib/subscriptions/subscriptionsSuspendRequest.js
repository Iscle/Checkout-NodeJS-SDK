'use strict';

const querystring = require('querystring'); // eslint-disable-line no-unused-vars
/**
 Suspends a subscription.
 **/

class SubscriptionsSuspendRequest {

  constructor(subscriptionId) {
    this.path = '/v1/billing/subscriptions/{subscription_id}/suspend?';
    this.path = this.path.replace('{subscription_id}', querystring.escape(subscriptionId));
    this.verb = 'POST';
    this.body = null;
    this.headers = {
      'Content-Type': 'application/json'
    };
  }

  requestBody(suspendRequest) {
    this.body = suspendRequest;
    return this;
  }
}

module.exports = {SubscriptionsSuspendRequest: SubscriptionsSuspendRequest};
