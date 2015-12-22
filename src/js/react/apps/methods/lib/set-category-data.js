module.exports = (app, catName, value)=>{
  console.log('the app');
  console.log(app);

  switch(catName){
    case 'Category 1':
      app.setState({'cat1data': value});
      break;

    case 'Category 2':
      app.setState({'cat2data': value});
      break;
  }
}
