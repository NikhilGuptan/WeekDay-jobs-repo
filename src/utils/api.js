const fetchJobs = async (limit, offset) => {
    const myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");
  
    const body = JSON.stringify({ limit, offset });
  
    const requestOptions = {
      method: "POST",
      headers: myHeaders,
      body
    };
  
    try {
      const response = await fetch("https://api.weekday.technology/adhoc/getSampleJdJSON", requestOptions);
      const result = await response.json();
      return result;
    } catch (error) {
      throw new Error(error);
    }
  };
  
  export { fetchJobs };
  