export function formatDate(start, end) {
  const startArr = start.split('-')

  if (end !== 'present') {
    const endArr = end.split('-')
    return `${startArr[1]}/${startArr[0]} - ${endArr[1]}/ ${endArr[0]}`
  } else return `${startArr[1]}/${startArr[0]} - Present`
}

export function formatWork(title, company) {
  return `${title} - ${company}  `
}

export function isEmpty(object) {
  const values = Object.values(object)
  let empty = true
  values.forEach(value => {
    if (value !== '' && value !== '\u2022 ') {
      empty = false
    }
  })

  return empty
}

export function formatBullets(bullets) {
  const lines = bullets.split('\n')
  const bulletsFormatted = lines.map(line => `\u2022 ${line}\n`)

  return bulletsFormatted
}

const color = '3d3d3d'
export const styleSheet = {
  body: {
    paddingTop: 35,
    paddingBottom: 35,
    paddingHorizontal: 35
  },
  name: {
    fontSize: 25,
    fontFamily: 'Roboto',
    color: 'darkblue'
  },
  contact: {
    position: 'absolute',
    top: 35,
    right: 35
  },
  contactText: {
    fontFamily: 'Roboto',
    alignSelf: 'flex-end',
    fontSize: 12,
    color,
    paddingBottom: 1
  },
  education: {
    fontFamily: 'Roboto',
    paddingTop: 60,
    fontSize: 16,
    color: 'darkblue'
  },
  work: {
    fontFamily: 'Roboto',
    paddingTop: 15,
    fontSize: 16,
    color: 'darkblue'
  },
  sectionContainer: {
    paddingTop: 5,
    color
  },
  sectionText: {
    fontFamily: 'Roboto',
    fontSize: 12,
    paddingBottom: 1
  },
  sectionTextBullets: {
    paddingTop: 5,
    fontSize: 12,
    fontFamily: 'Roboto'
  },
  sectionTextBold: {
    fontFamily: 'Roboto',
    fontSize: 12,
    fontStyle: 'bold',
    paddingBottom: 1
  },
  sectionTextBoldBig: {
    fontFamily: 'Roboto',
    fontSize: 14,
    fontStyle: 'bold',
    paddingBottom: 1
  },
  flexContainer: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center'
  },
  flexContainerWrap: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    flexWrap: 'wrap'
  }
}
