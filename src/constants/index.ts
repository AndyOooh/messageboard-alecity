import { FiatCurrency } from '@yodlpay/yapp-sdk';
import { Address } from 'viem';

export * from './tag';

// Configure the payment details for posting
// - currency: The currency in which fees are charged (USD, EUR, etc.)
// - amount: The cost per post in the specified currencys
// - receiverEns: Used for payment config
// - receiverAddress: Used for payment verification
export const POST_FEE = {
  currency: FiatCurrency.USD,
  amount: 0.01,
  receiverEns: 'alecity.eth',
  receiverAddress: '0xDC3Cac69C81161ab8Fea6AB84fE90a7ECa43912A' as Address, // alecity.eth.
};
// The title of your message board that appears on the homepage
export const BOARD_TITLE = 'Alecity Posts';
export const BOARD_SUB_TITLE = 'Community Message Board';
// The theme accent color, as set in the radiixui theme
export const ACCENT_COLOR = 'gray';
