'use strict';

const querystring = require('querystring'); // eslint-disable-line no-unused-vars
/**
 Capture authorized payment on subscription.
 **/

class SubscriptionsCaptureRequest {

  constructor(subscriptionId) {
    this.path = '/v1/billing/subscriptions/{subscription_id}/capture?';
    this.path = this.path.replace('{subscription_id}', querystring.escape(subscriptionId));
    this.verb = 'POST';
    this.body = null;
    this.headers = {
      'Content-Type': 'application/json'
    };
  }

  requestBody(captureRequest) {
    this.body = captureRequest;
    return this;
  }
}

module.exports = {SubscriptionsCaptureRequest: SubscriptionsCaptureRequest};
