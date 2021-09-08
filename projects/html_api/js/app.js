function query(node, from = document) {
  return from.querySelector(node);
}
function queryAll(node) {
  return document.querySelectorAll(node);
}
// --------------------------------

const init = () => {
  const dropzone = query(".dropzone");
  const files = query(".files");

  dropzone.addEventListener("dragenter", e => {
    e.target.classList.add("active");
  });
  // --------------------
  dropzone.addEventListener("dragleave", e => {
    e.target.classList.remove("active");
  });
  // --------------------
  dropzone.addEventListener("dragover", e => {
    e.preventDefault();
    // console.log("dragging...");
    e.dataTransfer.dropEffect = "copy"; // move, link, copy
    e.stopPropagation();
  });
  // --------------------
  dropzone.addEventListener("drop", e => {
    e.preventDefault();
    e.stopPropagation();
    e.target.classList.remove("active");
    // ---- box
    // console.log(e.dataTransfer.getData("plain"));
    // const id = e.dataTransfer.getData("plain");
    // const element = query("#" + id);
    // console.log(element, id);
    // dropzone.append(element);
    // ----
    const { files } = e.dataTransfer;

    handleFilesUpload(files);
  });
  // ------------------
  const list = query(".list");
  const showFilePreview = file => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.addEventListener("load", e => {
      const div = document.createElement("div");
      div.innerHTML = `
        <div class="col-3">
        <img src="${e.target.result}" alt="${file.name}" class="w-200 "/>
        <p class="t-gray">${file.name} | <span>${file.size / 1024} KB</span></p>
        </div>
      `;
      list.append(div);
    });
    // console.log(list, file);
  };
  // -------------------
  // const uploadFiles = async files => {
  const uploadFiles = files => {
    const form = new FormData();
    [...files].forEach(file => form.append(file.name, file));
    console.log([...form.entries()]);
    // _________________
    // const request = await fetch(`//dragdropfiles.glitch.me/upload`, {
    //   method: "POST",
    //   body: form
    // });
    // return await request.json();
  };
  // -------------------
  const isAllowedType = file =>
    ["image/png", "image/jpeg", "image/svg+xml"].includes(file.type);
  // -------------------
  const handleFilesUpload = files => {
    const filesToUpload = [...files].filter(isAllowedType);
    filesToUpload.forEach(showFilePreview);
    uploadFiles(filesToUpload);
    // const uploaded = await uploadFiles(filesToUpload);
    // if (uploaded) {
    //   console.log(uploaded);
    // }
  };
  // ------------------
  files.addEventListener("change", e => {
    // console.log(e, files);
    const { files } = e.target;
    handleFilesUpload(files);
  });
  // ------------------
  document.addEventListener("dragover", e => e.preventDefault());
  document.addEventListener("drop", e => e.preventDefault());
  //-------------------box----------------------------------//
  // const box = query(".dragme");
  // box.addEventListener("dragstart", e => {
  //   e.dataTransfer.setData("plain", e.target.id);
  //   // console.log(e.dataTransfer);
  // });
};

// -----------------------

init();
