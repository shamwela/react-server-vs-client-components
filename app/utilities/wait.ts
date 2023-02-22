export const wait = (seconds: number) => {
  const milliSeconds = seconds * 1000
  return new Promise((resolve) => setTimeout(resolve, milliSeconds))
}
