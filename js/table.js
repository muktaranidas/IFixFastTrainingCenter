const tableBody = document.getElementById('tableBody');

function addUser() {
  // Get form values
  const name = document.getElementById('name').value.trim();
  const email = document.getElementById('email').value.trim();
  const phone = document.getElementById('phone').value.trim();
  const location = document.getElementById('location').value.trim();
  const gender = document.getElementById('gender').value;

  // Validate inputs
  if (!name || !email || !phone || !location || !gender) {
    alert('Please fill in all fields.');
    return;
  }

  // Create a new table row
  const row = `
    <tr>
      <td class="px-4 py-2 border">${name}</td>
      <td class="px-4 py-2 border">${email}</td>
      <td class="px-4 py-2 border">${phone}</td>
      <td class="px-4 py-2 border">${location}</td>
      <td class="px-4 py-2 border">${gender}</td>
    </tr>
  `;

  // Append the row to the table body
  tableBody.insertAdjacentHTML('beforeend', row);

  // Clear the form
  document.getElementById('addUserForm').reset();
}
