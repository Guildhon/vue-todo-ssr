import '../../assert/styles/footer.styl'
export default {
  data () {
    return {
      author: 'Guildhon'
    }
  },
  render () {
    return (
      <div id="footer">
        <span>writtern by {this.author}</span>
      </div>
    )
  }
}
