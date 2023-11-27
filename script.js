const main = async () => {
  try {
    const response = await fetch('https://api.minireg.thanayut.in.th/courses')

    console.log(response)

    // response has error message that better than status code
    const rawData = await response.json()

    // fetch don't reject to catch so we need to handle
    if (!response.ok) {
      throw new Error(`Code - ${response.status} - ${rawData.message}`)
    }

    console.log(rawData)
  } catch (err) {
    console.log(err)
  }
  /*   const frontendInput = document.getElementById("frontend");

  const frontendButton = document.getElementById("add-front");

  const frontendMilestonesList = document.getElementById("frontend-milestone");

  frontendButton.addEventListener("click", (e) => {
    e.preventDefault();

    const newList = document.createElement("li");

    newList.textContent = frontendInput.value;

    frontendMilestonesList.appendChild(newList);
  });

  const backendInput = document.getElementById("backend");

  const backendButton = document.getElementById("add-back");

  const backendMilestonesList = document.getElementById("backend-milestone");

  backendButton.addEventListener("click", (e) => {
    e.preventDefault();

    const newList = document.createElement("li");

    newList.textContent = backendInput.value;

    backendMilestonesList.appendChild(newList);
  }); */
}

document.addEventListener('DOMContentLoaded', () => {
  main()
})
