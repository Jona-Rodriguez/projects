//Example fetch using DnD5eAPI - place subclasses in ul
document.querySelector('button').addEventListener('click', getFetch)

function getFetch(){
  document.querySelector('ul').replaceChildren() 
  // should clear all children if there are any previous
  const choice = document.querySelector('input').value
  const url = `https://www.dnd5eapi.co/api/spells/${choice}`

  fetch(url)
      .then(res => res.json()) // parse response as JSON
      .then(data => {
       console.log(data.subClasses)
       data.subclasses.forEach( obj => {
        console.log(obj)
        const li = document.createElement('li') // Create an li
        li.textContent = obj.name // set the content of created li
        document.querySelector('ul').appendChild(li) // add li to the list
       })
      })
      .catch(err => {
          console.log(`error ${err}`)
      });

    //document.querySelector('ul').src = data.subclasses
}

