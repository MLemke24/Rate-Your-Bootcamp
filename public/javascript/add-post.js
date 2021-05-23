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
  
    const response = await fetch(`/api/posts`, {
      method: 'POST',
      body: JSON.stringify({
        title,
        post_bootcampName, 
        post_deliveryFormat,
        post_length,
        post_status,
        post_price,
        post_quality,
        post_standardsMet,
        post_repeat,
        post_overallRating,
        post_review_comments
      }),
      headers: {
        'Content-Type': 'application/json'
      }
    });
  
    if (response.ok) {
      document.location.replace('/dashboard');
    } else {
      alert(response.statusText);
    }
  }

  console.log(response);
  
  document.querySelector('.new-post-form').addEventListener('submit', newFormHandler);