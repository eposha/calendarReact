const baseUrl =
    "https://crudcrud.com/api/46e6322de5174e3a8c0733f69bcc738b/events";

export const createEvent = eventData => {
    return fetch(baseUrl, {
        method: "POST",
        headers: {
            "Content-Type": "application/json; utc-8"
        },
        body: JSON.stringify(eventData)
    }).then(response => {
        if (!response.ok) {
            throw new Error("Failed to create event");
        }
    });
}

export const fetchEvents = () => {
    return fetch(baseUrl)
        .then(response => {
            if (response.ok) {
                return response.json();
            }
        })
        .then(eventsList => eventsList.map(({ _id, ...task }) => ({
            id: _id,
            ...task
        })));

}

export const deleteEvents = (id) => {
    return fetch(`${baseUrl}/${id}`, {
        method: "DELETE"
    }).then(response => {
        if (!response.ok) {
            throw new Error("Failed to delete task");
        }
    });
}