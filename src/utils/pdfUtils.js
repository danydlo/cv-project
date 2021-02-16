import { Text, View, StyleSheet, Font } from '@react-pdf/renderer'
import Roboto from '../fonts/Roboto-Regular.ttf'
import RobotoBold from '../fonts/Roboto-Bold.ttf'

Font.register({ family: 'Roboto', fonts: [{ src: Roboto }, { src: RobotoBold, fontStyle: 'bold' }] })

const color = '3d3d3d'
export const styles = StyleSheet.create({
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
  skills: {
    fontFamily: 'Roboto',
    paddingTop: 15,
    fontSize: 16,
    color: 'darkblue',
    width: '100%'
  },
  sectionContainer: {
    paddingTop: 5,
    color
  },
  sectionText: {
    color,
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
  skillsText: {
    fontFamily: 'Roboto',
    fontSize: 12,
    color,
    paddingTop: 5
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
})

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

export function isEmpty(object, skills = false) {
  let empty = true
  if (skills) {
    object.forEach(value => {
      if (value !== '') empty = false
    })
  } else {
    const values = Object.values(object)
    values.forEach(value => {
      if (value !== '' && value !== '\u2022 ') empty = false
    })
  }

  return empty
}

export function formatSkills(skills) {
  let cols = []
  cols.push([])
  cols.push([])
  cols.push([])

  skills.forEach((skill, index) => {
    if ((index + 3) % 3 === 0) cols[0].push(skill)
    else if ((index + 3) % 3 === 1) cols[1].push(skill)
    else cols[2].push(skill)
  })

  const views = (
    <View style={styles.flexContainerWrap}>
      {cols.map((col, index) => (
        <View style={{ display: 'table-column' }} key={'col' + index}>
          {col.map((text, index) => (
            <Text style={styles.skillsText} key={'text' + index}>
              {text}
            </Text>
          ))}
        </View>
      ))}
    </View>
  )

  return views
}
