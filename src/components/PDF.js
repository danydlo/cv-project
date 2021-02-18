import { Page, Text, View, Document } from '@react-pdf/renderer'
import { formatDate, formatWork, formatSkills, isEmpty, styles } from '../utils/pdfUtils'

function PDF({ contact, education, work, skills }) {
  return (
    <Document>
      <Page style={styles.body}>
        <Text style={styles.name}>{contact.name}</Text>
        <View style={styles.contact}>
          <Text style={styles.contactText}>{contact.address}</Text>
          <Text style={styles.contactText}>{`${contact.city}, ${contact.state} ${contact.zip}`}</Text>
          <Text style={styles.contactText}>{contact.phone}</Text>
          <Text style={styles.contactText}>{contact.email}</Text>
          <Text style={styles.contactText}>{contact.website}</Text>
        </View>
        {isEmpty(education[0]) ? (
          <Text />
        ) : (
          <View style={styles.education}>
            <Text>Education</Text>
            <View style={styles.flexContainerWrap}>
              {education.map((el, index) => (
                <View style={styles.sectionContainer} key={'education' + index}>
                  <Text style={styles.sectionText}>{el.degree}</Text>
                  <Text style={styles.sectionTextBold}>{el.program}</Text>
                  <Text style={styles.sectionText}>{el.university}</Text>
                  <Text style={styles.sectionText}>{formatDate(el.start, el.end)}</Text>
                </View>
              ))}
            </View>
          </View>
        )}
        {isEmpty(work[0]) ? (
          <Text />
        ) : (
          <View style={styles.work}>
            <Text>Work</Text>
            {work.map((el, index) => (
              <View style={styles.sectionContainer} key={'work' + index}>
                <View style={styles.flexContainer}>
                  <Text style={styles.sectionTextBoldBig}>{formatWork(el.title, el.company)}</Text>
                  <Text style={styles.sectionText}>{formatDate(el.start, el.end)}</Text>
                </View>
                <Text style={styles.sectionTextBullets}>{el.bullets}</Text>
              </View>
            ))}
          </View>
        )}
        {isEmpty(skills, true) ? (
          <Text />
        ) : (
          <View style={styles.skills}>
            <Text>Skills</Text>
            {formatSkills(skills)}
          </View>
        )}
      </Page>
    </Document>
  )
}

export default PDF
