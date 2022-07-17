const App = () => {
  return (
    <div>
      <div>Hello,</div>
      <div>I have a book!</div>
      <div>Do you want to read my book?</div>
      <button onClick={() => alert("Yes, I do")}>Yes, I do.</button>
      <button onClick={() => alert("No, I don't")}>No, I don't.</button>
      <button onClick={() => alert("Ah I'm not sure")}>Ah I'm not sure.</button>
    </div>
  )
} 

export default App
