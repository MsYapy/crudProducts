export async function GetProducts(): Promise<void> {
    try {
        const response = await fetch('https://localhost:7222/api/productos');
        if(response.ok){
         const data = await response.json();
         console.log("Datos recibidos");
         return data;
        }else{
            throw new Error("Error al obtener datos: " + response.statusText)
        }
    } catch (error) {
        console.log(error)        
    }
}   

export async function CreateProduct(description: string, price: number): Promise<void> {
    try {
        const response = await fetch('https://localhost:7222/api/productos',
            {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    descripcion: `${description}`,
                    precio: price
                })
            });
            if(!response.ok){
             throw new Error('Error al crear el producto');
            } 
            console.log(response.json())

    } catch (error) {
      console.log(error);    
    }
}

export async function EditProduct(id: string, price: number) {
  try {
    const response = await fetch(`https://localhost:7222/api/productos/${id}`,
        {
            method: 'PUT', 
            headers: {
                'Content-Type': 'aplication/json'
            }, 
            body: JSON.stringify({
                precio: price
            })
        }
    );

    if(!response.ok){
        throw new Error('Error al editar el producto');
    }
    
  } catch (error) {
    console.log(error)
  }   
}


export async function DeleteProduct(id: string) {
    try {
        const response = await fetch(`https://localhost:7222/api/productos/${id}`, {
        method: 'DELETE', 
        headers:{
            'Content-Type': 'application/json'
        }
        });
        if(!response.ok){
            throw new Error('Error al eliminar el producto');
        }
    } catch (error) {
      console.log(error)
    }
}