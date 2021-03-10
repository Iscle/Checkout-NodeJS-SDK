'use strict';

const querystring = require('querystring'); // eslint-disable-line no-unused-vars
/**
 Revises a subscription.
 **/

class SubscriptionsReviseRequest {

  constructor(subscriptionId) {
    this.path = '/v1/billing/subscriptions/{subscription_id}/revise?';
    this.path = this.path.replace('{subscription_id}', querystring.escape(subscriptionId));
    this.verb = 'POST';
    this.body = null;
    this.headers = {
      'Content-Type': 'application/json'
    };
  }

  prefer(prefer) {
    this.headers['Prefer'] = prefer;
    return this;
  }

  requestBody(reviseRequest) {
    this.body = reviseRequest;
    return this;
  }
}

module.exports = {SubscriptionsReviseRequest: SubscriptionsReviseRequest};
