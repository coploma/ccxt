import { implicitReturnType } from '../base/types.js';
import { Exchange as _Exchange } from '../base/Exchange.js';
interface Exchange {
    publicGetTickers(params?: {}): Promise<implicitReturnType>;
    publicGetOrderBook(params?: {}): Promise<implicitReturnType>;
    publicGetTrades(params?: {}): Promise<implicitReturnType>;
    publicGetCandles(params?: {}): Promise<implicitReturnType>;
    publicGetCurrencyPairs(params?: {}): Promise<implicitReturnType>;
    publicGetCurrencies(params?: {}): Promise<implicitReturnType>;
    publicGetTime(params?: {}): Promise<implicitReturnType>;
    privateGetOrders(params?: {}): Promise<implicitReturnType>;
    privateGetOpenOrders(params?: {}): Promise<implicitReturnType>;
    privateGetAllOrders(params?: {}): Promise<implicitReturnType>;
    privateGetMyTrades(params?: {}): Promise<implicitReturnType>;
    privateGetBalance(params?: {}): Promise<implicitReturnType>;
    privateGetCoinDepositAddresses(params?: {}): Promise<implicitReturnType>;
    privateGetCoinDepositAddress(params?: {}): Promise<implicitReturnType>;
    privateGetCoinDeposit(params?: {}): Promise<implicitReturnType>;
    privateGetCoinWithdrawableAddresses(params?: {}): Promise<implicitReturnType>;
    privateGetCoinRecentWithdrawals(params?: {}): Promise<implicitReturnType>;
    privateGetCoinWithdrawal(params?: {}): Promise<implicitReturnType>;
    privateGetKrwRecentDeposits(params?: {}): Promise<implicitReturnType>;
    privateGetKrwRecentWithdrawals(params?: {}): Promise<implicitReturnType>;
    privateGetTradingFeePolicy(params?: {}): Promise<implicitReturnType>;
    privateGetCurrentKeyInfo(params?: {}): Promise<implicitReturnType>;
    privatePostOrders(params?: {}): Promise<implicitReturnType>;
    privatePostCoinDepositAddress(params?: {}): Promise<implicitReturnType>;
    privatePostCoinWithdrawal(params?: {}): Promise<implicitReturnType>;
    privatePostKrwSendKrwDepositPush(params?: {}): Promise<implicitReturnType>;
    privatePostKrwSendKrwWithdrawalPush(params?: {}): Promise<implicitReturnType>;
    privateDeleteOrders(params?: {}): Promise<implicitReturnType>;
    privateDeleteCoinWithdrawal(params?: {}): Promise<implicitReturnType>;
}
declare abstract class Exchange extends _Exchange {
}
export default Exchange;
