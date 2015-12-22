module.exports = (app)=>{
  console.log(app);
  return {
    toggleUI: true,
    currentUI: null,
    cat1data: (localStorage.getItem('Category 1')) ? localStorage.getItem('Category 1').split(',') : null,
    cat2data: (localStorage.getItem('Category 2')) ? localStorage.getItem('Category 2').split(',') : null,
    filter: 'test1',
  }
}
