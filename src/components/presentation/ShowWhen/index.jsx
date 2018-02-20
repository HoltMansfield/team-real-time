export default function ShowWhen(props) {
  if (props.condition) {
    return props.children
  }

  return null
}
/*

  Example usage:

  <ShowWhen condition={this.series.length === 0}>
    // loading animation
  </ShowWhen>

  <ShowWhen condition={this.series.length > 0}>
    // Acutal Content
  </ShowWhen>

*/
