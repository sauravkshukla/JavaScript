async function fetchMultipleData() {
    try {
      // Fetch data from both APIs concurrently
      let [todoResponse, postResponse] = await Promise.all([
        fetch('https://jsonplaceholder.typicode.com/todos/1'),
        fetch('https://jsonplaceholder.typicode.com/posts/1')
      ]);
  
      // Convert both responses to JSON
      let todoData = await todoResponse.json();
      let postData = await postResponse.json();
  
      // Combine the results in an object
      let combinedData = {
        todo: todoData,
        post: postData
      };
  
      // Log the combined data
      console.log(combinedData);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  }
  
  // Example usage:
  fetchMultipleData();
  