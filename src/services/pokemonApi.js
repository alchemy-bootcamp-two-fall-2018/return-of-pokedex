import characters from '../assets/pokedex';


const types = [];
//const seen = {};

characters.forEach(characters => {
  const type = characters.type;
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
    return;
  }
};