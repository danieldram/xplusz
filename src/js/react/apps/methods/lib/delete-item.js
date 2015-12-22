module.exports = (app, catName, index)=>{

  switch(catName){
    case 'Category 1':
      var catData = app.state.cat1data;
      if(typeof catData=='string')
      catData = catData.split(',');

      console.log(index);
      catData.splice(index, index+1);
      console.log(catData);
      app.setState({'cat1data': catData});
      localStorage.setItem('Category 1', catData.toString())
    break;

    case 'Category 2':
      var catData = app.state.cat2data;
      if(typeof catData=='string')
      catData = catData.split(',');

      catData.splice(index, index+1);
      app.setState({'cat2data': catData});
      localStorage.setItem('Category 2', catData.toString())
    break;

  }

}
