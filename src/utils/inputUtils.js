export function inputType(name) {
  return name === 'email' ? 'email' : name === 'zip' ? 'number' : name === 'start' || name === 'end' ? 'date' : 'text'
}

export function makePlaceHolder(name) {
  switch (name) {
    case 'name':
      return 'John Doe'
    case 'address':
      return '123 Sesame Street'
    case 'city':
      return 'Brownsville'
    case 'state':
      return 'TX'
    case 'zip':
      return '12345'
    case 'email':
      return 'johndoe@gmail.com'
    case 'phone':
      return '123-456-7890'
    case 'website':
      return 'somesite.com'
    case 'degree':
      return 'Degree'
    case 'program':
      return 'Program'
    case 'university':
      return 'University'
    default:
      return null
  }
}

export function containerClass(name) {
  if (name === 'university' || name === 'name' || name === 'address') {
    return 'input-container two-cols'
  } else {
    return 'input-container'
  }
}
