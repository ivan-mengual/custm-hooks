import { useEffect, useState } from "react"


export const useFetch = ( url ) => {

  const [state, setState] = useState({
    data: null,
    isLoading: true,
    hasError: null
  })

  const getFetch = async () => {

    setState({
      ...state,
      isLoading: true
    })
    
    try {
      const resp = await fetch(url)
      const data = await resp.json();
      // console.log(data)

      setState({
        data,
        isLoading: false,
        hasError: null
      })

    } catch (error) {
      console.log('pa tu casa payaso, esto es un error', error)  
    }
    
  }
  
  useEffect(() => {
    getFetch()
  }, [url])
  

  return {
    data: state.data ,
    isLoading: state.isLoading ,
    hasError: state.hasError
  }
}
