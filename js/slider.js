function showContent(contentType) {
    const contentDiv = document.getElementById("sliderContent");
    contentDiv.classList.add("hidden");
    contentDiv.innerHTML = "";  
    if (contentType === 'slider1') {
      contentDiv.innerHTML = `
        <section class="bg-gray-100 flex items-center justify-center">
          <div class="container mx-auto p-4">
            <h1 class="text-2xl font-bold text-gray-800 mb-4">User Information</h1>
            <div class="overflow-x-auto">
              <table class="min-w-full bg-white border border-gray-300 rounded-lg">
                <thead class="bg-gray-200">
                  <tr>
                    <th class="px-6 py-3 text-left text-gray-600 font-medium">Name</th>
                    <th class="px-6 py-3 text-left text-gray-600 font-medium">Email</th>
                    <th class="px-6 py-3 text-left text-gray-600 font-medium">Phone</th>
                    <th class="px-6 py-3 text-left text-gray-600 font-medium">Location</th>
                    <th class="px-6 py-3 text-left text-gray-600 font-medium">Gender</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td class="px-6 py-4 border-b">John Doe</td>
                    <td class="px-6 py-4 border-b">john.doe@example.com</td>
                    <td class="px-6 py-4 border-b">+123456789</td>
                    <td class="px-6 py-4 border-b">New York</td>
                    <td class="px-6 py-4 border-b">Male</td>
                  </tr>
                  <tr class="bg-gray-50">
                    <td class="px-6 py-4 border-b">Jane Smith</td>
                    <td class="px-6 py-4 border-b">jane.smith@example.com</td>
                    <td class="px-6 py-4 border-b">+987654321</td>
                    <td class="px-6 py-4 border-b">Los Angeles</td>
                    <td class="px-6 py-4 border-b">Female</td>
                  </tr>
                  <tr>
                    <td class="px-6 py-4 border-b">Alex Johnson</td>
                    <td class="px-6 py-4 border-b">alex.johnson@example.com</td>
                    <td class="px-6 py-4 border-b">+1122334455</td>
                    <td class="px-6 py-4 border-b">Chicago</td>
                    <td class="px-6 py-4 border-b">Non-Binary</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </section>
      `;
    } else if (contentType === 'slider2') {
      contentDiv.innerHTML = `
        <section class="bg-gray-100  flex items-center justify-center">
          <div class="bg-white shadow-md rounded-lg p-6 w-full max-w-md">
            <h2 class="text-2xl font-bold text-gray-800 mb-6 text-center">Contact Us</h2>
            <form>
              <div class="mb-4">
                <label for="name" class="block text-gray-700 font-medium mb-2">Name</label>
                <input type="text" id="name" placeholder="Enter your name"
                  class="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500">
              </div>
              <div class="mb-4">
                <label for="email" class="block text-gray-700 font-medium mb-2">Email</label>
                <input type="email" id="email" placeholder="Enter your email"
                  class="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500">
              </div>
              <div class="mb-4">
                <label for="message" class="block text-gray-700 font-medium mb-2">Message</label>
                <textarea id="message" placeholder="Write your message here" rows="4"
                  class="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"></textarea>
              </div>
              <div>
                <button type="submit"
                  class="w-full bg-blue-600 text-white font-medium py-2 px-4 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500">
                  Submit
                </button>
              </div>
            </form>
          </div>
        </section>
      `;
    }
    contentDiv.classList.remove("hidden");
  }
  document.getElementById("slider1").addEventListener("click", function() {
    showContent('slider1');
  });

  document.getElementById("slider2").addEventListener("click", function() {
    showContent('slider2');
  })