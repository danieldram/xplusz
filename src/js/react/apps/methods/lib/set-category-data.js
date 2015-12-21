module.exports = ({catName, value})=>{
  switch(catName){
    case 'Category 1':
      this.setState('cat1data', value);
      break;
    case 'Category 2':
      this.setState('cat2data', value);
      break;
  }
}
