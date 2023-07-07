export default function MakeProduct() {
  const handleForm = async () => {
    const url = 'https://openmarket.weniv.co.kr'
    const path = '/products/'
    const productData = {
      product_name: 'test',
      image:
        'https://openmarket.weniv.co.kr/media/products/2023/07/06/B002388418-2.jpg',
      price: 20000,
      shipping_method: 'PARCEL',
      shipping_fee: 3000,
      stock: 10,
      products_info: '테스트 상품입니다',
    }

    // const token = localStorage.getItem('token')
    // console.log(JSON.stringify(productData))
    const res = await fetch(url + path, {
      method: 'POST',
      headers: {
        Authorization: `JWT eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ1c2VyX2lkIjo1LCJlbWFpbCI6IiIsInVzZXJuYW1lIjoic2VsbGVyMSIsImV4cCI6MTY4OTMwMTE5MH0.lTEk_H-_viiDREHw7swwMZpWxDPP0vowFwukG1bAmkE`,
        'Content-type': 'application/json',
      },
      body: JSON.stringify(productData),
    })
    const json = await res.json()
    console.log(json)
  }
  handleForm()
  return <></>
}
