const getXhr = (url, processResponse) => {
  const request = new XMLHttpRequest();
  request.open("GET", url);
  request.onreadystatechange = e => {
    if (request.readyState == 4 && request.status == 200) {
      const resonseJson = JSON.parse(request.response);
      processResponse(resonseJson);
    }
  };
  request.send();
};

export { getXhr }