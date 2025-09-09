
const tabs = document.querySelectorAll('.tab');
const contents = document.querySelectorAll('.tab-content');

const tabFunctionality = (e) => {
    const tabNumber = e.target.getAttribute("data-tab");

    // Hide all contents
    contents.forEach(content => {
        content.style.display = 'none';
    }); //when i click on next tab 1st one disappear

    // Remove "active" class from all tabs
    tabs.forEach(tab =>{
        tab.classList.remove('active');
    });

    // Show the clicked tab's content
    document.getElementById(`tab-${tabNumber}`).style.display ="block";
    e.target.classList.add('active')
}

// Attach event to all tabs
tabs.forEach(tab =>{
    tab.addEventListener('click', tabFunctionality);
})



// Default: show first tab
document.getElementById('tab-1').style.display = "block";