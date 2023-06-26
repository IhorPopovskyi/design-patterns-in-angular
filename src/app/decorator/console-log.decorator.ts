export function ConsoleLog(target: any, propertyKey: string, descriptor: PropertyDescriptor) {
  const originalMethod = descriptor.value;

  descriptor.value = function(...args: any[]) {
    const result = originalMethod.apply(this, args);

    console.log(`Method '${propertyKey}' called with arguments:`, args);
    console.log(`Result:`, result);

    return result;
  };

  return descriptor;
}
