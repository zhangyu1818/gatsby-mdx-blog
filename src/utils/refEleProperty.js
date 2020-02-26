class RefElePropertyHandle {
  constructor(refEle) {
    this.refEle = refEle;
  }
  static create = refEle => new RefElePropertyHandle(refEle);
  setProperty = (key, value) => (this.refEle.current.style[key] = value);
  setProperties = properties => {
    for (const [key, value] of Object.entries(properties)) {
      this.refEle.current.style[key] = value;
    }
  };
  addClass = (...classnames) => this.refEle.current.classList.add(classnames);
  removeClass = (...classnames) =>
    this.refEle.current.classList.remove(classnames);
  getBoundingClientRect = () => this.refEle.current.getBoundingClientRect();
}

export default RefElePropertyHandle;
