export class OpenSubscriptionError extends Error {
  constructor(index: number) {
    super(`Observable at position ${index} as subscribed observers.`);
  }
}
