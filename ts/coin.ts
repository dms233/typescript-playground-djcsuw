class Quarter {
  value: number = 0.25;
  get Value() {
    return this.value;
  }
  set Value(newValue: number) {
    this.value = newValue;
  }
  getImageUrl() {
    return '../img/Quarter.png';
  }
}

var coin = new Quarter();
var value = coin.Value;
coin.Value = 25;
