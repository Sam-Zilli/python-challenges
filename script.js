let pyodideReadyPromise = loadPyodide();

async function runCode() {
  const lockedCode = document.getElementById("locked-code").value;
  const userCode = document.getElementById("user-code").value;
  const fullCode = `${lockedCode}\n    ${userCode}\n\nprint(add_numbers(2, 3))`;

  let pyodide = await pyodideReadyPromise;

  try {
    let output = await pyodide.runPythonAsync(fullCode);
    document.getElementById("output").textContent = output;
  } catch (err) {
    document.getElementById("output").textContent = err;
  }
}
