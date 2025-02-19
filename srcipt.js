const freelancers =[
    {name:"Alice", occupation: "Writer", startingPrice: "$50"},
    {name:"Bob", occupation: "Teacher", startingPrice: "$50"},
    {name: ".Carol", occupation: "Programmer", staringPrice:"$70"}
];

const container= document.querySelector('#freelancer-list')(() => {
    const newContainer = Document.createElement('div');
    newContainer.id = 'freelancer-list';
    document.body.appendChild(newContainer);
    return newContainer;
})();

freelancers.forEach(freelancer => {
    const freelancerDiv = document.createElement('div');
    freelancerDiv.innerHTML = `
        <p>Name: ${freelancer.name}</p>
        <p>Occupation: ${freelancer.occupation}</p>
        <p>Starting Price: $${freelancer.startingPrice}</p>
    `;
    container.appendChild(freelancerDiv);
});