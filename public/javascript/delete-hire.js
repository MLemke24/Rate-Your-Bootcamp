async function deletePortfolioHandler(event) {
    event.preventDefault();
  
    const id = document.getElementById('hire')
    console.log(id)
    const response = await fetch(`/hire/${id}`, {
      method: 'DELETE'
    });
  
    // if (response.ok) {
    //   document.location.replace('/dashboard');
    // } else {
    //   alert(response.statusText);
    // }
  }
  
  document.querySelector('.hire-delete').addEventListener('click', deletePortfolioHandler);