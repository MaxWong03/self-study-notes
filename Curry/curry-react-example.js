const createClickHandler = (id) => (event) => {
  event.preventPropogation()
  console.log(`data with id: ${id} was clicked`)
}
render() {
  return (
    DATA.map((elem) => (
      <button onClick={createClickHandler(elem.id)} />
  }
)
}
// this is same thing as:
render() {
  return (
    DATA.map((elem) => (
      <button onClick={(e) => {
        e.preventPropogation()
        console.log(`id ${elem.id} was clicked`)
      }}
    )
    )
}

