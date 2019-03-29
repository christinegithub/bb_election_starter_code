document.addEventListener("DOMContentLoaded", function() {

  const candidateList = document.getElementById('list');

  axios.get('https://bb-election-api.herokuapp.com/')
  .then((responseData) => {
    responseData.data.candidates.forEach((candidate) => {
      const individual = document.createElement('li');
      individual.innerHTML = (`${candidate.name}: ${candidate.votes} votes`);
      candidateList.appendChild(individual);
    });
  });
});
