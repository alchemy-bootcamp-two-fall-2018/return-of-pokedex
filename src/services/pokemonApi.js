import characters from '../assets/pokedex';


const types = [];
//const seen = {};

characters.forEach(character => {
  const type = character.type_1;
  if(types.includes(type)) {
    return;
  }
  types.push(type);
});

export default{
  getCharacters() {
    return characters;
  },
  getTypes(){
    return types;
  }
};