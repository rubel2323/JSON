const displayForm = (creation = [1]) => {
  const displayAction = document.querySelector(".showform");
  displayAction.innerHTML = "";
  creation.forEach(() => {
    const creatForm = document.createElement("div");
    creatForm.innerHTML = `
      <div class="flex items-center justify-center py-25 flex-col gap-10">
        <fieldset class="fieldset bg-orange-200 border-base-300 rounded-box w-xs border p-4">
          <legend class="fieldset-legend">Login</legend>
          <label class="label">Email</label>
          <input type="email" class="input" placeholder="Email" />
          <label class="label">Password</label>
          <input type="password" class="input" placeholder="Password" />
          <button class="btn btn-neutral mt-4">Login</button>
        </fieldset>
        <fieldset class="fieldset bg-pink-200 border-base-300 rounded-box w-xs border p-4">
          <legend class="fieldset-legend">Login</legend>
          <label class="label">Email</label>
          <input type="email" class="input" placeholder="Email" />
          <label class="label">Password</label>
          <input type="password" class="input" placeholder="Password" />
          <button class="btn btn-neutral mt-4">Login</button>
        </fieldset>
        <fieldset class="fieldset bg-red-200 border-base-300 rounded-box w-xs border p-4">
          <legend class="fieldset-legend">Login</legend>
          <label class="label">Email</label>
          <input type="email" class="input" placeholder="Email" />
          <label class="label">Password</label>
          <input type="password" class="input" placeholder="Password" />
          <button class="btn btn-secondary mt-4">Login</button>
        </fieldset>
      </div>
    `;
    displayAction.appendChild(creatForm);
  });
};
