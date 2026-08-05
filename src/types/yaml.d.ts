declare module '*.yaml' {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const data: Record<string, any>;
  export default data;
}

declare module '*.yml' {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const data: Record<string, any>;
  export default data;
}
