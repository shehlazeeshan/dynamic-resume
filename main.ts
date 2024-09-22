// Get elements from the DOM
const resumeForm = document.getElementById('resumeForm') as HTMLFormElement;
const resumeDisplay = document.getElementById('resumeDisplay') as HTMLElement;

resumeForm.addEventListener('submit', (e) => {
    e.preventDefault();

    // Get values from form inputs
    const name = (document.getElementById('name') as HTMLInputElement).value;
    const email = (document.getElementById('email') as HTMLInputElement).value;
    const phone = (document.getElementById('phone') as HTMLInputElement).value;
    const profilePic = (document.getElementById('profile-pic') as HTMLInputElement).value;
    const education = (document.getElementById('education') as HTMLTextAreaElement).value;
    const skills = (document.getElementById('skills') as HTMLInputElement).value.split(',');
    const workExperience = (document.getElementById('work') as HTMLTextAreaElement).value;

    // Generate the resume HTML
    const resumeHTML = `
        <h2>Personal Information</h2>
        ${profilePic ? `<img src="${profilePic}" alt="Profile Picture" class="profile-img">` : ''}
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone}</p>

        <h2>Education</h2>
        <p>${education}</p>

        <h2>Skills</h2>
        <ul>
            ${skills.map(skill => `<li>${skill.trim()}</li>`).join('')}
        </ul>

        <h2>Work Experience</h2>
        <p>${workExperience}</p>
    `;

    // Display the generated resume
    resumeDisplay.innerHTML = resumeHTML;
});
