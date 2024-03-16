// A mock function to mimic making an async request for data
export async function fetchAllproducts() {
  return new Promise(async (resolve) => {
    const response = await fetch('http://localhost:8080/products');
    const data = await response.json();
    resolve({ data });
  });
}
export async function fetchProductById(id) {
  console.log("this is our id")
  console.log(id)
  return new Promise(async (resolve) => {
    const response = await fetch('http://localhost:8080/products/'+id)
    const data = await response.json();
    console.log("this is data")
    console.log(data)
    resolve({ data });
  });
}
export async function fetchCategories() {
  return new Promise(async (resolve) => {
    const response = await fetch('http://localhost:8080/categories');
    const data = await response.json();
    resolve({ data });
  });
}
export async function fetchBrands() {
  return new Promise(async (resolve) => {
    const response = await fetch('http://localhost:8080/brands');
    const data = await response.json();
   
    resolve({ data });
  });
}
export async function fetchproductsByFilters(filter,sort,pagination) {
  let queryString='';
  for(let key in filter){
    const categoryValues=filter[key];
    if(categoryValues.length){
      const lastCategoryValue =  categoryValues[categoryValues.length-1] ;
      queryString+=`${key}=${lastCategoryValue}&`
    }
  } 
    for(let key in sort){
      queryString+=`${key}=${sort[key]}&`
    }
    // for(let key in pagination){
    //   queryString+=`${key}=${pagination[key]}&`
    // }
  console.log(1)
  console.log(queryString)
  console.log(2)
  return new Promise(async (resolve) => {
    const url='http://localhost:8080/products?'+queryString;
    console.log(url+"this is url")
    const response = await fetch('http://localhost:8080/products?'+queryString);
    // console.log(queryString)
    // const response = await fetch('http://localhost:8080/products?_page=3&_per_page=10');
    const data = await response.json();
    // const totalItems=await response.header.get('X-Total-Count')
    resolve({data} );
  });
}
//queryString =category=smartphones
//{_sort: 'price', _order: 'asc'}
//http://localhost:8080/products?category=laptops