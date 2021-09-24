import { fetchDittoService } from "services/general/fetchDittoService"
import { DITTO_ENDPOINT } from "utils/consts"

export const createTypeService = ( namespace:string, idTwin:string, data:JSON ) => {
    return fetchDittoService(DITTO_ENDPOINT + "/things/"+ namespace + ":" + idTwin, {
      method: 'PUT',
      headers: {
        "Authorization": 'Basic '+btoa('ditto:ditto'),
        "Content-Type": "application/json"
      },
      body: JSON.stringify(data)
    })
}