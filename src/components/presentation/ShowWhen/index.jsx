export default function ShowWhen(props) {
  if (props.condition) {
    return props.children
  }

  return null
}
