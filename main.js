// Get elements from the DOM
var resumeForm = document.getElementById('resumeForm');
var resumeDisplay = document.getElementById('resumeDisplay');
resumeForm.addEventListener('submit', function (e) {
    e.preventDefault();
    // Get values from form inputs
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var phone = document.getElementById('phone').value;
    var profilePic = document.getElementById('profile-pic').value;
    var education = document.getElementById('education').value;
    var skills = document.getElementById('skills').value.split(',');
    var workExperience = document.getElementById('work').value;
    // Generate the resume HTML
    var resumeHTML = "\n        <h2>Personal Information</h2>\n        ".concat(profilePic ? "<img src=\"".concat(profilePic, "\" alt=\"Profile Picture\" class=\"profile-img\">") : '', "\n        <p><strong>Name:</strong> ").concat(name, "</p>\n        <p><strong>Email:</strong> ").concat(email, "</p>\n        <p><strong>Phone:</strong> ").concat(phone, "</p>\n\n        <h2>Education</h2>\n        <p>").concat(education, "</p>\n\n        <h2>Skills</h2>\n        <ul>\n            ").concat(skills.map(function (skill) { return "<li>".concat(skill.trim(), "</li>"); }).join(''), "\n        </ul>\n\n        <h2>Work Experience</h2>\n        <p>").concat(workExperience, "</p>\n    ");
    // Display the generated resume
    resumeDisplay.innerHTML = resumeHTML;
});
