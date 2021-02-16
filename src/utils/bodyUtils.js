export function formatValue(value) {
  const bullet = '\u2022'
  const lines = value.split('\n').concat('')

  const bullets = lines.map(line => {
    if (line[0] !== bullet) return `${bullet} ${line}`
    else return line
  })

  return bullets.join('\n')
}
