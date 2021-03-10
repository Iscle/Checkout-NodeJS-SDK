'use strict';

const querystring = require('querystring'); // eslint-disable-line no-unused-vars
/**
 Activate a subscription.
 **/

class SubscriptionsActivateRequest {

  constructor(subscriptionId) {
    this.path = '/v1/billing/subscriptions/{subscription_id}/activate?';
    this.path = this.path.replace('{subscription_id}', querystring.escape(subscriptionId));
    this.verb = 'POST';
    this.body = null;
    this.headers = {
      'Content-Type': 'application/json'
    };
  }

  requestBody(activateRequest) {
    this.body = activateRequest;
    return this;
  }
}

module.exports = {SubscriptionsActivateRequest: SubscriptionsActivateRequest};
