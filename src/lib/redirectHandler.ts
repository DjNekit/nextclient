import axios, { AxiosError } from "axios";
import { NextApiRequest, NextApiResponse } from "next";

type Methods = "head" | "options" | "put" | "post" | "patch" | "delete" | "get"

export function redirectHandler(url: string) {
  return async function(
    req: NextApiRequest,
    res: NextApiResponse
  ) {
    res.send({})
    // try {
    //   const { body, query, headers, method } = req;
    //   const axiosMethod = method!.toLowerCase() as Methods
      
    //   const queryString = Object.entries(query)
    //   .reduce((result, [key, value]) => {
    //     const divider = result === '' ? '?' : '&'
    //     return `${result}${divider}${key}=${value}`
    //   }, '')
    //   console.log(method, `${process.env.API}${url}${queryString}`)

    //   const { data, headers: returnedHeaders, status } = await axios({
    //     url: `${process.env.API}${url}${queryString}`,
    //     method: axiosMethod,
    //     headers,
    //     data: body,
    //   })

    //   //? Подставляю оригинальные хэдеры с куками в прокси ответ
    //   Object.entries(returnedHeaders).forEach(([headerKey, value]) => {
    //     res.setHeader(headerKey, value as string)
    //   })
  
    //   res.status(status).json(data)
    // } catch (error: any) {
    //   const axiosError = error as AxiosError
  
    //   res
    //     .status(axiosError.response?.status || 500)
    //     .json(axiosError.response?.data || axiosError.message)
    // }
  }
}

