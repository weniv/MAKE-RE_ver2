import axios from 'axios'

export const getAllResume = async (userId) => {
  try {
    const result = await axios.get(`/api/v1/resume?id=${userId}`)
    return result
  } catch (err) {
    console.log(err)
  }
}
