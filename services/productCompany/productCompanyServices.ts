import { http } from "@/services"
import {ProductCompantDto} from './types'


export const GetProductCompanyAll = async() =>{
return await http.get<{result:ProductCompantDto[]}>(`/Product/company`)


}