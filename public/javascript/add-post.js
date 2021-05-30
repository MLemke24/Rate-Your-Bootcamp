async function newFormHandler(event) {

    event.preventDefault();
  
    //const id = document.querySelector('input[name="post-id"]').value;
    const title = document.querySelector('input[name="post-title"]').value;
    const bootcampName = document.querySelector('input[name="post-bootcampName"]').value;
    const deliverFormat = document.querySelector('input[name="post-deliveryFormat"]').value;
    const length = document.querySelector('input[name="post-length"]').value;
    const price = document.querySelector('input[name="post-price"]').value;
    const repeat = document.querySelector('input[name="post-repeat"]').value;
    const overallRating = document.querySelector('input[name="post-overallRating"]').value;
    const review_comments = document.querySelector('input[name="post-review_comments"]').value;
  
    console.log('==========================================adding post');

    const response = await fetch(`/api/posts`, {
      method: 'POST',
      body: JSON.stringify({
        //id, 
        title,
        bootcampName,
        deliverFormat,
        length,
        price,
        repeat,
        overallRating,
        review_comments
      }),
      headers: {
        'Content-Type': 'application/json'
      }
    });
  
    if (response.ok) {
      document.location.replace('/dashboard');
    } else {
      alert(response);
    }
  }

  
  document.querySelector('.new-post-form').addEventListener('submit', newFormHandler);