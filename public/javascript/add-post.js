async function newFormHandler(event) {
    event.preventDefault();
  
    const title = document.querySelector('input[name="post-title"]').value;
    const post_bootcampName = document.querySelector('input[name="post-bootcampName"]').value;
    const post_deliveryFormat = document.querySelector('input[name="post-deliveryFormat"]').value;
    const post_length = document.querySelector('input[name="post-length"]').value;
    const post_status = document.querySelector('input[name="post-status"]').value;
    const post_price = document.querySelector('input[name="post-price"]').value;
    const post_quality = document.querySelector('input[name="post-quality"]').value;
    const post_standardsMet = document.querySelector('input[name="post-standardsMet"]').value;
    const post_repeat = document.querySelector('input[name="post-repeat"]').value;
    const post_overallRating = document.querySelector('input[name="post-overallRating"]').value;
    const post_review_comments = document.querySelector('input[name="post-review_comments"]').value;
  
    console.log('adding post');

    const response = await fetch(`/api/posts`, {
      method: 'POST',
      body: JSON.stringify({
        title: title,
        bootcampName: post_bootcampName,
        deliverFormat: post_deliveryFormat,
        length: post_length,
        status: post_status,
        price: post_price ,
        quality: post_quality,
        standardsMet: true,
        repeat: true,
        overallRating: 6,
        review_comments: post_review_comments,
        user_id: 1
      }),
      headers: {
        'Content-Type': 'application/json'
      }
    });
  
    // if (response.ok) {
    //   document.location.replace('/dashboard');
    // } else {
      alert(response);
    // }
  }

  
  document.querySelector('.new-post-form').addEventListener('submit', newFormHandler);