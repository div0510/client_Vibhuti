import React from "react";

const Navbar = () => {
  return (
    <>
      <div class="form-check">
        <input
          class="form-check-input"
          type="checkbox"
          value=""
          id="flexCheckDisabled"
          disabled
        />
        <label class="form-check-label" for="flexCheckDisabled">
          Disabled checkbox
        </label>
      </div>

      <div class="form-check">
        <input
          class="form-check-input"
          type="checkbox"
          value=""
          id="flexCheckCheckedDisabled"
          checked
          disabled
        />
        <label class="form-check-label" for="flexCheckCheckedDisabled">
          Disabled checked checkbox
        </label>
      </div>
    </>
  );
};

export default Navbar;
