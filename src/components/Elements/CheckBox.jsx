import react from 'react'

function CheckBox() {
    return(
        <>
        <input
        type="checkbox"
        id="status"
        name="status"
        className="text-sm accent-primary"
      />
      <label htmlFor="status" className="text-sm text-gray-600 ml-2">
        Keep me signed in
      </label>
      </>
    )   
}

export default CheckBox