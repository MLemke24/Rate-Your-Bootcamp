async function deleteFormHandler(event){
    event.preventDefault();
   

    const title = document.querySelector('input[name="post-title"]').value;
    const bootcampName = document.querySelector('input[name="post-bootcampName"]').value;
    const deliverFormat = document.querySelector('input[name="post-deliveryFormat"]').value;
    const length = document.querySelector('input[name="post-length"]').value;
    const price = document.querySelector('input[name="post-price"]').value;
    const overallRating = document.querySelector('input[name="post-overallRating"]').value;
    const review_comments = document.querySelector('input[name="post-review_comments"]').value;
    const id = window.location.toString().split('/')[
      window.location.toString().split('/').length - 1
  ];

      const response = await fetch(`/api/posts/${id}`, {
        method: 'DELETE',
        body: JSON.stringify({
          id,
          title,
          bootcampName,
          deliverFormat,
          length,
          price,
          overallRating,
          review_comments
        }),
        headers: {
            'Content-Type': 'application/json'
        }
      });
    
      if (response.ok) {
        document.location.render('/dashboard');
      // } else {
      //   alert(response.statusText);
    }
}

document.querySelector('.delete-post-btn').addEventListener('click', deleteFormHandler);