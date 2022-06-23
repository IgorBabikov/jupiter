import axios from "axios"

 export const getData = async (limit, category) => {
   try {
      const filter = category === 'Show All' ? '' : `&filter=${category}`

      const res = await axios.get(`https://62b355384f851f87f45936e9.mockapi.io/data?p=1&l=${limit}${filter}`)
      return res.data
      
   } catch(e) {
      alert('Не удалось получить данные!')
      throw e
   }

}



