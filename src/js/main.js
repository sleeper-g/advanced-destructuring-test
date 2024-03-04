export default function extract(character){
  if (character && character.special){
    const result = []
    character.special.forEach((elem) => {
      const {id, name, description = 'Описание недоступно', icon} = elem 
      result.push( {id, name, description, icon} )
    })
    return result
  }
  else {
    throw new Error('empty character or special')
  }
}
