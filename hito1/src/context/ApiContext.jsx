import { createContext, useState, useEffect } from 'react';

export const ApiContext = createContext();

const ApiProvider = ({children}) => {
    const [pizzas, setPizzas] = useState([])
    const URL = "http://localhost:5000/api/pizzas"
    const getApiPizzas = async () => {
        try {
            const res = await fetch(URL)
            const data = await res.json()
            console.log(data)
            setPizzas(data)
            } catch (error) {
                    console.log(error.message) 
            }
        }
        useEffect(() => {
        getApiPizzas()
    }, [])

  return (
    <ApiContext.Provider value={{ pizzas }}>
      {children}
    </ApiContext.Provider>
  );
}

export default ApiProvider;
