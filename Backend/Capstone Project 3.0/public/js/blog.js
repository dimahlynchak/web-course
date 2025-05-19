document.addEventListener("DOMContentLoaded", () => {
    const editBtn = document.getElementById("edit-btn");
    const saveBtn = document.getElementById("save-btn");
    const deleteBtn = document.getElementById("delete-btn");
    const titleEl = document.getElementById("blog-title");
    const textEl = document.getElementById("blog-text");

    editBtn.addEventListener("click", () => {
        titleEl.contentEditable = true;
        textEl.contentEditable = true;

        titleEl.focus();
        editBtn.style.display = "none";
        saveBtn.style.display = "inline-block";
    });

    saveBtn.addEventListener("click", () => {
        const [title, name] = titleEl.innerText.split(" - ");
        const text = textEl.innerText;

        fetch(window.location.pathname + "/edit", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({ title, name, text })
        }).then(() => {
            titleEl.contentEditable = false;
            textEl.contentEditable = false;
            editBtn.style.display = "inline-block";
            saveBtn.style.display = "none";
        });
    });

    deleteBtn.addEventListener("click", () => {
        if (confirm("Are you sure?")) {
            fetch(window.location.pathname + "/delete", {
                method: "POST"
            }).then(() => {
                window.location.href = "/";
            });
        }
    })
});
