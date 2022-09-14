export default class Alert {
  divAlert = document.createElement("div");

  constructor(text = '') {
    this.text = text;
  }

  render() {
    this.divAlert.classList.add('alert', 'alert-danger');
    this.divAlert.setAttribute('id', 'alert');
    this.divAlert.innerHTML = this.text;

    return this.divAlert;
  }

  remove = () => this.divAlert.remove();
}