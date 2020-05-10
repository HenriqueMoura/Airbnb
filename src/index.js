const url = "https://api.sheety.co/30b6e400-9023-4a15-8e6c-16aa4e3b1e72"
const myPlaces = document.getElementById('acomodacoes')
const local = fetch(url)
  .then(response => response.json())
  .then(data => {
      
        console.log(data)
        console.log(data[1].photo)
        for (const places of data) {
            let placeItens = document.createElement('div');
            let newElement = document.createElement('id')
            newElement.className = 'mx-sm-4'
            placeItens.className = "d-flex my-sm-2";
            placeItens.appendChild(
                newElement
            ).innerHTML = `<img src="${places.photo}", alt="" width="300px" >`
            
            
       

            placeItens.appendChild(
                document.createElement('div')
            ).innerHTML = `
                    <span>${places.property_type}</span>
                    <p class="my-sm-2"><b>${places.name}</b> </p>
                    <span>R$ ${places.price}</span>
            `

          
              

            myPlaces.appendChild(placeItens);
          }
          
  });



