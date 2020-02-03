const baseUrl =
    "https://crudcrud.com/api/5a0a373fa41946beae5795cefaa70b08/events";

export const createEvent = taskData => {
    return fetch(baseUrl, {
        method: "POST",
        headers: {
            "Content-Type": "application/json; utc-8"
        },
        body: JSON.stringify(taskData)
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
        .then(tasksList => tasksList.map(({ _id, ...task }) => ({
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