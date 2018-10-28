function make(...value) {
  let value_new = value.reduce((a, b) => a + b);
  if (typeof (value_new)==='number'){
  	return make.bind(this, value_new)
    }
  else {return value[0]}
}