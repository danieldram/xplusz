module.exports = (catName, value)=>{
  if(localStorage.getItem(catName)){
    var tmp = localStorage.getItem(catName);
    tmp = tmp.split(',');
    tmp.push(value);
    tmp = tmp.toString();
    localStorage.setItem(catName, tmp);
    return {catName: catName, value:tmp};

  }else{
    localStorage.setItem(catName, value);
    return {catName:catName, value:value};
  }
}
