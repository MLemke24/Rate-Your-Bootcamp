async function newFormHandler(event) {

    event.preventDefault();
  
    const title = document.querySelector('input[name="post-title"]').value;
    const post_bootcampName = document.querySelector('input[name="post-bootcampName"]').value;
    const post_deliverFormat = document.querySelector('input[name="post-deliveryFormat"]').value;
    const post_length = document.querySelector('input[name="post-length"]').value;
    const post_price = document.querySelector('input[name="post-price"]').value;
    const post_repeat = document.querySelector('input[name="post-repeat"]').value;
    const post_overallRating = document.querySelector('input[name="post-overallRating"]').value;
    const post_review_comments = document.querySelector('input[name="post-review_comments"]').value;
  
    console.log('==========================================adding post');

    const response = await fetch(`/api/posts`, {
      method: 'POST',
      body: JSON.stringify({
        title: title,
        bootcampName: post_bootcampName,
        deliverFormat: post_deliverFormat,
        length: post_length,
        price: post_price ,
        repeat: post_repeat,
        overallRating: post_overallRating,
        review_comments: post_review_comments
      }),
      headers: {
        'Content-Type': 'application/json'
      }
    });
  
<<<<<<< HEAD
    // if (response.ok) {
    //   document.location.replace('/dashboard');
    // } else {
      alert(response);
    // }
=======
    if (response.ok) {
      document.location.replace('/dashboard');
    } else {
      alert(response);
    }
>>>>>>> 36c6614b6b3a996495e5553da8d844b37fd27b7c
  }

  
  document.querySelector('.new-post-form').addEventListener('submit', newFormHandler);