async function newFormHandler(event) {
    event.preventDefault();
  
    const title = document.querySelector('input[name="hire-title"]').value;
    const post_url = document.querySelector('input[name="hire-url"]').value;
  
    const response = await fetch(`/hire`, {
      method: 'POST',
      body: JSON.stringify({
        title,
        post_url
      }),
      headers: {
        'Content-Type': 'application/json'
      }
    });
  
    if (response.ok) {
      document.location.replace('/hire');
    } else {
      alert(response.statusText);
    }
  }
  
  document.querySelector('.new-hire-form').addEventListener('submit', newFormHandler);