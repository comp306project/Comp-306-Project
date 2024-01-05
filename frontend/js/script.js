document.addEventListener('DOMContentLoaded', () => {
    loadEvents();
});

// This function will be called to load events when the page loads
function loadEvents() {
    fetch('/api/events')
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok.');
            }
            return response.json();
        })
        .then(data => {
            renderEvents(data); // Call the function to render events
        })
        .catch(error => {
            console.error('There has been a problem with your fetch operation:', error);
        });
}

document.addEventListener('DOMContentLoaded', loadEvents);

function renderEvents(events) {
    const eventsContainer = document.querySelector('.events .event-container .columns');
    eventsContainer.innerHTML = ''; // Clear existing events

    // Loop through the events and create HTML for each one
    events.forEach(event => {
        const eventHTML = `
            <div class="column is-one-third">
                <div class="card">
                    <div class="card-image">
                        <figure class="image is-4by3">
                            <img src="${event.ImageURL || 'path/to/default-image.png'}" alt="Event image">
                        </figure>
                    </div>
                    <div class="card-content">
                        <div class="media">
                            <div class="media-content">
                                <p class="title is-4">${event.Name}</p>
                                <p class="subtitle is-6">${event.Type}</p>
                            </div>
                        </div>
                        <div class="content">
                            ${event.Description}
                            <br>
                            <time datetime="${event.Date}">${new Date(event.Date).toLocaleDateString()}</time>
                        </div>
                    </div>
                </div>
            </div>
        `;

        // Append the event HTML to the container
        eventsContainer.insertAdjacentHTML('beforeend', eventHTML);
    });
}

