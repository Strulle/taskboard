export class OpenSubscriptionError extends Error {
  constructor(propertyName: string) {
    super(
      `Detected open subscription for Observable property "${propertyName}".`
    );
  }
}
