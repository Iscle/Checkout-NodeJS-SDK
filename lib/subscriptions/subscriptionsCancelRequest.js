'use strict';

const querystring = require('querystring'); // eslint-disable-line no-unused-vars
/**
 Cancels a subscription
 **/

class SubscriptionsCancelRequest {

  constructor(subscriptionId) {
    this.path = '/v1/billing/subscriptions/{subscription_id}/cancel?';
    this.path = this.path.replace('{subscription_id}', querystring.escape(subscriptionId));
    this.verb = 'POST';
    this.body = null;
    this.headers = {
      'Content-Type': 'application/json'
    };
  }

  requestBody(cancelRequest) {
    this.body = cancelRequest;
    return this;
  }
}

module.exports = {SubscriptionsCancelRequest: SubscriptionsCancelRequest};
