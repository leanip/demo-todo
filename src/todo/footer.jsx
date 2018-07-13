import '../assets/stylus/footer.styl'

export default {
  data() {
    return {
      author: 'Charlie'
    }
  },
  render() {
    return (
      <div id="footer">
        <span>Written by {this.author}</span>
      </div>
    )
  }
}