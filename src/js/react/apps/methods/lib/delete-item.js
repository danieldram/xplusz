module.exports = (app, catName, value)=>{
  console.log(catName);
  console.log(value);
  var tmp = [];
  switch(catName){
    case 'Category 1':
      var catData = app.state.cat1data;
      if(typeof catData=='string')
      catData = catData.split(',');

      catData.map((data)=>{ if(value !== data) tmp.push(data)});
      app.setState({'cat1data': tmp});
      localStorage.setItem('Category 1', tmp.toString())
    break;

    case 'Category 2':
      var catData = app.state.cat2data;
      if(typeof catData=='string')
      catData = catData.split(',');

      catData.map((data)=>{ if(value !== data) tmp.push(data)});
      app.setState({'cat2data': tmp});
      localStorage.setItem('Category 2', tmp.toString())
    break;

  }

}
