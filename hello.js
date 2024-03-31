    // Check if response is JSON
    const contentType = response.headers.get('content-type');
    if (!contentType || !contentType.includes('application/json')) {
      throw new Error('Response is not in JSON format');
    }

    if(true){
        console.log("Hello")
    }
    if(false){
        console.log("Hello Hi")
    }else{
        console.log("Hello nothing to do!")
    }