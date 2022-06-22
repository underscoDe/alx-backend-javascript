/* eslint no-underscore-dangle: ["error", {"allow": ["_name", "_code", "_amount", "_currency"] }] */
/* eslint-disable-next-line */
import Currency from './3-currency';

export default class Pricing {
  constructor(amount, currency) {
    this._amount = amount;
    this._currency = currency;
  }

  get amount() {
    return this._amount;
  }

  set amount(cash) {
    this._amount = cash;
  }

  get currency() {
    return this._currency;
  }

  set currency(cur) {
    this._currency = cur;
  }

  displayFullPrice() {
    return `${this.amount} ${this.currency.displayFullCurrency()}`;
  }

  static convertPrice(amount, conversionRate) {
    return amount * conversionRate;
  }
}
