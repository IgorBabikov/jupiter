import axios from "axios"

 export const deteleData = async (id) => {
  try {
    const res = await axios.delete(`https://62b355384f851f87f45936e9.mockapi.io/data/${id}`)

    return res.data

  } catch(e) {
    alert('Не удалось удалить!')
    throw e
  }
}



