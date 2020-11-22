export function getBody (config: any) {
  return config.body && JSON.parse(config.body)
}
